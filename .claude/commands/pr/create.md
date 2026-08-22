---
description: "Create a well-documented pull request from commits since main, with a generated title/description. Usage: /pr:create [optional context]"
allowed-tools: Bash(git *), Bash(gh *)
model: sonnet
effort: medium
---

# Pull Request Skill

Create well-documented pull requests with comprehensive descriptions.

## Usage
```
/pr:create [optional context]
```

## Current state

Current branch:
```
!`git branch --show-current`
```

Commits since branching from main:
```
!`git log main..HEAD --oneline 2>/dev/null || echo "No commits ahead of main, or 'main' branch not found"`
```

Diff summary since main:
```
!`git diff main...HEAD --stat 2>/dev/null`
```

## Behavior
1. Analyze commits since branching from main
2. Generate a descriptive PR title
3. Create detailed description with:
   - Summary of changes
   - Testing instructions
4. Create PR via `gh pr create`

If the user provided arguments via `$ARGUMENTS`, treat it as additional context that supplements the summary and testing sections — it does not replace analysis of the actual commits/diff.

## PR Template
```markdown
## Summary
Brief description of changes

## Changes
- List of specific changes made

## Testing
How to test these changes

## Checklist
- [ ] Tests pass
- [ ] Documentation updated
- [ ] No breaking changes
```

## Requirements
- GitHub CLI (`gh`) installed and authenticated
- On a feature branch (not main)

## Instructions
1. Confirm the current branch is not `main` — if it is, stop and tell the user to switch to a feature branch first.
2. Confirm `gh auth status` succeeds — if not, tell the user to run `gh auth login` first.
3. Determine the merge base with `main` and review the full commit history and diff since that point (`git log main..HEAD`, `git diff main...HEAD`), not just the stat summary above.
4. Check whether the branch already has an open PR (`gh pr view --json url 2>/dev/null`) — if so, show the user the existing PR URL and ask whether to update it instead of creating a new one.
5. Write a concise PR title (under ~70 characters) that captures the overall change, not just the latest commit.
6. Fill in the PR Template above using the commit history and diff:
   - **Summary**: why the change was made, not just what changed.
   - **Changes**: a bullet list of the specific changes, derived from the commits.
   - **Testing**: concrete steps to verify the change (commands to run, pages to visit, etc.), based on what actually changed.
   - **Checklist**: leave as unchecked boxes for the user to confirm.
   - If `$ARGUMENTS` was provided, fold it into the Summary/Testing sections as additional context — it supplements the diff-based analysis, it doesn't replace it.
7. If the branch hasn't been pushed yet, or has unpushed commits, push it (`git push -u origin <branch>`) — confirm with the user first, per standard git-safety practice.
8. Create the PR with `gh pr create --title "..." --body "..."`, passing the body via a HEREDOC.
9. Report the PR URL back to the user.
