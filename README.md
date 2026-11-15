# [Arhaan Bahadur](https://arhaanb.com)

> My portfolio website. Live at [arhaanb.com](https://arhaanb.com).

## Overview

- `/` - About me
- `/projects` - Showcase of my projects
- `/explore` - A little extra about me

The website also has a realtime indicator of what song I'm currently playing on Spotify, and my top 5 songs of the month. This was possible using [Cloudflare Workers](https://workers.cloudflare.com) and the Spotify API. Learn more about this website at [arhaanb.com/explore](https://arhaanb.com/explore).

## Built using

- [Vite](https://vitejs.org)
- [Vue 3](https://vuejs.org)
- Spotify API

## Deployment

Hosted on Cloudflare Workers (Nuxt/Nitro `cloudflare_module` preset, config in `wrangler.jsonc`).

Pushes to `main` deploy to production automatically via `.github/workflows/deploy.yml`. It needs these GitHub repo secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN` (the Spotify ones are synced to the Worker as secrets on each deploy).

The contact form sends mail through Cloudflare Email Routing (`send_email` binding in `wrangler.jsonc`) to a verified destination address.

Manual deploy from your machine: `pnpm build && npx wrangler deploy`.
