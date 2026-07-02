import pathlib, re

app_path = pathlib.Path('c:/Users/control/Desktop/page 1/app.js')
content = app_path.read_text(encoding='utf-8')
changes = 0

# ============================================================
# FIX 1: Word-boundary search to eliminate false positives
# Replace entryMatches to use word-boundary regex
# ============================================================

old_entryMatches = '''function entryMatches(entry, query) {
  const haystack = normalize(
    [
      entry.id,
      entry.language,
      entry.original,
      entry.transliteration,
      entry.pronunciation,
      entry.lemma,
      entry.short,
      entry.definition,
      entry.beginner,
      entry.advanced,
      entry.morphology,
      entry.caution,
      ...(entry.tags || []),
      ...(entry.related || []),
    ].join(" ")
  );
  return haystack.includes(query);
}'''

new_entryMatches = '''function entryMatches(entry, query) {
  const haystack = normalize(
    [
      entry.id,
      entry.language,
      entry.original,
      entry.transliteration,
      entry.pronunciation,
      entry.lemma,
      entry.short,
      entry.definition,
      entry.beginner,
      entry.advanced,
      entry.morphology,
      entry.caution,
      ...(entry.tags || []),
      ...(entry.related || []),
    ].join(" ")
  );
  if (query.length <= 2) return haystack.includes(query);
  try {
    const re = new RegExp("(?:^|\\\\s|[.,;:!?()\\\\-])" + query.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&"), "i");
    return re.test(haystack);
  } catch (e) {
    return haystack.includes(query);
  }
}'''

if old_entryMatches in content:
    content = content.replace(old_entryMatches, new_entryMatches)
    changes += 1
    print("FIX 1: entryMatches patched (word-boundary search)")
else:
    print("FIX 1: entryMatches NOT FOUND (may already be patched)")

# ============================================================
# FIX 2: Add Share button to the detail-actions in renderEntryCard
# ============================================================

old_detail_actions = '''            <div class="detail-actions">
              <button class="icon-button" data-action="toggle-entry-favorite" data-id="${escapeHtml(entry.id)}" aria-label="${isSaved ? "Quitar de guardados" : "Guardar ficha"}" title="${isSaved ? "Quitar de guardados" : "Guardar ficha"}">
                <i data-lucide="${isSaved ? "bookmark-check" : "bookmark"}"></i>
              </button>
              <button class="icon-button" data-action="add-compare" data-id="${escapeHtml(entry.id)}" aria-label="${inCompare ? "Ya esta en comparar" : "Comparar"}" title="${inCompare ? "Ya esta en comparar" : "Comparar"}">
                <i data-lucide="${inCompare ? "square-check" : "scale"}"></i>
              </button>
            </div>'''

new_detail_actions = '''            <div class="detail-actions">
              <button class="icon-button" data-action="toggle-entry-favorite" data-id="${escapeHtml(entry.id)}" aria-label="${isSaved ? "Quitar de guardados" : "Guardar ficha"}" title="${isSaved ? "Quitar de guardados" : "Guardar ficha"}">
                <i data-lucide="${isSaved ? "bookmark-check" : "bookmark"}"></i>
              </button>
              <button class="icon-button" data-action="add-compare" data-id="${escapeHtml(entry.id)}" aria-label="${inCompare ? "Ya esta en comparar" : "Comparar"}" title="${inCompare ? "Ya esta en comparar" : "Comparar"}">
                <i data-lucide="${inCompare ? "square-check" : "scale"}"></i>
              </button>
              <button class="icon-button" data-action="share-entry" data-id="${escapeHtml(entry.id)}" aria-label="Compartir ficha" title="Compartir ficha">
                <i data-lucide="share-2"></i>
              </button>
            </div>'''

if old_detail_actions in content:
    content = content.replace(old_detail_actions, new_detail_actions, 1)
    changes += 1
    print("FIX 2: Share button injected into detail-actions")
else:
    print("FIX 2: detail-actions block NOT FOUND")

# ============================================================
# FIX 3: Add share-entry action handler in the event delegation
# ============================================================

# Find the event delegation block and add the share handler
share_handler = '''
    if (action === "share-entry") {
      const entry = findEntry(target.dataset.id);
      if (!entry) return;
      const shareText = `${entry.lemma} (${entry.id}) - ${entry.original}\\n${entry.transliteration} [${entry.language}]\\n\\n${entry.definition}\\n\\nClaros Strong — https://controlvilleda-star.github.io/BETEL-2/`;
      if (navigator.share) {
        navigator.share({ title: entry.lemma + " — Claros Strong", text: shareText }).catch(() => {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText).then(() => {
          const btn = target.closest("button") || target;
          btn.title = "¡Copiado!";
          setTimeout(() => { btn.title = "Compartir ficha"; }, 2000);
        });
      }
      return;
    }
'''

# Find a good insertion point - after toggle-entry-favorite handler
insert_marker = 'if (action === "toggle-entry-favorite")'
if insert_marker in content and 'action === "share-entry"' not in content:
    idx = content.index(insert_marker)
    content = content[:idx] + share_handler + '\n    ' + content[idx:]
    changes += 1
    print("FIX 3: share-entry handler injected")
else:
    print("FIX 3: handler NOT INJECTED (marker not found or already present)")


app_path.write_text(content, encoding='utf-8')
print(f"\nTotal changes applied: {changes}")
