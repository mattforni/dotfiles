# Shared .account profile resolution.
#
# Sourced by ~/bin/claude, ~/bin/gws, and .functions, which all read the same
# `.account` marker convention and previously each carried their own copy of
# this logic. That duplication was not theoretical: a path traversal fix on
# 2026-08-07 had to be applied three separate times, and the bin/claude copy was
# missed twice before a review caught it. One copy, three callers.
#
# Contract:
#   account_resolve_profile   -> prints the profile name for $PWD, never empty
#   account_marker_profile    -> nearest .account marker, or empty
#   account_ambient_profile   -> ~/.config/gws-current, defaulting to home
#   account_valid_profile <s> -> exit status only
#
# Callers set ACCOUNT_LOG_PREFIX to label warnings, and ACCOUNT_QUIET=1 to
# suppress them. .functions sets ACCOUNT_QUIET because it resolves on every
# chpwd and would otherwise warn on every prompt inside a tree with a broken
# marker. Keep ACCOUNT_QUIET unexported so child processes stay loud.
#
# Must stay sourceable by both bash and zsh; .functions is read by both.

# A profile name is joined straight into "$HOME/.config/gws-$profile" and
# "$HOME/.claude-$profile", so it has to be a single path component. Anything
# holding a slash or a dot could walk out of those directories. Reject rather
# than sanitize: a malformed marker silently resolving to another account is the
# exact failure the marker system exists to prevent.
account_valid_profile() {
    [[ "$1" =~ ^[A-Za-z0-9_-]+$ ]]
}

account_warn() {
    [[ -n "${ACCOUNT_QUIET:-}" ]] && return 0
    echo "${ACCOUNT_LOG_PREFIX:-account}: $1" >&2
}

# Read a one line profile name from a file. Prints nothing when the file is
# absent, empty, or holds a name that is not a single path component.
#
# The local is named `src`, not `path`, deliberately. In zsh `path` is a special
# variable tied to $PATH as an array, so `local path=...` clobbers command
# lookup for the rest of the function; `tr` then fails to resolve, the error is
# swallowed by 2>/dev/null, and every marker silently reads as empty. Both shims
# are bash and never saw it. This library is the first copy zsh sources, so the
# trap is live here. Avoid zsh special names throughout: path, status, prompt,
# cdpath, manpath, dirstack, argv.
account_read_profile_file() {
    local src="$1" name=""
    [[ -f "$src" ]] || return 0
    name="$(tr -d '[:space:]' < "$src" 2>/dev/null)" || return 0
    [[ -n "$name" ]] || return 0
    if ! account_valid_profile "$name"; then
        account_warn "ignoring malformed profile name in $src"
        return 0
    fi
    # The zero profile retired with the Zero Homes W2 and its dirs are gone.
    # Normalize stale markers and pointers so resolution never lands on it.
    [[ "$name" == "zero" ]] && name="home"
    printf '%s' "$name"
}

# Nearest .account marker walking up from $PWD. A marker that exists but holds
# an unusable name stops the walk rather than leaking resolution to a parent,
# which would be a silent account switch.
account_marker_profile() {
    local dir="${1:-$PWD}" name=""
    while :; do
        if [[ -f "$dir/.account" ]]; then
            name="$(account_read_profile_file "$dir/.account")"
            printf '%s' "$name"
            return 0
        fi
        [[ "$dir" == "$HOME" || "$dir" == "/" ]] && return 0
        dir="$(dirname "$dir")"
    done
}

account_ambient_profile() {
    local name
    name="$(account_read_profile_file "$HOME/.config/gws-current")"
    printf '%s' "${name:-home}"
}

# Marker first, ambient second. Never prints empty.
account_resolve_profile() {
    local name
    name="$(account_marker_profile "${1:-$PWD}")"
    [[ -n "$name" ]] || name="$(account_ambient_profile)"
    printf '%s' "$name"
}
