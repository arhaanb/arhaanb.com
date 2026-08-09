---
description: Migrate a project post from a Notion export zip into the local MDX format. Usage: /migrate-from-notion /path/to/post.zip
agent: build
---

# Migrate from Notion

Migrate one project post from a Notion export zip into this site's local MDX format at `content/projects/{slug}.mdx`, rendering on `/projects/{slug}` with embedded YouTube videos and link cards. `$ARGUMENTS` is the path to the zip (e.g. `posts/vipriya.zip`).

## Step 1 — Extract the zip

Notion exports are zips containing nested zips (one per page). Use the pre-approved temp dir:

```
mkdir -p /var/folders/3q/hgwsgwd52t522dsf94q31kkr0000gn/T/opencode/posts-{slug}
unzip -o {zip} -d /var/folders/3q/hgwsgwd52t522dsf94q31kkr0000gn/T/opencode/posts-{slug}/
unzip -o /var/folders/3q/hgwsgwd52t522dsf94q31kkr0000gn/T/opencode/posts-{slug}/*.zip -d /var/folders/3q/hgwsgwd52t522dsf94q31kkr0000gn/T/opencode/posts-{slug}/ 2>/dev/null
```

Read the extracted `*.md` file — it is the source of truth for content.

## Step 2 — Determine the slug

The slug is the markdown filename (`content/projects/{slug}.mdx` → `/projects/{slug}`). There is no allowlist anymore — a post exists iff its `.mdx` file exists. Any project with no local file renders the site's 404 page (`error.vue`).

## Step 3 — Set up images

- Create `public/img/projects/{slug}/`. NEVER place post images at `public/projects/{slug}/` — that path collides with the `/projects/{slug}` route (301 trailing-slash redirect).
- Copy each image from the export into it with a **descriptive, section-based name** (`cover.png`, `what-it-does-1.png`, `how-we-built-it.png`, `algorithm.png`, `hero.png`, `mobile-app.png`, …), not the Notion default names (`Untitled.png`, `5.png`, `Frame_77.png`).
- Resize to max 1600px and note the size drop: `sips -Z 1600 public/img/projects/{slug}/{name}.png`.
- Use matching descriptive alt text in the markdown, e.g. `![What it does — 1](/img/projects/sprash/what-it-does-1.png)`.

## Step 4 — Write content/projects/{slug}.mdx

Frontmatter `title` + `description`, then the body. **Keep all prose verbatim** — only change presentation.

- `# {Title}` as the single h1.
- Awards/callouts (`<aside>`, `> `) → `>` blockquote.
- YouTube links → `::Youtube{id="<video-id>" title="..."}` on its own line, closed by `::` on its own line.
- Key external links (website, Behance, repo, APK drive link, demo) → `::LinkCard{href="..." title="..." desc="..."}` blocks.
- Normalize headings: main sections `##`, subsections `###`.
- Inline code, lists, and prose stay as-is. Drop malformed artifacts (e.g. trailing `**`, empty-text links) only when they render nothing.

## Step 5 — Verify

- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/projects/{slug}` must return `200`.
- Grep the HTML for `youtube.com/embed/{id}` and each linkcard URL to confirm they rendered.

## Critical gotchas

- The bundled MDC parser (0.9.5) does **NOT** support self-closing `<Youtube />` / `<LinkCard />` — it parses them as open HTML containers and swallows all following content. Always use the `::Component{...}` block form with `::` closing marker.
- Content and component changes hot-reload on the user's dev server — no restart needed.
- `.mdx` files are parsed because the markdown transformer regex is `/\.md/i` (substring match).
