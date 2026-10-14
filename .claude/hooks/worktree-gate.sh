#!/usr/bin/env bash
# Worktree gate: BLOCK mutating git on a repo's primary checkout, forcing all
# session work into a dedicated worktree so concurrent sessions never collide.
# Denies via the PreToolUse permissionDecision. Two deliberate carve-outs:
#   1. `merge` is allowed on primary (landing a branch into main is a landing step).
#   2. Prefix a command with WT_GATE_BYPASS=1 to override for genuine primary work
#      (a landing step, or committing symlinked homebase config like GC itself).
# The repo a git call targets is its `git -C <path>`, else the directory the
# command has moved to: a typed `cd <path> && git commit` is judged on <path>,
# not the session cwd. Options to cd are skipped; a cd whose target does not
# exist, or cannot be known (`cd -`, `cd "$DIR"`, `cd $(...)`), leaves it where
# it was; a cd inside `( )` or `$( )` ends at the paren. Following cd never
# loosens the gate past the whole command judged against the cwd, except for a
# plain command (no pipe, background &, paren, or backtick outside quotes).
# Scripts are judged too: a shell script the command runs (`./s.sh`, `bash s.sh`,
# `source s.sh`, `bash -c ./s.sh`, `bash < s.sh`, after any `cd`, env assignment,
# or wrapper) is read line by line, and each git call in it gets the same test as
# a typed one, so wrapping `git -C <primary> commit` in a scratchpad script no
# longer walks around the gate. Inside a script a plain `cd <path>` line moves
# the fallback directory, and quoted text is dropped (a -C path is unquoted
# first), so `echo "then git commit"` is data, not a command.
# Limits: one level deep (a script a script calls is not read); shell scripts
# only (a .sh, .bash, or .zsh name, or a sh, bash, or zsh shebang, under 256 KB);
# a script merely read (cat, grep) is not judged; a script piped into a shell
# (`cat s.sh | bash`) is not read; paths with spaces are not parsed.
# Fails OPEN: any resolution error exits 0, never worse than an ungated command.
# That includes a path the hook cannot resolve, like `git -C "$REPO"`, or a
# `cd "$DIR"` or a cd to a directory the script makes first, inside a script (a
# typed one keeps the directory, as above); only
# ~, $HOME, and ${HOME} are expanded.
set -uo pipefail
unset CDPATH

input=$(cat)
cmd=$(jq -r '.tool_input.command // empty' <<<"$input" 2>/dev/null)
[[ -z "$cmd" ]] && exit 0
cwd=$(jq -r '.cwd // empty' <<<"$input" 2>/dev/null)
[[ -z "$cwd" ]] && cwd=$PWD

# Explicit escape hatch. Prefix the command with WT_GATE_BYPASS=1 to allow a
# genuine primary-checkout mutation (landing step, symlinked-config commit).
grep -qE '(^|[[:space:]])WT_GATE_BYPASS=1([[:space:]]|$)' <<<"$cmd" && exit 0

deny() {
  cat <<'JSON'
{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"Worktree gate: this mutating git command targets a repo PRIMARY checkout. Per GC, session work must run in a dedicated worktree (EnterWorktree) so concurrent sessions never collide. Cut a worktree and rerun there. For another repo, cut one from its primary with `git -C <repo> worktree add <path> -b <branch> origin/main`, never a fresh clone, which reads as a primary here. For a genuine landing step or a symlinked-config commit that must run on primary, prefix the command with WT_GATE_BYPASS=1."}}
JSON
  exit 0
}

