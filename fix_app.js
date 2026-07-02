const fs = require('fs');

let content = fs.readFileSync('c:/Users/control/Desktop/page 1/app.js', 'utf8');

// 1. Inject fallback for sabbathSchool
const fallbackSabbathSchool = `
if (typeof window.sabbathSchool === 'undefined') {
  window.sabbathSchool = { 
    weekRange: "Sin conexión", 
    title: "Lección no disponible", 
    memoryText: "No se pudo cargar la base de datos de la escuela sabática. Revisa que el archivo de datos esté presente.", 
    memoryRef: "Error 404", 
    egwFocus: { reference: "Nota", quote: "No hay conexión.", note: "Revisa tu red." }, 
    days: [{ 
      date: new Date().toISOString().split('T')[0], 
      label: "Sábado", 
      title: "No disponible", 
      reading: "Ninguna", 
      text: "La lección no ha cargado correctamente.", 
      words: [] 
    }] 
  };
}
const sabbathSchool = window.sabbathSchool;
`;

if (!content.includes('typeof window.sabbathSchool === \'undefined\'')) {
    content = content.replace('const egwThemes = [];', 'const egwThemes = [];\n' + fallbackSabbathSchool);
}

// 2. Add 'duelo' to seedData
const startIdx = content.indexOf('const seedData = {');
const endIdx = content.indexOf('const egwThemes =');

if (startIdx !== -1 && endIdx !== -1) {
    let seedCode = content.substring(startIdx, endIdx);
    let evaluateCode = seedCode.replace('const seedData =', 'return') + ';';
    let seedData;
    try {
        seedData = new Function(evaluateCode)();
    } catch (e) {
        console.error('Eval failed', e);
        process.exit(1);
    }
    
    const newVocab = [
        { 
            id: 'H60', 
            language: 'Hebreo', 
            original: 'אֵבֶל', 
            transliteration: 'ebel', 
            pronunciation: 'e-bel', 
            lemma: 'duelo', 
            short: 'Duelo, luto, lamentación.', 
            definition: 'Estado de luto o lamento, generalmente por la muerte de alguien, o como señal de arrepentimiento profundo.', 
            beginner: 'Es la tristeza profunda que sentimos cuando alguien muere o pasa algo muy grave.', 
            advanced: 'Sustantivo masculino. Se asocia a menudo con ritos externos de lamentación (rasgar las vestiduras, cilicio).', 
            morphology: 'sustantivo masculino', 
            tags: ['duelo', 'luto', 'tristeza', 'lamento'], 
            related: ['H56'], 
            caution: 'A diferencia del pesar moderno que suele ser interno, el ebel bíblico era visible y público.', 
            isNew: true 
        },
        { 
            id: 'G3968', 
            language: 'Griego', 
            original: 'πένθος', 
            transliteration: 'penthos', 
            pronunciation: 'pen-thos', 
            lemma: 'lamento', 
            short: 'Duelo, tristeza profunda, lamento.', 
            definition: 'Duelo, llanto apasionado. Se utiliza a menudo para describir la aflicción extrema por la pérdida de una vida.', 
            beginner: 'Un dolor muy profundo que nos hace llorar de tristeza.', 
            advanced: 'Sustantivo neutro. Es el dolor que se apodera de toda la persona y no puede ocultarse.', 
            morphology: 'sustantivo neutro', 
            tags: ['duelo', 'llanto', 'tristeza'], 
            related: ['G3996'], 
            caution: 'En el Apocalipsis, Dios promete que ya no habrá más penthos (llanto/duelo).', 
            isNew: true 
        }
    ];
    
    // Only add if they don't exist
    if (!seedData.entries.find(e => e.id === 'H60')) {
        seedData.entries.push(newVocab[0]);
    }
    if (!seedData.entries.find(e => e.id === 'G3968')) {
        seedData.entries.push(newVocab[1]);
    }
    
    let newSeedCode = 'const seedData = ' + JSON.stringify(seedData, null, 2) + ';\n\n';
    content = content.substring(0, startIdx) + newSeedCode + content.substring(endIdx);
    
    fs.writeFileSync('c:/Users/control/Desktop/page 1/app.js', content, 'utf8');
    console.log('App.js patched successfully!');
} else {
    console.log('Could not find seedData blocks.');
}
