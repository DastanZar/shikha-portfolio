import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const DARK_MODE = `
<!-- DARK MODE (injected, HTML file untouched) -->
<style>
#dm-toggle{position:fixed;bottom:24px;right:24px;z-index:9999;width:48px;height:48px;border-radius:50%;border:none;cursor:pointer;display:grid;place-items:center;box-shadow:0 4px 20px rgba(0,0,0,.15);transition:background .3s,transform .2s;font-size:20px;line-height:1}
#dm-toggle:hover{transform:scale(1.1)}
#dm-toggle.dm-light{background:#2D2A26;color:#FFFCF8}
#dm-toggle.dm-dark{background:#F0EDE8;color:#1A1917}
html.dm{color-scheme:dark}
html.dm body{background:#1A1917!important;color:#F0EDE8!important}
html.dm ::selection{background:#2A332C;color:#F0EDE8}
html.dm ::-webkit-scrollbar-thumb{background:rgba(255,255,255,.15)}
html.dm nav{background:rgba(26,25,23,.85)!important;border-color:#333130!important}
html.dm nav a:not(.ss-fab){color:#B0ACA8!important}
html.dm nav a:hover{color:#F0EDE8!important}
html.dm [style*="background:#FFFCF8"],html.dm [style*="background: #FFFCF8"]{background:#1A1917!important}
html.dm [style*="background:#F5F1EB"],html.dm [style*="background: #F5F1EB"]{background:#242320!important}
html.dm [style*="background:#E8EDE8"],html.dm [style*="background: #E8EDE8"]{background:#2A332C!important}
html.dm [style*="background:#F2DDD5"],html.dm [style*="background: #F2DDD5"]{background:#3A2A22!important}
html.dm [style*="background:white"],html.dm [style*="background: white"]{background:#2A2926!important}
html.dm [style*="color:#2D2A26"],html.dm [style*="color: #2D2A26"]{color:#F0EDE8!important}
html.dm [style*="color:#5A5652"],html.dm [style*="color: #5A5652"]{color:#B0ACA8!important}
html.dm [style*="color:#6B7F6E"],html.dm [style*="color: #6B7F6E"]{color:#8FA893!important}
html.dm [style*="color:#C17C60"],html.dm [style*="color: #C17C60"]{color:#D4956E!important}
html.dm [style*="border-color:#EDE8E1"],html.dm [style*="border-color: #EDE8E1"]{border-color:#333130!important}
html.dm [style*="border-color:#D9E2DA"],html.dm [style*="border-color: #D9E2DA"]{border-color:#3A4A3C!important}
html.dm .ss-card{background:#2A2926!important;border-color:#333130!important}
html.dm .ss-ground-step{background:#242320!important;border-color:#333130!important}
html.dm .ss-ground-step span:last-child{color:#F0EDE8!important}
html.dm .ss-overlay{background:rgba(26,25,23,.9)!important}
html.dm .ss-breath-text,html.dm .ss-overlay h3,html.dm .ss-overlay p{color:#F0EDE8!important}
html.dm .ss-toast{background:#F0EDE8;color:#1A1917}
html.dm .ss-fab{background:#F0EDE8;color:#1A1917}
html.dm footer{background:#1A1917!important}
html.dm [class*="bg-white"]{background:#2A2926!important}
html.dm [class*="bg-[#FFFCF8]"]{background:#1A1917!important}
html.dm [class*="bg-[#F5F1EB]"]{background:#242320!important}
html.dm [class*="bg-[#E8EDE8]"]{background:#2A332C!important}
html.dm [class*="bg-[#F2DDD5]"]{background:#3A2A22!important}
html.dm [class*="text-[#2D2A26]"]{color:#F0EDE8!important}
html.dm [style*="color:#5A5652"],html.dm [style*="color: #5A5652"]{color:#B0ACA8!important}
html.dm [style*="color:#6B7F6E"],html.dm [style*="color: #6B7F6E"]{color:#8FA893!important}
html.dm [style*="color:#C17C60"],html.dm [style*="color: #C17C60"]{color:#D4956E!important}
html.dm [style*="border-color:#EDE8E1"],html.dm [style*="border-color: #EDE8E1"]{border-color:#333130!important}
html.dm [style*="border-color:#D9E2DA"],html.dm [style*="border-color: #D9E2DA"]{border-color:#3A4A3C!important}
html.dm [style*="border-white"],html.dm [style*="border: white"]{border-color:rgba(255,255,255,.1)!important}
html.dm [class*="hover\\:text-[#2D2A26]"]:hover{color:#F0EDE8!important}
html.dm [style*="hover:bg-[#F5F1EB]"]{background:#242320!important}
html.dm [style*="hover:bg-black"]{background:#F0EDE8!important}
html.dm [style*="bg-white/"]{background:rgba(42,41,38,.6)!important}
html.dm [style*="bg-[#FFFCF8]/"]{background:rgba(26,25,23,.85)!important}
html.dm [style*="bg-[#F5F1EB}/"]{background:rgba(36,35,32,.7)!important}
html.dm [style*="bg-[#E8EDE8}/"]{background:rgba(42,51,44,.5)!important}
html.dm [style*="bg-[#F2DDD5}/"]{background:rgba(58,42,34,.5)!important}
html.dm .ss-card [style*="color:#FFFCF8"]{color:#FFFCF8!important}
html.dm .ss-card [style*="background:#FFFCF8"]{background:#FFFCF8!important}
html.dm footer [style*="color:#FFFCF8"]{color:#FFFCF8!important}
html.dm footer [style*="color:#A9BFAE"]{color:#8FA893!important}
html.dm footer a{color:#8FA893!important}
html.dm footer a:hover{color:#FFFCF8!important}
</style>
<script>
(function(){
  try{var t=localStorage.getItem('dm');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dm')}catch(e){}
  var b=document.createElement('button');b.id='dm-toggle';
  function up(){var d=document.documentElement.classList.contains('dm');b.className=d?'dm-dark':'dm-light';b.textContent=d?'☀️':'🌙'}
  up();
  b.onclick=function(){document.documentElement.classList.toggle('dm');try{localStorage.setItem('dm',document.documentElement.classList.contains('dm')?'dark':'light')}catch(e){}up()};
  document.addEventListener('DOMContentLoaded',function(){document.body.appendChild(b)});
})();
</script>
`;

