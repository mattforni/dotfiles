# shellcheck shell=bash
# Which Secret Manager project holds a given credential.
#
# Sourced by bin/vault/push-secrets, bin/vault/push-gws-secrets and setup.sh,
# which would otherwise each hard-code a project name and drift apart. That
# duplication is not theoretical here: the same three-copies problem already
# bit the .account resolver badly enough to produce bin/lib/account-profile.sh.
#
# The split, 2026-08-14: one shared vault became three, one per identity, named
# to match the gws profiles they serve.
#
#   forni-keys   personal   mattforni@gmail.com, its own billing account
#   atelic-keys  atelic     matt@atelic.me, inside the atelic.me organization
#   tpf-keys     tpf        the Product Forge set, kept separate so retiring
#                           that venture is one project delete rather than
#                           picking secrets out of a shared vault
#
# They were previously commingled in a single project, which put YNAB and
# calendar tokens inside a business organization and the business's spend on a
# personal footing. The entity separation the Atelic S-corp depends on is not
# only a legal artifact; it has to be true of the infrastructure too.
#
# The `atelic` project (number 897452392033) deliberately holds no secrets. It
# survives untouched because the Business Profile API allowlist is bound to
# that project number, so it can never be renamed or recreated.
#
# Contract:
#   vault_project_for_profile <profile> -> project holding gws-oauth-client-<profile>
#   vault_project_for_secret  <name>    -> project holding that credential
#
# Both always print a project. Anything unrecognized falls to the Atelic vault,
# because an unlisted credential is far likelier to be business tooling than
# something personal, and landing in the wrong business vault is a tidiness
# problem where landing personal credentials in a business org is not.

VAULT_PROJECT_ATELIC="${VAULT_PROJECT_ATELIC:-atelic-keys}"
VAULT_PROJECT_PERSONAL="${VAULT_PROJECT_PERSONAL:-forni-keys}"
VAULT_PROJECT_TPF="${VAULT_PROJECT_TPF:-tpf-keys}"

# gws profile to vault project. The profile names and the project names are
# deliberately parallel (personal/atelic/tpf), so a new profile needs one line
# here and nothing else.
vault_project_for_profile() {
    case "$1" in
        personal) printf '%s' "$VAULT_PROJECT_PERSONAL" ;;
        tpf)      printf '%s' "$VAULT_PROJECT_TPF" ;;
        *)        printf '%s' "$VAULT_PROJECT_ATELIC" ;;
    esac
}

# Credential name to vault project. Personal and TPF are the explicit lists
# because they are the shorter ones and the ones whose misplacement matters;
# Atelic is the default, so a new business credential needs no edit here.
vault_project_for_secret() {
    case "$1" in
        ynab-token|reclaim-api-key|todoist-api-token|gws-oauth-client-personal)
            printf '%s' "$VAULT_PROJECT_PERSONAL" ;;
        hubspot-service-key-tpf|linear-cli-theproductforge|gws-oauth-client-tpf)
            printf '%s' "$VAULT_PROJECT_TPF" ;;
        *)
            printf '%s' "$VAULT_PROJECT_ATELIC" ;;
    esac
}
