---
name: ship
description: Review uncommitted changes, create a conventional commit, and push the current branch.
---

# Ship

Use this skill when the task is to finish the current worktree: inspect changes, stage relevant files, create one conventional commit, and push it.

## Workflow

1. Run `git status` and `git diff` to understand all changes. Include `--staged` if needed.
2. Stage only relevant files. Do not stage `.env` or credential files.
3. Use a conventional commit message with a lowercase summary and a short bullet list body.
4. Commit with a HEREDOC.
5. Push the current branch.

## Message format

- Subject: `<type>: <short summary>`
- Body: concise bullets describing what changed and why
- Types: `feat`, `fix`, `refactor`, `style`, `chore`, `docs`, `perf`, `test`
