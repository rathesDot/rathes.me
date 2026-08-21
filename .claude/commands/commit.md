---
description: "Commit changes with gitmoji format, splitting into atomic commits by topic. Usage: /commit [optional hint]"
model: haiku
allowed-tools: Bash(git *)
---

# Gitmoji Commit

Create atomic git commits using gitmoji convention. Split changes into the smallest logical commits possible — each commit should cover exactly one topic/concern.

## Current state

Staged changes:
```
!`git diff --cached --stat 2>/dev/null || echo "No staged changes"`
```

Working tree status:
```
!`git status --short 2>/dev/null`
```

## Instructions

1. Run `git status` and `git diff` (both staged and unstaged) to understand ALL changes.
2. Do NOT stage files that look like secrets (.env, credentials, etc). Ask the user before staging untracked files that weren't obviously just created as part of the current work.
3. **Group changes by topic.** Analyze every changed/untracked file and group them into the smallest logical commits. Each group should represent a single concern. Examples of separate topics:
   - Configuration vs. source code vs. documentation
   - Different features or bug fixes
   - CI/CD changes vs. app code
   - Model/schema changes vs. UI changes
   - Third-party config (e.g. `.claude/`, linter configs) vs. app code
   - If a single file contains changes for multiple topics, it's OK to include it in whichever commit it fits best — don't try to split within a file.
4. **For each group**, in a logical order (e.g. foundational changes first):
   a. Unstage everything first with `git reset HEAD` (skip on the first group if nothing is staged).
   b. Stage only the files for this group using `git add <specific files>`.
   c. Choose the most appropriate gitmoji:
      - ✨ New feature
      - 🐛 Bug fix
      - 🔧 Configuration/settings
      - 📝 Documentation
      - ♻️ Refactor
      - 🎨 Code style/structure
      - ⚡ Performance
      - 🔥 Remove code/files
      - 🚀 Deploy
      - ✅ Tests
      - 🏗️ Architecture changes
      - 💄 UI/cosmetic
      - 🔒 Security
      - ⬆️ Upgrade dependencies
      - 🚚 Move/rename files
      - 💡 Comments
      - 🎉 Initial commit
      - 🍱 Assets
      - 🗃️ Database/model changes
      - 📱 Responsive/mobile
      - 🩹 Simple fix
   d. Write a concise commit message: `GITMOJI Short description`
      - If the user provided arguments via `$ARGUMENTS`, use that as a hint for the messages.
      - Focus on the "why" not the "what".
   e. Commit using a HEREDOC:
   ```bash
   git commit -m "$(cat <<'EOF'
   GITMOJI Description here
   EOF
   )"
   ```
5. After all commits, run `git log --oneline -n <number_of_commits>` to show what was created.
6. Show the user a summary of all commits (hashes and messages).