const CLICK_GUARD = `
<!-- CLICK GUARD (fixes invisible overlay blocking all clicks) -->
<style>
.ss-overlay{pointer-events:none!important}
.ss-overlay.ss-show{pointer-events:auto!important}
</style>
`;

const LOGO_INJECT = `
<!-- LOGO INJECT (replaces S-circle + name with rectangular Sunmukh logo) -->
<script>
(function(){
  function swapLogo(){
    var nav=document.querySelector('nav');
    if(!nav)return false;
    var brandLink=nav.querySelector('a[href="#"]');
    if(!brandLink)return false;
    if(brandLink.querySelector('img'))return true;
    brandLink.innerHTML='';
    brandLink.style.gap='0';
    var img=document.createElement('img');
    img.src='/sunmukh-logo.jpeg';
    img.alt='Sunmukh - Shikha Soni, Ph.D.';
    img.style.cssText='height:44px;width:auto;object-fit:contain;display:block';
    brandLink.appendChild(img);
    return true;
  }
  if(!swapLogo()){
    var tries=0;
    var timer=setInterval(function(){
      tries++;
      if(swapLogo()||tries>50)clearInterval(timer);
    },100);
  }
})();
</script>
`;

const CLICK_FIX = `
<!-- CLICK FALLBACK (fixes unresponsive buttons on Vercel) -->
<script>
(function(){
  function fixLinks(){
    document.querySelectorAll('a[href]').forEach(function(a){
      var href = a.getAttribute('href');
      if (!href) return;
      if (href.startsWith('#')) {
        a.addEventListener('click', function(e){
          e.preventDefault();
          var target = document.querySelector(href);
          if (target) { target.scrollIntoView({behavior: 'smooth', block: 'start'}); }
        });
      } else if (href.startsWith('http')) {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixLinks);
  } else { fixLinks(); }
})();
</script>
`;

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "Shikha portfolio v1-enhanced.html"
  );
  let html = fs.readFileSync(filePath, "utf-8");

  html = html.replace("</body>", DARK_MODE + CLICK_GUARD + LOGO_INJECT + CLICK_FIX + "\n</body>");

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
