const crypto = require('crypto');

// 生成短码
function generateShortCode() {
  return crypto.randomBytes(3).toString('hex');
}

// 短网址生成处理函数
async function handleRequest(request) {
  const url = new URL(request.url);
  const longURL = url.searchParams.get('url');
  const domain = url.searchParams.get('domain');

  if (!longURL || !domain) {
    return new Response(JSON.stringify({ error: 'Missing required parameters' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const shortCode = generateShortCode();
  const shortURL = `https://${domain}/${shortCode}`;

  // 在这里可以将短网址和长网址的映射关系存储到数据库中

  return new Response(JSON.stringify({ shortURL }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});