const fs = require('fs');

const files = [
  'Shikha portfolio v1-enhanced.html',
  'Shikha portfolio v1-mobile.html'
];

for (const file of files) {
  let html = fs.readFileSync(file, 'utf8');
  const orig = html;

  // Find second occurrence of ss-hero-brand and remove it
  const firstIdx = html.indexOf('ss-hero-brand');
  const secondIdx = html.indexOf('ss-hero-brand', firstIdx + 1);

  if (secondIdx >= 0) {
    // The second brand is the left-column duplicate
    // It's a d("div",{className:"ss-hero-brand"...}) block followed by ,v("div",{className:"mt-...
    // Find the start of this div and end (before the next element)
    const divStart = html.lastIndexOf('d("div"', secondIdx);
    
    // Find the end: after the closing ])}),
    // We need to end right before v("div",{className:"mt-... 
    const nextElement = html.indexOf(',v("div",{className:"mt-', secondIdx);
    
    if (divStart >= 0 && nextElement >= 0) {
      // Remove from divStart to just before the nextElement
      // But we need to also remove the preceding comma if there is one
      let removeStart = divStart;
      // Check if there's a comma right before this div
      if (html[divStart - 1] === ',') {
        removeStart = divStart - 1;
      }
      
      html = html.substring(0, removeStart) + html.substring(nextElement);
      console.log(`${file}: removed 2nd ss-hero-brand at index ${secondIdx}`);
    } else {
      console.log(`${file}: couldn't find boundaries - divStart: ${divStart}, nextElement: ${nextElement}`);
    }
  } else {
    console.log(`${file}: only 1 ss-hero-brand, no removal needed`);
  }

  if (html !== orig) {
    fs.writeFileSync(file, html, 'utf8');
    const brandCount = (html.match(/ss-hero-brand/g) || []).length;
    console.log(`${file}: final ss-hero-brand count: ${brandCount}, size: ${html.length}`);
  }
}
