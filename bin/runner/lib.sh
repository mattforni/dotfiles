# shellcheck shell=bash
# Shared plumbing for the runner commands.
#
# Sourced by bin/runner/*, which would otherwise each hard-code the GCP
# coordinates and each grow its own copy of the "which gcloud identity can read
# this vault" dance. The same three-copies problem already produced
# bin/lib/account-profile.sh and bin/lib/vault.sh; this is the third instance
# of the lesson, not the first.

RUNNER_PROJECT="${RUNNER_PROJECT:-atelic}"
RUNNER_REGION="${RUNNER_REGION:-us-central1}"
RUNNER_REGISTRY="${RUNNER_REGISTRY:-us-central1-docker.pkg.dev/$RUNNER_PROJECT/runners}"

die() { echo "${0##*/}: $*" >&2; exit 1; }

# The repository root, found from this library rather than from $PWD, so every
# command works from anywhere.
runner_repo_root() { cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd; }

# Resolve and validate a runner name into its source directory.
runner_dir() {
    local name="${1:-}" root dir
    [[ -n "$name" ]] || die "usage: ${0##*/} <runner-name> [options]"
    root="$(runner_repo_root)"
    dir="$root/runners/$name"
    [[ -d "$dir" ]] || die "no runner named '$name' (looked in $root/runners)"
    [[ -f "$dir/entrypoint.sh" ]] || die "$dir has no entrypoint.sh"
    printf '%s' "$dir"
}

# The vaults answer to two identities and the active gcloud account is only
# ever one of them, so a read that spans both projects has to try each. The
# working account is cached per project for the life of the process, since a
# fetch-env run reads eight secrets and probing on every one is slow.
#
# A newline delimited "project<TAB>account" string rather than an associative
# array, for the same reason bin/vault/push-secrets uses one: the shebang is
# `env bash`, which resolves to bash 3.2 on a Mac with no homebrew bash on
# PATH, and 3.2 has no `declare -A`. Sourcing this would fail outright there.
RUNNER_VAULT_ACCOUNTS=""

runner_vault_account() {
    printf '%s\n' "$RUNNER_VAULT_ACCOUNTS" | while IFS="$(printf '\t')" read -r p a; do
        [[ "$p" == "$1" ]] || continue
        printf '%s' "$a"
        break
    done
}

runner_access_secret() {
    # $1 project, $2 secret name, $3 version
    local project="$1" name="$2" version="${3:-latest}" account value cached
    cached="$(runner_vault_account "$project")"
    if [[ -n "$cached" ]]; then
        gcloud secrets versions access "$version" --secret="$name" --project="$project" \
            --account="$cached" 2>/dev/null && return 0
        return 1
    fi
    while read -r account; do
        [[ -n "$account" ]] || continue
        if value="$(gcloud secrets versions access "$version" --secret="$name" --project="$project" --account="$account" 2>/dev/null)"; then
            RUNNER_VAULT_ACCOUNTS="$RUNNER_VAULT_ACCOUNTS$project$(printf '\t')$account
"
            printf '%s' "$value"
            return 0
        fi
    done < <(gcloud auth list --filter=-status:INVALID --format='value(account)' 2>/dev/null)
    return 1
}
