---
name: address-gemini-feedback
description: Address Gemini's PR feedback, commit changes, and request re-review
---

Address all feedback from Gemini in the current PR by following these steps:

1. **Fetch and analyze PR comments**:
   - Use `gh pr view <PR_NUMBER> --comments` to get all comments
   - Use `gh pr diff <PR_NUMBER>` to understand the changes
   - Identify all feedback points from Gemini

2. **Address each feedback item**:
   - Fix code issues identified by Gemini
   - Apply suggested improvements
   - Ensure all concerns are resolved

3. **Verify changes**:
   - Run the project's lint command
   - Run the project's typecheck command
   - Run the project's unit tests

4. **Commit the fixes**:
   - Stage all changes with `git add -A`
   - Commit with a clear message: `fix: address code review feedback from Gemini`
   - Include details of what was fixed in the commit message

5. **Push changes**:
   - Push to the PR branch with `git push`

6. **Post PR comment**:
   - Use `gh pr comment <PR_NUMBER> --body "..."` to post a comment
   - List each addressed feedback item
   - Thank Gemini for the review
   - Format the comment professionally

7. **Request re-review**:
   - Use GitHub CLI to request a re-review from Gemini
   - Command: `gh pr review <PR_NUMBER> --request`

Make sure to handle any errors gracefully and provide clear feedback about what was done.
