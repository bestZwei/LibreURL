// 获取可用的域名并填充到下拉框
async function populateDomains() {
    const domains = process.env.DOMAIN_LIST.split(',');
    const domainSelect = document.getElementById('domain-select');
    
    domains.forEach(domain => {
        const option = document.createElement('option');
        option.value = domain.trim();
        option.textContent = domain.trim();
        domainSelect.appendChild(option);
    });
}

// 短网址生成逻辑
document.getElementById('shorten-btn').addEventListener('click', async () => {
    const selectedDomain = document.getElementById('domain-select').value;
    const longUrl = document.getElementById('url-input').value;

    const response = await fetch(`/api/shorten`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl, selectedDomain }),
    });

    const data = await response.json();
    if (data.shortUrl) {
        document.getElementById('result').textContent = `Shortened URL: ${data.shortUrl}`;
    } else {
        document.getElementById('result').textContent = 'Error shortening URL';
    }
});

// 初始化
populateDomains();