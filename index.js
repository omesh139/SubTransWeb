
async function translateSubtitle() {
  const file = document.getElementById('srtFile').files[0];
  const lang = document.getElementById('languageSelect').value;
  const formData = new FormData();
  formData.append('subtitle', file);
  formData.append('targetLang', lang);

  const res = await fetch('/api/translate', {
    method: 'POST',
    body: formData
  });
  const text = await res.text();
  document.getElementById('output').textContent = text;
}

async function generateSubtitle() {
  const res = await fetch('/api/generate', { method: 'GET' });
  const text = await res.text();
  document.getElementById('output').textContent = text;
}
