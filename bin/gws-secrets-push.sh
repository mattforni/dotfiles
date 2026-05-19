#!/usr/bin/env bash
# Push local gws client_secret.json files to GCP Secret Manager.
#
# This is the "first machine" half of the gws multi-profile sync:
#   - This script uploads each ~/.config/gws-<profile>/client_secret.json
#     into Secret Manager under gws-client-secret-<profile>.
#   - setup.sh (on every other machine) pulls them back down.
#
# Bootstrap project defaults to "gws-forni"; override via GWS_BOOTSTRAP_PROJECT.
# One-time setup (do this once, by hand, on the account that owns the project):
#   gcloud auth login mattforni@gmail.com
#   gcloud projects create gws-forni --name="GWS"
#   gcloud services enable secretmanager.googleapis.com --project=gws-forni
#   # Grant your work account read access so setup.sh works regardless of
#   # which gcloud account is primary on a given machine:
#   gcloud projects add-iam-policy-binding gws-forni \
#     --member=user:mattf@zerohomes.io \
#     --role=roles/secretmanager.secretAccessor

set -euo pipefail

PROJECT="${GWS_BOOTSTRAP_PROJECT:-gws-forni}"

if ! command -v gcloud >/dev/null 2>&1; then
    echo "gcloud not found on PATH" >&2
    exit 1
fi

if ! gcloud projects describe "$PROJECT" >/dev/null 2>&1; then
    cat >&2 <<EOF
Bootstrap project not found: $PROJECT
Create it once (as the personal Google account that should own it):

  gcloud auth login mattforni@gmail.com
  gcloud projects create $PROJECT --name="GWS"
  gcloud services enable secretmanager.googleapis.com --project=$PROJECT

Then rerun this script.
EOF
    exit 1
fi

pushed=0
skipped=0
for profile_dir in "$HOME"/.config/gws-*/; do
    [[ -d "$profile_dir" ]] || continue
    profile="${profile_dir##*/.config/gws-}"
    profile="${profile%/}"
    [[ "$profile" == "current" ]] && continue

    secret_file="$profile_dir/client_secret.json"
    if [[ ! -f "$secret_file" ]]; then
        echo "skip $profile: no client_secret.json at $secret_file"
        skipped=$((skipped + 1))
        continue
    fi

    secret_name="gws-client-secret-$profile"

    if ! gcloud secrets describe "$secret_name" --project="$PROJECT" >/dev/null 2>&1; then
        echo "Creating secret $secret_name in $PROJECT"
        gcloud secrets create "$secret_name" \
            --replication-policy=automatic \
            --project="$PROJECT" >/dev/null
    fi

    echo "Adding new version of $secret_name from $secret_file"
    gcloud secrets versions add "$secret_name" \
        --data-file="$secret_file" \
        --project="$PROJECT" >/dev/null
    pushed=$((pushed + 1))
done

echo
echo "Done. Pushed: $pushed, skipped: $skipped"
echo
echo "On any other machine, run ./setup.sh and the per-profile auth block will"
echo "fetch each client_secret.json from $PROJECT automatically (provided the"
echo "active gcloud account has secretAccessor on that project)."
