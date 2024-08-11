document.addEventListener('DOMContentLoaded', () => {
    const domains = process.env.DOMAINS ? process.env.DOMAINS.split(',') : ['abc.org'];
    const domainSelect = document.getElementById('domainSelect');

    domains.forEach(domain => {
        const option = document.createElement('option');
        option.value = domain;
        option.text = domain;
        domainSelect.appendChild(option);
    });
});

function generateShortUrl() {
    const longUrl = document.getElementById('longUrl').value;
    const customSuffix = document.getElementById('customSuffix').value;
    const selectedDomain = document.getElementById('domainSelect').value;

    if (!longUrl) {
        alert('请输入长网址');
        return;
    }

    const shortCode = customSuffix || Math.random().toString(36).substring(2, 8);
    const shortUrl = `https://${selectedDomain}/${shortCode}`;

    document.getElementById('shortUrl').innerHTML = `短网址: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
}