// Regenerate the static Arabic gate after changing the English markup or gate.js dictionary.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'gate.js'), 'utf8');
const ar = vm.runInNewContext('(' + source.match(/const ar = (\{[\s\S]*?\n  \});/)[1] + ')');
const escape = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
html = html.replace('<html lang="en">', '<html lang="ar" dir="rtl">');
html = html.replace(/(<[^>]+data-i18n="([^"]+)"[^>]*>)([^<]*)(<\/[^>]+>)/g, (_, open, key, text, close) => {
  if (!ar[key]) throw new Error(`Missing Arabic translation: ${key}`);
  return open.replace(/>$/, ` data-en="${escape(text.replaceAll('&amp;', '&'))}">`) + escape(ar[key]) + close;
});
html = html.replace(/<[^>]+data-label="([^"]+)"[^>]*>/g, (tag, key) => {
  const original = tag.match(/aria-label="([^"]+)"/)[1];
  return tag.replace(/aria-label="[^"]+"/, `aria-label="${escape(ar[key])}"`).replace(/>$/, ` data-en-label="${original}">`);
});
html = html.replaceAll('Focx &amp; Pip — More focus. Less forgotten.', 'فوكس وبيب — تركيز أكثر. نسيان أقل.')
  .replaceAll('Focx protects your focus. Pip turns your thoughts into action. Two simple apps, made to work beautifully together.', ar.subhead)
  .replace('content="Focx &amp; Pip"', 'content="فوكس وبيب"')
  .replace('property="og:locale" content="en_US"', 'property="og:locale" content="ar_QA"')
  .replace('property="og:locale:alternate" content="ar_QA"', 'property="og:locale:alternate" content="en_US"')
  .replace('Focx and Pip, two smiling orange clay companions.', 'فوكس وبيب، رفيقان صلصاليان برتقاليان مبتسمان.')
  .replace(/href="focx\/([^"#]*)?(#[^"]*)?"/g, (_, file, hash = '') => `href="brain/ar.html${hash}"`)
  .replace('id="language-switch" href="ar.html" lang="ar" aria-label="التبديل إلى العربية">العربية', 'id="language-switch" href="index.html" lang="en" aria-label="Switch to English">English');
fs.writeFileSync(path.join(root, 'ar.html'), html);
console.log('Generated ar.html with ' + Object.keys(ar).length + ' Arabic translations.');