expand_home() {
  local p=$1
  p=${p/#\~/$HOME}
  p=${p//\$\{HOME\}/$HOME}
  p=${p//\$HOME/$HOME}
  printf '%s' "$p"
}

strip_quotes() {
  local w=$1
  w=${w#[\"\']}
  w=${w%[\"\']}
  printf '%s' "$w"
}

# Resolve a path against a base directory. Prints nothing when the path still
# holds a variable or the base is unknown, which callers treat as fail open.
resolve() {
  local p base=$2
  p=$(expand_home "$(strip_quotes "$1")")
  [[ -z "$p" || "$p" == *'$'* ]] && return
  if [[ "$p" == /* ]]; then
    printf '%s' "$p"
  elif [[ -n "$base" ]]; then
    printf '%s/%s' "$base" "$p"
  fi
}

# Where a cd lands, given the base and the words after `cd`. Options are skipped.
# Prints the directory and returns 0; returns 1 when the target does not exist
# yet, 2 when it cannot be known (`cd -`, a variable, a relative path from an
# unknown base, or no word at all, which is what `cd $(...)` and a backtick cd
# leave once the command is split).
cd_dest() {
  local base=$1 t
  shift
  while [[ $# -gt 0 && "$1" == -?* ]]; do
    [[ "$1" == -- ]] && { shift; break; }
    shift
  done
  t=${1:-}
  [[ -z "$t" || "$t" == - ]] && return 2
  t=$(resolve "$t" "$base")
  [[ -z "$t" ]] && return 2
  [[ -d "$t" ]] || return 1
  printf '%s' "$t"
}

# Only mutating git operations (working tree or branch state changers).
# `merge` is intentionally EXCLUDED from the blocked set: it is the landing step
# that runs on the primary checkout. Tolerates global options between git and
# the subcommand. Read only stash invocations (list/show) are stripped first.
GIT_PREFIX="(^|[;&|[:space:]])git([[:space:]]+-[cC][[:space:]]+(\"[^\"]*\"|'[^']*'|[^[:space:]]+)|[[:space:]]+--?[^[:space:]]+)*[[:space:]]+"
is_mutating() {
  local filtered
  filtered=$(sed -E "s/${GIT_PREFIX}stash[[:space:]]+(list|show)([^;&|]*)/ /g" <<<"$1")
  grep -qE "${GIT_PREFIX}(commit|checkout|switch|rebase|cherry-pick|reset|restore|stash|revert|am)([[:space:]]|\$)" <<<"$filtered"
}

# Linked worktrees have git-dir != git-common-dir; a primary checkout matches.
is_primary() {
  local dir=$1 git_dir common_dir
  git_dir=$(git -C "$dir" rev-parse --absolute-git-dir 2>/dev/null) || return 1
  common_dir=$(git -C "$dir" rev-parse --git-common-dir 2>/dev/null) || return 1
  common_dir=$(cd "$dir" 2>/dev/null && cd "$common_dir" 2>/dev/null && pwd -P) || return 1
  [[ "$git_dir" == "$common_dir" ]]
}

# Judge one line: succeeds when it runs mutating git against a primary. The repo
# is the line's git -C <path> (quoted or not), else the fallback directory.
judge() {
  local line=$1 fallback=$2 raw dir
  is_mutating "$line" || return 1
  raw=$(sed -nE "s/.*git[[:space:]]+-C[[:space:]]+(\"([^\"]+)\"|'([^']+)'|([^[:space:]]+)).*/\\2\\3\\4/p" <<<"$line" | head -1)
  if [[ -n "$raw" ]]; then
    dir=$(resolve "$raw" "$fallback")
  else
    dir=$fallback
  fi
  [[ -z "$dir" ]] && return 1
  is_primary "$dir"
}

is_script() {
  local f=$1
  [[ -f "$f" && -r "$f" ]] || return 1
  [[ $(wc -c <"$f" 2>/dev/null || echo 999999) -le 262144 ]] || return 1
  case "$f" in
    *.sh|*.bash|*.zsh) return 0 ;;
  esac
  head -n1 "$f" 2>/dev/null | grep -qE '^#!.*[/[:space:]](ba|z)?sh([[:space:]]|$)'
}

# Judge every line of a script, starting from the directory it runs in.
judge_script() {
  local line fallback=$2
  local -a cd_words
  while IFS= read -r line || [[ -n "$line" ]]; do
    line=${line#"${line%%[![:space:]]*}"}
    [[ -z "$line" || "$line" == \#* ]] && continue
    # A cd that cannot be known fails open, and so does one to a directory that
    # does not exist yet, since a script often makes it first (worktree add).
    if [[ "$line" =~ ^cd([[:space:]]|$) ]]; then
      read -ra cd_words <<<"${line%%[;&|]*}"
      fallback=$(cd_dest "$fallback" "${cd_words[@]:1}") || fallback=""
    fi
    # Quoted text is data, not a command (echo "then git commit"), so it is
    # dropped before judging, after unquoting a -C path so the repo survives.
    line=$(sed -E -e "s/-C[[:space:]]+\"([^\"]*)\"/-C \\1/g" -e "s/-C[[:space:]]+'([^']*)'/-C \\1/g" \
      -e "s/\"[^\"]*\"|'[^']*'//g" <<<"$line")
    judge "$line" "$fallback" && return 0
  done <"$1"
  return 1
}

# Quoted text dropped, after unquoting a -C or cd path so the directory survives.
strip_quoted() {
  sed -E -e "s/-C[[:space:]]+\"([^\"]*)\"/-C \\1/g" -e "s/-C[[:space:]]+'([^']*)'/-C \\1/g" \
    -e "s/(^|[;&|([:space:]])cd[[:space:]]+\"([^\"]*)\"/\\1cd \\2/g" \
    -e "s/(^|[;&|([:space:]])cd[[:space:]]+'([^']*)'/\\1cd \\2/g" \
    -e "s/\"[^\"]*\"|'[^']*'//g" <<<"$1"
}

# Walk a command's simple commands in order, starting from the session cwd, and
# succeed when one runs mutating git against a primary. Each is judged against
# the directory the commands before it moved to, so `cd <primary> && git commit`
# is judged on the primary whatever the cwd. A subshell gets its own directory:
# a paren pushes the current one and its close pops it back. With a second
# argument of 1 the script a segment runs, if any, is read too: env assignments
# and wrappers are skipped, and the script is the word in command position (or
# the first operand of sh, bash, zsh, source, or `.`).
walk() {
  local segments=$1 read_scripts=$2 base=$cwd segment first next target script i op
  local -a words stack=()
  for op in '$(' '(' ')'; do
    segments=${segments//"$op"/$'\n'"${op#\$}"$'\n'}
  done
  for op in '&&' '||' ';' '&' '|' '`'; do
    segments=${segments//"$op"/$'\n'}
  done
  while IFS= read -r segment; do
    case "${segment//[[:space:]]/}" in
      '(') stack+=("$base"); continue ;;
      ')')
        if (( ${#stack[@]} > 0 )); then
          base=${stack[${#stack[@]} - 1]}
          unset 'stack[${#stack[@]}-1]'
        fi
        continue
        ;;
    esac
    judge "$segment" "$base" && return 0
    read -ra words <<<"$segment"
    i=0
    while (( i < ${#words[@]} )); do
      case "${words[i]}" in
        *=*|env|exec|nohup|time|command) i=$((i + 1)) ;;
        *) break ;;
      esac
    done
    (( i < ${#words[@]} )) || continue
    first=$(strip_quotes "${words[i]}")
    if [[ "$first" == cd ]]; then
      next=$(cd_dest "$base" "${words[@]:i+1}") && base=$next
      continue
    fi
    [[ "$read_scripts" == 1 ]] || continue
    case "${first##*/}" in
      sh|bash|zsh|source|.)
        i=$((i + 1))
        # Options are skipped; `-c <string>` and `< file` both name the script
        # by the word that follows (the string's first word, for -c).
        while (( i < ${#words[@]} )) && [[ "${words[i]}" == -* || "${words[i]}" == '<' ]]; do
          if [[ "${words[i]}" == '<' || ( "${words[i]}" == *c* && "${words[i]}" != --* ) ]]; then
            i=$((i + 1))
            break
          fi
          i=$((i + 1))
        done
        (( i < ${#words[@]} )) || continue
        target=${words[i]}
        ;;
      *) target=$first ;;
    esac
    script=$(resolve "$target" "$base")
    [[ -n "$script" ]] && is_script "$script" && judge_script "$script" "$base" && return 0
  done <<<"$segments"
  return 1
}

# The floor is main's old verdict: the whole command judged against the cwd.
# Following cd may lift that deny only when the command is plain enough to walk
# with confidence: quoted text dropped, and no pipe, background &, paren, or
# backtick left, since a cd inside any of those does not move the shell. Then
# the walk of that plain text must clear every git call.
if judge "$cmd" "$cwd"; then
  plain=$(strip_quoted "$cmd")
  rest=${plain//&&/}
  rest=${rest//||/}
  [[ "$rest" == *[\|\&\(\)\`]* ]] && deny
  walk "$plain" 0 && deny
fi
walk "$cmd" 1 && deny
exit 0
