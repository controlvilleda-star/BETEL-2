import re

with open('c:/Users/control/Desktop/page 1/iframe-leccion.html', 'r', encoding='utf-8') as f:
    content = f.read()

tooltip_css = '''
    .strong-tooltip {
      position: relative;
      cursor: help;
      border-bottom: 1px dashed var(--muted);
      color: #9c4122;
      font-weight: 600;
      transition: color 0.2s;
    }
    .strong-tooltip:hover { color: #b33914; }
    .strong-tooltip::after {
      content: attr(data-content);
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      background: var(--ink);
      color: white;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 400;
      white-space: pre-wrap;
      width: max-content;
      max-width: 250px;
      text-align: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.2s ease;
      z-index: 100;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      pointer-events: none;
      line-height: 1.4;
    }
    .strong-tooltip:hover::after {
      opacity: 1;
      visibility: visible;
      bottom: calc(100% + 8px);
    }
</style>'''

content = content.replace('</style>', tooltip_css)


old_block = r'''              const citation = rawText.replace(' 🔊', '');
              
              box.innerHTML = `
                <p class="verse-text" onclick="speakText(this, '${textToSpeak}')" title="Toca para escuchar" style="cursor:pointer;">
                  <span class="highlight-pastel" style="--highlight-color: rgba(253, 186, 116, 0.5); background-size: 100% 100%;">
                    «${versesData.join(' ')}»
                  </span>
                </p>
                <div class="verse-actions">
                  <button class="verse-btn primary" onclick="openShareSelection(this, '${citation}')">📲 Compartir Imagen</button>
                </div>
              `;'''

new_block = r'''              const citation = rawText.replace(' 🔊', '');
              
              // Mini diccionario para tooltip
              const strongDict = {
                'amor': 'G26 (Ágape) - Amor que busca el bien del otro con entrega.',
                'palabra': 'G3056 (Logos) - Palabra, Verbo divino.',
                'espíritu': 'G4151 (Pneuma) - Espíritu, viento, aliento.',
                'comunión': 'G2842 (Koinonia) - Comunión, compañerismo íntimo.',
                'iglesia': 'G1577 (Ekklesia) - Asamblea, congregación.',
                'cristo': 'G5547 (Christos) - Ungido, el Mesías.',
                'dios': 'G2316 (Theos) / H430 (Elohim) - Creador, Ser Supremo.',
                'jehová': 'H3068 (YHWH) - El Señor, el que siempre existe.',
                'señor': 'H3068 (YHWH) - El Señor.',
                'principio': 'H7225 (Reshith) - Comienzo, lo primero.',
                'creó': 'H1254 (Bara) - Crear de la nada.'
              };
              
              let finalVerseText = versesData.join(' ');
              Object.keys(strongDict).forEach(key => {
                const regex = new RegExp('\\b(' + key + ')\\b', 'gi');
                finalVerseText = finalVerseText.replace(regex, '<span class="strong-tooltip" data-content="' + strongDict[key] + '">$1</span>');
              });
              
              box.innerHTML = `
                <p class="verse-text" onclick="speakText(this, '${textToSpeak}')" title="Toca para escuchar" style="cursor:pointer;">
                  <span class="highlight-pastel" style="--highlight-color: rgba(253, 186, 116, 0.5); background-size: 100% 100%;">
                    «${finalVerseText}»
                  </span>
                </p>
                <div class="verse-actions">
                  <button class="verse-btn primary" onclick="openShareSelection(this, '${citation}')">📲 Compartir Imagen</button>
                  <button class="verse-btn" style="background:var(--ink);color:white;border:none;border-radius:8px;padding:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;" onclick="window.parent.document.querySelector('[data-tab=\'lexico\']').click();">📖 Ver en Diccionario Strong</button>
                </div>
              `;'''

content = content.replace(old_block, new_block)

with open('c:/Users/control/Desktop/page 1/iframe-leccion.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated iframe-leccion.html with Tooltips and Strong Button')
