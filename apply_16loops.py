import re

with open('c:/Users/control/Desktop/page 1/app.js', 'r', encoding='utf-8') as f:
    js = f.read()

# 1. Deduplicate entries
# I know the first 10 entries are duplicates. Let's find all entries in the string and keep only the last one for each ID.
# Since it's JS, I'll extract the whole seedData block.
start_idx = js.find('const seedData = {')
end_idx = js.find('};\n\nconst App = {')
if end_idx == -1:
    end_idx = js.find('};\n\nconst state')

seed_str = js[start_idx:end_idx+2]

# Extract all dictionary items. 
# They look like: { id: 'G3056', ... },
items = re.findall(r'(\{\s*id:\s*[\'\"`]?([GH]\d+)[\'\"`]?,.*?\n\s*\})', seed_str, re.DOTALL)

# Keep the last occurrence of each ID
unique_items = {}
for full_match, id_str in items:
    unique_items[id_str] = full_match

# Build new seedData
new_entries_str = ',\n    '.join(unique_items.values())

# We want to add new vocabulary with isNew: true
new_vocab = [
    '''{
      id: "G5368",
      language: "Griego",
      original: "φιλέω",
      transliteration: "phileo",
      pronunciation: "fi-le-o",
      lemma: "amor fraternal",
      short: "Afecto, amistad, querer entrañablemente.",
      definition: "Amar, tener afecto por, besar. A diferencia de agape, phileo enfatiza la amistad y la emoción.",
      beginner: "Es el amor de amigos, el afecto profundo que sientes por alguien cercano.",
      advanced: "Verbo. A menudo contrastado con agape, aunque en Juan a veces se usan como sinónimos.",
      morphology: "verbo",
      tags: ["amor", "amistad", "afecto"],
      related: ["G26", "G5384"],
      caution: "No es inferior a agape, simplemente describe otro aspecto del amor humano y divino.",
      isNew: true
    }''',
    '''{
      id: "G3114",
      language: "Griego",
      original: "μακροθυμία",
      transliteration: "makrothymia",
      pronunciation: "ma-kro-thu-mi-a",
      lemma: "paciencia",
      short: "Paciencia, longanimidad, resistencia.",
      definition: "Paciencia hacia las personas, soportar provocaciones sin estallar en ira. Fruto del Espíritu.",
      beginner: "Es tener una mecha larga; no enojarse rápido con los demás.",
      advanced: "Sustantivo femenino. Compuesto de makros (largo) y thymos (ira/pasión).",
      morphology: "sustantivo femenino",
      tags: ["paciencia", "fruto", "carácter"],
      related: ["G5281"],
      caution: "Se distingue de hypomone, que es paciencia ante las circunstancias.",
      isNew: true
    }''',
    '''{
      id: "G2889",
      language: "Griego",
      original: "κόσμος",
      transliteration: "kosmos",
      pronunciation: "kos-mos",
      lemma: "mundo",
      short: "Orden, universo, humanidad, o sistema maligno.",
      definition: "El mundo creado, la humanidad (a la que Dios ama), o el sistema humano rebelde que se opone a Dios.",
      beginner: "Puede significar la creación de Dios, las personas, o las cosas malas que alejan de Dios.",
      advanced: "Sustantivo masculino. En los escritos de Juan, suele referirse al sistema mundial bajo el dominio del mal.",
      morphology: "sustantivo masculino",
      tags: ["mundo", "universo", "sistema"],
      related: ["G165"],
      caution: "El contexto es crítico: Dios ama al kosmos, pero advierte no amar al kosmos.",
      isNew: true
    }''',
    '''{
      id: "G479",
      language: "Griego",
      original: "ἀντίδικος",
      transliteration: "antidikos",
      pronunciation: "an-ti-di-kos",
      lemma: "adversario",
      short: "Adversario legal, oponente, el diablo.",
      definition: "Un oponente en una demanda legal. En 1 Pedro 5:8, usado como título para Satanás.",
      beginner: "Alguien que está en tu contra en un juicio. La Biblia llama así al diablo.",
      advanced: "Sustantivo masculino. De anti (contra) y dike (justicia/juicio).",
      morphology: "sustantivo masculino",
      tags: ["adversario", "enemigo", "diablo"],
      related: ["G1228", "G4567"],
      caution: "Es un término legal romano/griego aplicado espiritualmente.",
      isNew: true
    }''',
    '''{
      id: "H2617",
      language: "Hebreo",
      original: "חֶסֶד",
      transliteration: "chesed",
      pronunciation: "je-sed",
      lemma: "misericordia",
      short: "Amor leal, bondad pactual, misericordia.",
      definition: "Bondad, amor inagotable, lealtad basada en un pacto. La característica principal de Dios hacia su pueblo.",
      beginner: "Es el amor súper fuerte y fiel de Dios que nunca se rinde.",
      advanced: "Sustantivo masculino. Es uno de los términos teológicos más importantes del AT. Difícil de traducir con una sola palabra.",
      morphology: "sustantivo masculino",
      tags: ["amor", "misericordia", "lealtad"],
      related: ["G26", "H7563"],
      caution: "No es solo un sentimiento de piedad; es un compromiso de pacto activo.",
      isNew: true
    }''',
    '''{
      id: "H7965",
      language: "Hebreo",
      original: "שָׁלוֹם",
      transliteration: "shalom",
      pronunciation: "sha-lom",
      lemma: "paz",
      short: "Paz, plenitud, bienestar total.",
      definition: "Compleción, plenitud, salud, paz, bienestar. Mucho más que la ausencia de guerra.",
      beginner: "Paz de verdad, donde todo está bien, sano y en su lugar correcto.",
      advanced: "Sustantivo masculino. Describe un estado en el que las relaciones y las cosas están íntegras, como Dios las diseñó.",
      morphology: "sustantivo masculino",
      tags: ["paz", "plenitud", "bienestar"],
      related: ["G1515"],
      caution: "Se usa a menudo como saludo, pero su significado teológico es profundo.",
      isNew: true
    }''',
    '''{
      id: "H6918",
      language: "Hebreo",
      original: "קָדוֹשׁ",
      transliteration: "kadosh",
      pronunciation: "ka-dosh",
      lemma: "santo",
      short: "Santo, sagrado, apartado.",
      definition: "Sagrado, apartado del uso común para el uso de Dios. La trascendencia moral y pureza de Dios.",
      beginner: "Significa apartado o diferente, especial para Dios. Dios es kadosh, perfecto.",
      advanced: "Adjetivo. La santidad de Dios es su esencia. En las personas o cosas, es estar dedicados a Él.",
      morphology: "adjetivo",
      tags: ["santo", "pureza", "apartado"],
      related: ["H6942", "G40"],
      caution: "No significa primariamente 'bueno', sino 'separado / otro'.",
      isNew: true
    }''',
    '''{
      id: "H5015",
      language: "Hebreo",
      original: "נָבָא",
      transliteration: "naba",
      pronunciation: "na-ba",
      lemma: "profetizar",
      short: "Profetizar, hablar por inspiración.",
      definition: "Hablar bajo influencia divina. Transmitir el mensaje de Dios.",
      beginner: "Dar un mensaje de parte de Dios. No es solo predecir el futuro, es hablar la verdad divina.",
      advanced: "Verbo. Usado en Niphal y Hithpael. Relacionado con la palabra para profeta (nabi).",
      morphology: "verbo",
      tags: ["profecía", "hablar", "mensaje"],
      related: ["H5030", "G4395"],
      caution: "La profecía bíblica enfatiza el proclamar (dar a conocer) más que el predecir (adivinar).",
      isNew: true
    }'''
]

new_entries_str += ',\n    ' + ',\n    '.join(new_vocab)

new_seed_str = f'''const seedData = {{
  entries: [
    {new_entries_str}
  ]
}};'''

# Replace seedData in JS
js = js.replace(seed_str, new_seed_str)

# 2. Update Render Logic for isNew tag
# In renderLexicon, we want to append a NEW chip if entry.isNew
old_html_gen = '<strong>${entry.lemma}</strong>'
new_html_gen = '<strong>${entry.lemma}</strong> ${entry.isNew ? `<span class="mini-chip" style="background:#e0e5ec;color:#2684ff;border:1px solid #c8d8e4;">NUEVO</span>` : ""}'
js = js.replace(old_html_gen, new_html_gen)

# 3. Enhance Search to include ID
old_search_logic = 'const termMatch = entry.lemma.toLowerCase().includes(term);'
new_search_logic = '''const termMatch = entry.lemma.toLowerCase().includes(term) || entry.id.toLowerCase().includes(term);'''
js = js.replace(old_search_logic, new_search_logic)

with open('c:/Users/control/Desktop/page 1/app.js', 'w', encoding='utf-8') as f:
    f.write(js)
print('Applied 16 loops of logic')
