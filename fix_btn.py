import re

with open('c:/Users/control/Desktop/page 1/iframe-leccion.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_btn = '''<button class="verse-btn" style="background:var(--ink);color:white;border:none;border-radius:8px;padding:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;" onclick="window.parent.document.querySelector('[data-tab=\\\'lexico\\\']').click();">📖 Ver en Diccionario Strong</button>'''

new_btn = '''<button class="verse-btn" style="background:var(--ink);color:white;border:none;border-radius:8px;padding:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;" onclick="new BroadcastChannel('betel_channel').postMessage({action: 'openStrongTab'});">📖 Ver en Diccionario Strong</button>'''

if old_btn in content:
    content = content.replace(old_btn, new_btn)
    with open('c:/Users/control/Desktop/page 1/iframe-leccion.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print('Replaced successfully')
else:
    print('Old button not found')
