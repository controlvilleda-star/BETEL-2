import re

with open('c:/Users/control/Desktop/page 1/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Replace :root variables
new_root = ''':root {
  color-scheme: light;
  --bg: #e0e5ec;
  --surface: #e0e5ec;
  --surface-soft: #d1d9e6;
  --surface-warm: #ecf0f3;
  --surface-blue: #c8d8e4;
  --ink: #2d4263;
  --muted: #6b7c93;
  --line: transparent;
  --strong: #0052cc;
  --strong-dark: #0747a6;
  --gold: #b37700;
  --coral: #c2410c;
  --blue: #2684ff;
  --danger: #b91c1c;
  
  --neu-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
  --neu-shadow-hover: 4px 4px 8px rgba(163, 177, 198, 0.5), -4px -4px 8px rgba(255, 255, 255, 0.5);
  --neu-inner: inset 6px 6px 10px rgba(163, 177, 198, 0.6), inset -6px -6px 10px rgba(255, 255, 255, 0.5);
  
  --shadow: var(--neu-shadow);
  --radius: 16px;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}'''

css = re.sub(r':root\s*\{.*?\n\}', new_root, css, flags=re.DOTALL)

# 2. Add Neumorphic utility classes and replace specific borders
css = re.sub(r'border:\s*1px solid var\(--line\);', 'border: none;', css)
css = re.sub(r'border-bottom:\s*1px solid var\(--line\);', 'border-bottom: none;', css)
css = re.sub(r'box-shadow:\s*0 1px 0 rgba\(23, 33, 28, 0\.04\);', 'box-shadow: var(--neu-inner);', css)
css = re.sub(r'box-shadow:\s*0 1px 0 rgba\(23, 33, 28, 0\.03\);', 'box-shadow: var(--neu-shadow);', css)

# 3. Update Buttons and Cards to have Neumorphic Shadows
css = css.replace('.side-block {', '.side-block {\n  box-shadow: var(--neu-shadow);')
css = css.replace('.result-card,', '.result-card,\n.verse-card,\n.lexicon-row,\n.saved-row,\n.lesson-row {\n  box-shadow: var(--neu-shadow);\n  transition: all 0.3s ease;\n}\n.result-card,')
css = css.replace('.icon-button {', '.icon-button {\n  box-shadow: var(--neu-shadow);\n  transition: all 0.2s ease;')
css = css.replace('.icon-button:hover,', '.icon-button:hover,\n.secondary-button:hover,\n.text-button:hover {\n  box-shadow: var(--neu-inner);\n}\n.icon-button:active {')
css = css.replace('.primary-button {', '.primary-button {\n  box-shadow: var(--neu-shadow);\n  transition: all 0.2s ease;')
css = css.replace('.primary-button:hover {', '.primary-button:hover {\n  box-shadow: var(--neu-inner);')

# 4. Inputs
css = css.replace('select,\ntextarea,\n.note-input {', 'select,\ntextarea,\n.note-input {\n  box-shadow: var(--neu-inner);')

with open('c:/Users/control/Desktop/page 1/styles.css', 'w', encoding='utf-8') as f:
    f.write(css)
print('Applied Neumorphic CSS')
