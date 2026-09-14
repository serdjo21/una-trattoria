const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '..', 'meni.md');
const outDir = path.join(__dirname, '..', 'data');
const outPath = path.join(outDir, 'menu.json');

if (!fs.existsSync(mdPath)) {
  console.error('meni.md not found at', mdPath);
  process.exit(1);
}

const raw = fs.readFileSync(mdPath, 'utf8');

// Preprocess: ensure item boundaries when price and next name are concatenated
let pre = raw.replace(/(\d{2,4})(?=[A-Z\"\“\’])/g, '$1\n');
const lines = pre.split(/\r?\n/);

const items = [];
let currentCategory = 'Uncategorized';
let i = 0;

function looksLikeItem(line) {
  const trimmed = line.trim();
  if (!trimmed) return false;
  return /^.*\s\d{2,4}$/.test(trimmed) || /^.*\d{2,4}$/.test(trimmed);
}

function isCategoryLine(linesArray, idx) {
  const line = (linesArray[idx] || '').trim();
  if (!line) return false;
  if (/^[•\-*]/.test(line)) return false;
  if (looksLikeItem(line)) return false;
  if (/[A-Z]/.test(line)) return false;
  if (line.length > 60) return false;
  if (/( with | and | or | in | on | of | to | from | for | check | add )/i.test(line)) return false;
  if (idx > 0 && linesArray[idx - 1].trim() !== '') return false;
  return /[a-z]/.test(line);
}

while (i < lines.length) {
  const line = lines[i].trim();
  if (!line) {
    i++;
    continue;
  }

  if (isCategoryLine(lines, i)) {
    currentCategory = line.replace(/\s+/g, ' ').trim();
    i++;
    continue;
  }

  const m = line.match(/^(.*?)(?:\s+)(\d{2,4})$/);
  if (m) {
    const name = m[1].trim();
    const price = Number(m[2]);
    let descParts = [];
    let j = i + 1;
    while (j < lines.length) {
      const nxt = lines[j].trim();
      if (!nxt) {
        j++;
        continue;
      }
      if (isCategoryLine(lines, j)) break;
      if (looksLikeItem(nxt)) break;
      descParts.push(nxt);
      j++;
    }
    const description = descParts.join(' ').replace(/\s+/g, ' ').trim() || null;
    items.push({ name, price, description, category: currentCategory, badges: [] });
    i = j;
    continue;
  }

  const glued = line.match(/^(.*?)(\d{2,4})$/);
  if (glued) {
    const name = glued[1].trim();
    const price = Number(glued[2]);
    items.push({ name, price, description: null, category: currentCategory, badges: [] });
    i++;
    continue;
  }

  i++;
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
fs.writeFileSync(outPath, JSON.stringify(items, null, 2), 'utf8');
console.log('Parsed', items.length, 'items to', outPath);
