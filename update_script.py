import re
from pathlib import Path

app_js = Path('c:/Users/control/Desktop/page 1/app.js')
content = app_js.read_text(encoding='utf-8')

# 1. Add egwThemes if not present
if 'const egwThemes =' not in content:
    # insert after const refs = ... or at the top
    content = content.replace('const state = {', 'const egwThemes = [];\nconst state = {')

# 2. Add badge to renderEntryCard
badge_card = "${entry.isNew ? '<span class=\"mini-chip\" style=\"background:#e0e5ec;color:#2684ff;border:1px solid #c8d8e4;font-size:0.7em;margin-left:5px;border-radius:4px;padding:1px 4px;\">NUEVO</span>' : ''}"
target_card = '<strong>${escapeHtml(entry.lemma)}</strong>'
if badge_card not in content:
    content = content.replace(target_card, target_card + ' ' + badge_card)

# 3. Add badge to renderEntryDetail
badge_detail = "${entry.isNew ? '<span class=\"mini-chip\" style=\"background:#e0e5ec;color:#2684ff;border:1px solid #c8d8e4;font-size:0.4em;vertical-align:middle;margin-left:8px;border-radius:4px;padding:2px 8px;\">NUEVO</span>' : ''}"
target_detail = '<h1>${escapeHtml(entry.lemma)}</h1>'
if badge_detail not in content:
    content = content.replace(target_detail, target_detail.replace('</h1>', ' ' + badge_detail + '</h1>'))

app_js.write_text(content, encoding='utf-8')
print("Successfully updated app.js with egwThemes and NUEVO badges.")
