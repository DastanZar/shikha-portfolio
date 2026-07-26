with open('Shikha portfolio v1-mobile.html', 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

old = '''v("p",{children:["I integrate ",d("span",{className:"px-2 py-0.5 rounded-full bg-white border border-[#E4DDD4] text-[13px]",children:"Cognitive Behaviour Therapy"})," ",d("span",{className:"px-2 py-0.5 rounded-full bg-white border border-[#E4DDD4] text-[13px]",children:"Positive Psychology"})," and ",d("span",{className:"px-2 py-0.5 rounded-full bg-white border border-[#E4DDD4] text-[13px]",children:"Couple & Family"})," perspectives to build both relief and resilience."]})'''

new = '''v("p",{children:"I integrate Cognitive Behaviour Therapy, Positive Psychology, and systemic frameworks to help clients build both immediate relief and long-term resilience. My practice includes individual therapy as well as couple and family therapy."})'''

if old in content:
    ob = new.count('{'); cb = new.count('}')
    op = new.count('('); cp = new.count(')')
    if ob == cb and op == cp:
        content = content.replace(old, new)
        with open('Shikha portfolio v1-mobile.html', 'w', encoding='utf-8') as f:
            f.write(content)
        print('SUCCESS: mobile')
    else:
        print('ERROR: unbalanced')
else:
    print('ERROR: not found')
