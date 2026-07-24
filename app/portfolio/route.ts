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
html.dm nav img[alt="Sunmukh"]{filter:brightness(0) invert(1)}
html.dm .ss-brand-name{color:#F0EDE8!important}
html.dm .ss-brand-sub{color:#B0ACA8!important}
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
    nav.style.paddingTop='36px';
    nav.style.paddingBottom='16px';
    var brandLink=nav.querySelector('a[href="#"]');
    if(!brandLink)return false;
    if(brandLink.querySelector('img'))return true;
    var navLinks=brandLink.nextElementSibling;
    if(navLinks)navLinks.style.marginLeft='32px';
    brandLink.innerHTML='';
    brandLink.style.gap='0';
    var wrapper=document.createElement('div');
    wrapper.style.cssText='display:flex;align-items:center;gap:12px;margin-top:8px';
    var img=document.createElement('img');
    img.src='/sunmukh-logo.png';
    img.alt='Sunmukh';
    img.style.cssText='height:172px;width:auto;object-fit:contain;display:block;margin-top:8px';
    wrapper.appendChild(img);
    brandLink.appendChild(wrapper);
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

const BRAND_HERO_INJECT = `
<!-- BRAND HERO (injects name above Elevate in hero) -->
<script>
(function(){
  function injectBrand(){
    var elevateEl = document.querySelector('h1');
    if(!elevateEl)return false;
    var spans = elevateEl.querySelectorAll('span');
    if(!spans.length)return false;
    for(var i=0;i<spans.length;i++){
      if(spans[i].textContent==='Elevate Your'){
        if(spans[i].parentNode.querySelector('.ss-hero-brand'))return true;
        var brandDiv=document.createElement('div');
        brandDiv.className='ss-hero-brand';
        brandDiv.style.cssText='margin-top:8px;line-height:1.3;text-align:center';
        brandDiv.innerHTML='<span class="ss-brand-name" style="font-family:ui-serif,Georgia,serif;font-size:22px;color:#2D2A26;display:block">Dr Shikha Soni</span><span class="ss-brand-sub" style="font-size:12px;letter-spacing:0.2em;color:#8A8580;display:block;margin-top:2px">CLINICAL PSYCHOLOGIST</span>';
        spans[i].parentNode.insertBefore(brandDiv,spans[i]);
        return true;
      }
    }
    return false;
  }
  if(!injectBrand()){
    var tries=0;
    var timer=setInterval(function(){
      tries++;
      if(injectBrand()||tries>50)clearInterval(timer);
    },100);
  }
})();
</script>
`;

const CONTENT_FIX = `
<!-- CONTENT FIX (targeted DOM edits after React renders) -->
<script>
(function(){
  function fix(){
    // Wait for React to fully render
    if(!document.querySelector('nav'))return false;
    if(!document.querySelector('h1'))return false;

    // Remove Google Scholar button
    var gsBtn = document.querySelector('a[href*="scholar.google.com"]');
    if(gsBtn) gsBtn.remove();

    // ResearchGate to black
    var rgBtn = document.querySelector('a[href*="researchgate.net"]');
    if(rgBtn){
      rgBtn.style.background='#2D2A26';
      rgBtn.style.color='#FFFCF8';
      rgBtn.style.border='none';
    }

    // Remove loss paragraph (find by first words)
    var ps = document.querySelectorAll('p');
    for(var i=0;i<ps.length;i++){
      if(ps[i].textContent.indexOf('Loss, transition')===0){ps[i].style.display='none';}
      if(ps[i].textContent.indexOf('Placeholder citation')===0){ps[i].style.display='none';}
    }

    // Remove Next slots bubble
    var divs = document.querySelectorAll('div');
    for(var j=0;j<divs.length;j++){
      if(divs[j].textContent.trim()==='Next slots'){
        var wrapper = divs[j].closest('[class*="absolute"]');
        if(wrapper) wrapper.style.display='none';
      }
    }

    // Add Book Online Session button
    if(!document.querySelector('.ss-online-btn')){
      var discBtn = null;
      var allA = document.querySelectorAll('a');
      for(var k=0;k<allA.length;k++){
        if(allA[k].textContent.trim()==='Free 10-min Discovery Call'){discBtn=allA[k];break;}
      }
      if(discBtn && discBtn.parentNode){
        var btn = document.createElement('a');
        btn.className='ss-online-btn';
        btn.href='https://topmate.io/dr_shikha_soni';
        btn.target='_blank';
        btn.rel='noreferrer';
        btn.textContent='Book Online Session \u2192';
        btn.style.cssText='display:inline-block;margin-left:0.5rem;padding:0.875rem 1.5rem;border-radius:9999px;background:#2D2A26;color:#FFFCF8;font-size:14px;font-weight:500;text-decoration:none';
        discBtn.parentNode.insertBefore(btn, discBtn);
      }
    }

    // Change testimonial text
    var spans = document.querySelectorAll('span, p, div');
    for(var m=0;m<spans.length;m++){
      var t = spans[m].textContent;
      if(t.indexOf('She made me feel heard')>=0 && spans[m].children.length===0){
        spans[m].textContent='\u201cDr. Shikha creates a safe, non-judgmental space where I could truly open up. Her approach is deeply empathetic and evidence-based.\u201d \u2014 Client';
      }
    }

    // Split expertise tags into Specialization and Concerns
    if(!document.querySelector('.ss-exp-split')){
      var allSpans = document.querySelectorAll('span');
      var posTag = null;
      for(var n=0;n<allSpans.length;n++){
        if(allSpans[n].textContent.trim()==='Positive Psychology'){posTag=allSpans[n];break;}
      }
      if(posTag && posTag.parentNode){
        var tagContainer = posTag.parentNode;
        var tags = tagContainer.children;
        if(tags.length >= 8){
          var specLabel = document.createElement('div');
          specLabel.className='ss-exp-split';
          specLabel.style.cssText='width:100%;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#8A8580;font-weight:600;padding:4px 0 2px';
          specLabel.textContent='Specialization';
          tagContainer.insertBefore(specLabel, tags[0]);
          var concernsLabel = document.createElement('div');
          concernsLabel.className='ss-exp-split';
          concernsLabel.style.cssText='width:100%;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#8A8580;font-weight:600;padding:8px 0 2px';
          concernsLabel.textContent='Experience in dealing with concerns';
          tagContainer.insertBefore(concernsLabel, tags[5]);
        }
      }
    }

    return true;
  }
  // Run after React has had time to render
  if(!fix()){
    var tries=0;
    var timer=setInterval(function(){
      tries++;
      if(fix()||tries>30)clearInterval(timer);
    },300);
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

  html = html.replace("</body>", DARK_MODE + CLICK_GUARD + LOGO_INJECT + BRAND_HERO_INJECT + CONTENT_FIX + CLICK_FIX + "\n</body>");

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
