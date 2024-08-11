const urlDatabase = {}; // 用于存储短网址和长网址的映射

export async function onRequestPost({ request }) {
    const { longUrl, selectedDomain } = await request.json();
    
    // 生成短网址
    const shortKey = Math.random().toString(36).substring(2, 8);
    const shortUrl = `${selectedDomain}/${shortKey}`;
    
    // 存储映射
    urlDatabase[shortKey] = longUrl;

    // 返回短网址
    return new Response(JSON.stringify({ shortUrl }), {
        headers: { 'Content-Type': 'application/json' },
    });
}