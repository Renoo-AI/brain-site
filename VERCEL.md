# Vercel waitlist setup

The waitlist posts to `/api/waitlist`, handled by the Vercel Serverless Function in `api/waitlist.js`. Telegram credentials are read only on the server and must never be added to browser code or committed to Git.

In the Vercel project, open **Settings → Environment Variables** and add these for Production (and Preview/Development if needed):

- `TELEGRAM_BOT_TOKEN` — use a fresh token created with BotFather.
- `TELEGRAM_CHAT_ID` — the Telegram chat that should receive signup alerts.

Redeploy after changing environment variables. Before testing, open a private chat with the bot and send `/start` so Telegram allows it to message you. The Vercel project should use this repository as its root directory; the `api/` folder is detected automatically.

For local development, use `vercel dev` with the variables configured in Vercel, or create a local `.env.local` file with the same variable names and values. `.env.local` is ignored by Git; never commit it.
