# Ship

Review all uncommitted changes, including staged, unstaged, and untracked files. Create a single commit with a conventional commit message, then push to the current branch on GitHub.

Steps:

1. Run `git status` and `git diff` to understand all changes. Include `--staged` if there are staged files.
2. Stage all relevant changed and new files. Do not stage `.env` or credential files.
3. Write a commit message in this format:
   - First line: `<type>: <short summary>` with a lowercase summary and no period at the end.
   - Blank line.
   - Description body: short, concise bullet points summarizing what changed and why.
   - Allowed types: `feat:`, `fix:`, `refactor:`, `style:`, `chore:`, `docs:`, `perf:`, `test:`.
   - Keep the subject line under 72 characters.
4. Commit the changes using a HEREDOC for the message.
5. Push to the remote on the current branch.
