// 获取域名选择下拉栏元素
const domainSelect = document.getElementById('domain');

// 从环境变量中获取可用域名列表
const domains = DOMAIN_LIST.split(',');

// 为每个域名创建一个选项并添加到下拉栏中
domains.forEach(domain => {
  const option = document.createElement('option');
  option.value = domain;
  option.text = domain;
  domainSelect.add(option);
});

// 短网址生成函数
async function shortenURL() {
  const longURL = document.getElementById('long-url').value;
  const selectedDomain = domainSelect.value;

  try {
    const response = await fetch(`/shorten?url=${encodeURIComponent(longURL)}&domain=${encodeURIComponent(selectedDomain)}`);
    const data = await response.json();
    document.getElementById('short-url').textContent = data.shortURL;
  } catch (error) {
    console.error('Error:', error);
  }
}