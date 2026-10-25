function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  return res.end(JSON.stringify(body));
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendJson(res, 405, { error: 'Method not allowed.' });
  }

  const origin = req.headers.origin;
  if (origin) {
    try {
      if (new URL(origin).origin !== `https://${req.headers.host}` &&
          new URL(origin).host !== req.headers.host) {
        return sendJson(res, 403, { error: 'Request origin not allowed.' });
      }
    } catch {
      return sendJson(res, 403, { error: 'Invalid request origin.' });
    }
  }

  if (!req.headers['content-type']?.toLowerCase().includes('application/json')) {
    return sendJson(res, 415, { error: 'Expected JSON.' });
  }

  let submission = req.body;
  if (typeof submission === 'string') {
    try { submission = JSON.parse(submission); }
    catch { return sendJson(res, 400, { error: 'Invalid JSON.' }); }
  }
  if (!submission || typeof submission !== 'object' || Array.isArray(submission)) {
    return sendJson(res, 400, { error: 'Invalid JSON.' });
  }

  // Quietly accept the honeypot so basic form bots do not reach Telegram.
  if (typeof submission.website === 'string' && submission.website.trim()) {
    return sendJson(res, 200, { ok: true });
  }

  const handle = typeof submission.handle === 'string'
    ? submission.handle.trim().replace(/^@+/, '').toLowerCase()
    : '';
  const platform = submission.platform;
  if (!/^[a-z0-9._]{1,30}$/.test(handle) || !['ios', 'android'].includes(platform)) {
    return sendJson(res, 400, { error: 'Please check your Instagram handle and platform.' });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) {
    return sendJson(res, 503, { error: 'Waitlist notifications are not configured.' });
  }

  const message = [
    '🧠 New Brain waitlist signup',
    `Instagram: @${handle}`,
    `Platform: ${platform === 'ios' ? 'iPhone' : 'Android'}`,
    `Received: ${new Date().toISOString()}`
  ].join('\n');

  let telegramResponse;
  try {
    telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message }),
      signal: AbortSignal.timeout(10000)
    });
  } catch {
    return sendJson(res, 502, { error: 'Could not notify the waitlist. Please try again.' });
  }

  const result = await telegramResponse.json().catch(() => null);
  if (!telegramResponse.ok || !result?.ok) {
    return sendJson(res, 502, { error: 'Could not notify the waitlist. Please try again.' });
  }

  return sendJson(res, 200, { ok: true });
};
