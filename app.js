const STORAGE_KEYS = {
  data: "clarosStrong.data.v1",
  favorites: "clarosStrong.favorites.v1",
  notes: "clarosStrong.notes.v1",
};

const seedData = {
  entries: [
    {
      id: "G26",
      language: "Griego",
      original: "ἀγάπη",
      transliteration: "agape",
      pronunciation: "a-ga-pe",
      lemma: "amor",
      short: "Amor que busca el bien del otro con entrega y fidelidad.",
      definition:
        "Amor decidido, relacional y activo. En el Nuevo Testamento suele describir el amor de Dios y el amor que forma a la comunidad cristiana.",
      beginner:
        "No es solo emocion. Es amor que se mueve hacia el bien del otro, aun cuando cuesta.",
      advanced:
        "Sustantivo femenino. Se distingue del simple afecto por su orientacion activa, covenantal y comunitaria.",
      morphology: "sustantivo femenino",
      tags: ["amor", "entrega", "comunidad"],
      related: ["G25", "G5485", "H2617"],
      caution:
        "Evita convertirla en una definicion unica y rigida; el contexto decide el matiz.",
      starter: true,
    },
    {
      id: "G25",
      language: "Griego",
      original: "ἀγαπάω",
      transliteration: "agapao",
      pronunciation: "a-ga-pa-o",
      lemma: "amar",
      short: "Amar de manera activa, elegir el bien de alguien.",
      definition:
        "Verbo usado para expresar amor, aprecio profundo o lealtad. Puede describir tanto el amor divino como amores humanos que necesitan ser ordenados.",
      beginner:
        "Cuando aparece como verbo, observa quien ama, a quien ama y que accion nace de ese amor.",
      advanced:
        "Verbo contracto. Su campo semantico se define por sujeto, objeto y escena narrativa.",
      morphology: "verbo",
      tags: ["amor", "accion", "relacion"],
      related: ["G26", "G5368"],
      caution:
        "No siempre significa amor perfecto; el verbo tambien puede usarse para deseos mal orientados.",
      starter: true,
    },
    {
      id: "G4102",
      language: "Griego",
      original: "πίστις",
      transliteration: "pistis",
      pronunciation: "pis-tis",
      lemma: "fe",
      short: "Confianza, fidelidad o lealtad que responde a Dios.",
      definition:
        "Puede comunicar confianza, creencia, fidelidad o lealtad. En Pablo suele unir confianza en Cristo y una vida transformada por esa confianza.",
      beginner:
        "Fe no es solo aceptar una idea. Tambien implica confiar y vivir desde esa confianza.",
      advanced:
        "Sustantivo femenino. El rango confianza/fidelidad debe leerse segun autor, construccion gramatical y argumento.",
      morphology: "sustantivo femenino",
      tags: ["fe", "confianza", "fidelidad"],
      related: ["G4100", "H539"],
      caution:
        "No separes automaticamente creer de confiar; muchas veces estan unidos.",
      starter: true,
    },
    {
      id: "G4100",
      language: "Griego",
      original: "πιστεύω",
      transliteration: "pisteuo",
      pronunciation: "pis-teu-o",
      lemma: "creer",
      short: "Confiar, depositar la fe, apoyarse en alguien.",
      definition:
        "Verbo que expresa creer, confiar o encomendarse. En Juan aparece con fuerza relacional: confiar en el Hijo.",
      beginner:
        "Pregunta siempre: creer que algo es cierto, o confiar en una persona.",
      advanced:
        "Verbo. Sus complementos con eis, en o dativo cambian el matiz relacional.",
      morphology: "verbo",
      tags: ["fe", "confianza"],
      related: ["G4102", "H539"],
      caution: "No lo reduzcas a opinion intelectual cuando el contexto apunta a entrega.",
    },
    {
      id: "G1680",
      language: "Griego",
      original: "ἐλπίς",
      transliteration: "elpis",
      pronunciation: "el-pis",
      lemma: "esperanza",
      short: "Esperanza confiada en lo que Dios promete.",
      definition:
        "Esperanza biblica no es optimismo vago; es expectativa firme apoyada en la fidelidad de Dios y en su futuro.",
      beginner:
        "La esperanza mira hacia lo que Dios prometio, aun cuando todavia no se ve.",
      advanced:
        "Sustantivo femenino. En el NT se relaciona con promesa, resurreccion y consumacion.",
      morphology: "sustantivo femenino",
      tags: ["esperanza", "promesa", "futuro"],
      related: ["G4102", "H539"],
      caution: "No la confundas con deseo incierto; su base es el caracter de Dios.",
      starter: true,
    },
    {
      id: "G5287",
      language: "Griego",
      original: "ὑπόστασις",
      transliteration: "hypostasis",
      pronunciation: "ju-pos-ta-sis",
      lemma: "realidad",
      short: "Fundamento, garantia o realidad firme.",
      definition:
        "En Hebreos 11:1 apunta a la base firme o realidad de lo que se espera por fe.",
      beginner:
        "La fe no inventa una realidad; se apoya en una realidad que Dios sostiene.",
      advanced:
        "Sustantivo femenino. Puede comunicar sustancia, confianza, garantia o realidad subyacente.",
      morphology: "sustantivo femenino",
      tags: ["realidad", "fundamento", "fe"],
      related: ["G4102", "G1680", "G1650"],
      caution: "Traduce segun el argumento de Hebreos, no solo por una palabra espanola.",
    },
    {
      id: "G1650",
      language: "Griego",
      original: "ἔλεγχος",
      transliteration: "elenchos",
      pronunciation: "e-len-jos",
      lemma: "evidencia",
      short: "Conviccion, prueba o evidencia que persuade.",
      definition:
        "Termino usado en Hebreos 11:1 para describir la conviccion sobre realidades que todavia no se ven.",
      beginner:
        "La fe ve evidencia donde los ojos todavia no alcanzan.",
      advanced:
        "Sustantivo masculino. Puede incluir prueba, reprension o conviccion segun contexto.",
      morphology: "sustantivo masculino",
      tags: ["evidencia", "conviccion", "fe"],
      related: ["G4102", "G5287", "G991"],
      caution: "No lo leas como evidencia cientifica moderna; Hebreos habla de conviccion teologica.",
    },
    {
      id: "G991",
      language: "Griego",
      original: "βλέπω",
      transliteration: "blepo",
      pronunciation: "ble-po",
      lemma: "ver",
      short: "Ver, percibir, mirar con atencion.",
      definition:
        "Ver puede ser percepcion fisica o discernimiento. Hebreos 11 contrasta lo visible con lo confiado por fe.",
      beginner:
        "Hay cosas que los ojos no ven todavia, pero la fe aprende a confiar en Dios.",
      advanced:
        "Verbo. Puede funcionar literal o metaforicamente segun el discurso.",
      morphology: "verbo",
      tags: ["ver", "percepcion", "fe"],
      related: ["G4102", "G1650"],
      caution: "No conviertas lo invisible en imaginario; el punto es confianza en Dios.",
    },
    {
      id: "G4229",
      language: "Griego",
      original: "πρᾶγμα",
      transliteration: "pragma",
      pronunciation: "prag-ma",
      lemma: "cosa",
      short: "Asunto, realidad, hecho o cosa.",
      definition:
        "Palabra amplia para asunto o realidad. En Hebreos 11:1 se refiere a las cosas que no se ven.",
      beginner:
        "La fe se relaciona con realidades concretas de la promesa de Dios.",
      advanced:
        "Sustantivo neutro. Su sentido depende del dominio: asunto, hecho, practica o realidad.",
      morphology: "sustantivo neutro",
      tags: ["realidad", "asunto", "fe"],
      related: ["G4102", "G991"],
      caution: "No la cargues de demasiado significado cuando funciona como palabra comun.",
    },
    {
      id: "G5485",
      language: "Griego",
      original: "χάρις",
      transliteration: "charis",
      pronunciation: "ja-ris",
      lemma: "gracia",
      short: "Favor generoso, regalo inmerecido, bondad que sostiene.",
      definition:
        "Gracia comunica favor, regalo, belleza de trato y poder generoso de Dios. En Pablo es el marco de la salvacion y de la vida nueva.",
      beginner:
        "Piensala como favor que no se compra: Dios da antes de que uno pueda presumir.",
      advanced:
        "Sustantivo femenino. Puede referirse a favor, gratitud, don o beneficencia segun la escena.",
      morphology: "sustantivo femenino",
      tags: ["gracia", "regalo", "favor"],
      related: ["G5479", "G26"],
      caution: "Gracia no significa permiso para vivir sin transformacion.",
      starter: true,
    },
    {
      id: "G3056",
      language: "Griego",
      original: "λόγος",
      transliteration: "logos",
      pronunciation: "lo-gos",
      lemma: "palabra",
      short: "Palabra, mensaje, razon o expresion reveladora.",
      definition:
        "Logos puede significar palabra, discurso, mensaje, razon o cuenta. En Juan 1 toma un peso teologico unico al presentar al Logos con Dios.",
      beginner:
        "No asumas que siempre significa lo mismo. En Juan 1 es mas que una palabra hablada.",
      advanced:
        "Sustantivo masculino con amplio rango semantico helenistico y judio.",
      morphology: "sustantivo masculino",
      tags: ["palabra", "mensaje", "razon"],
      related: ["H1697", "G2316"],
      caution: "El contexto literario de Juan 1 gobierna su lectura cristologica.",
      starter: true,
    },
    {
      id: "G1515",
      language: "Griego",
      original: "εἰρήνη",
      transliteration: "eirene",
      pronunciation: "ei-re-ne",
      lemma: "paz",
      short: "Paz, reconciliacion, bienestar restaurado.",
      definition:
        "Paz como ausencia de hostilidad y como estado de reconciliacion con Dios y con otros. Recibe trasfondo del shalom hebreo.",
      beginner:
        "No es solo tranquilidad interna; tambien habla de relacion reparada.",
      advanced:
        "Sustantivo femenino. En textos paulinos suele tener fuerza soteriologica y comunitaria.",
      morphology: "sustantivo femenino",
      tags: ["paz", "reconciliacion", "bienestar"],
      related: ["H7965", "G1344"],
      caution: "No la reduzcas a calma psicologica cuando el argumento habla de reconciliacion.",
      starter: true,
    },
    {
      id: "G1344",
      language: "Griego",
      original: "δικαιόω",
      transliteration: "dikaioo",
      pronunciation: "di-kai-o-o",
      lemma: "justificar",
      short: "Declarar justo, poner en correcta relacion.",
      definition:
        "Verbo usado para hablar de declarar justo, vindicar o establecer una condicion recta delante de Dios.",
      beginner:
        "En Pablo mira el tribunal y la relacion: Dios declara y restaura.",
      advanced:
        "Verbo. El debate teologico depende de argumento, voz, agente y trasfondo judicial/covenantal.",
      morphology: "verbo",
      tags: ["justicia", "salvacion", "pablo"],
      related: ["G1343", "G4102"],
      caution: "No lo aplanes a una sola imagen; puede sonar juridico y relacional.",
    },
    {
      id: "G1343",
      language: "Griego",
      original: "δικαιοσύνη",
      transliteration: "dikaiosyne",
      pronunciation: "di-kai-o-su-ne",
      lemma: "justicia",
      short: "Rectitud, justicia, fidelidad al orden de Dios.",
      definition:
        "Justicia puede hablar de rectitud moral, veredicto correcto, fidelidad de Dios o vida alineada con su voluntad.",
      beginner:
        "Pregunta si el texto habla del caracter de Dios, del estado de una persona o de una practica justa.",
      advanced:
        "Sustantivo femenino. Su lectura varia segun LXX, Mateo, Pablo y contexto profetico.",
      morphology: "sustantivo femenino",
      tags: ["justicia", "rectitud", "reino"],
      related: ["G1344", "H6666"],
      caution: "No confundas justicia biblica con mera severidad.",
    },
    {
      id: "G4991",
      language: "Griego",
      original: "σωτηρία",
      transliteration: "soteria",
      pronunciation: "so-te-ri-a",
      lemma: "salvacion",
      short: "Rescate, liberacion, sanidad integral de Dios.",
      definition:
        "Salvacion puede referirse a rescate espiritual, liberacion, preservacion o la obra completa de Dios en Cristo.",
      beginner:
        "Mira de que peligro se salva y hacia que vida nueva se abre la persona.",
      advanced:
        "Sustantivo femenino. Su rango incluye rescate presente y consumacion futura.",
      morphology: "sustantivo femenino",
      tags: ["salvacion", "rescate", "liberacion"],
      related: ["G4982", "G5485"],
      caution: "No la limites solo a un momento inicial si el pasaje mira un proceso completo.",
    },
    {
      id: "G2316",
      language: "Griego",
      original: "θεός",
      transliteration: "theos",
      pronunciation: "the-os",
      lemma: "Dios",
      short: "Dios, deidad, el Dios verdadero segun el contexto biblico.",
      definition:
        "Termino comun para Dios. En el Nuevo Testamento normalmente se refiere al Dios de Israel revelado en la historia de Jesus.",
      beginner: "Mira si aparece con articulo, como sujeto de accion o en contraste con idolos.",
      advanced:
        "Sustantivo masculino. El articulo y la sintaxis pueden ser importantes en textos cristologicos.",
      morphology: "sustantivo masculino",
      tags: ["Dios", "teologia"],
      related: ["H430", "G3056"],
      caution: "La gramatica ayuda, pero no sustituye el argumento completo del pasaje.",
    },
    {
      id: "G5207",
      language: "Griego",
      original: "υἱός",
      transliteration: "huios",
      pronunciation: "jui-os",
      lemma: "hijo",
      short: "Hijo; tambien identidad, pertenencia o representante.",
      definition:
        "Hijo puede expresar descendencia, relacion, identidad o representacion. En Juan aplicado a Jesus tiene fuerza unica.",
      beginner:
        "No siempre apunta solo a edad o nacimiento; muchas veces habla de relacion e identidad.",
      advanced:
        "Sustantivo masculino. Su valor teologico depende de titulos y ecos del AT.",
      morphology: "sustantivo masculino",
      tags: ["hijo", "identidad", "cristo"],
      related: ["G2316", "G5547"],
      caution: "Lee los titulos de Jesus dentro del libro entero.",
    },
    {
      id: "G2222",
      language: "Griego",
      original: "ζωή",
      transliteration: "zoe",
      pronunciation: "zo-e",
      lemma: "vida",
      short: "Vida, especialmente vida que procede de Dios.",
      definition:
        "Vida puede ser vida natural, pero en Juan suele apuntar a vida eterna, cualitativa y relacional con Dios.",
      beginner:
        "Vida eterna no es solo duracion; tambien es una clase de vida con Dios.",
      advanced:
        "Sustantivo femenino. En literatura joanina adquiere densidad escatologica presente.",
      morphology: "sustantivo femenino",
      tags: ["vida", "eternidad", "juan"],
      related: ["G166", "G4100"],
      caution: "Evita leerla solo como vida despues de la muerte.",
    },
    {
      id: "G166",
      language: "Griego",
      original: "αἰώνιος",
      transliteration: "aionios",
      pronunciation: "ai-o-ni-os",
      lemma: "eterno",
      short: "Eterno, perteneciente a la era venidera.",
      definition:
        "Adjetivo relacionado con era o edad. Puede hablar de duracion sin fin y de cualidad propia del mundo de Dios.",
      beginner:
        "Cuando acompana vida, mira tanto duracion como calidad de vida.",
      advanced:
        "Adjetivo. Su trasfondo apocaliptico ayuda a leer reino, juicio y vida.",
      morphology: "adjetivo",
      tags: ["eterno", "era", "vida"],
      related: ["G2222"],
      caution: "No lo reduzcas a un reloj infinito; a veces apunta a la era de Dios.",
    },
    {
      id: "G2889",
      language: "Griego",
      original: "κόσμος",
      transliteration: "kosmos",
      pronunciation: "kos-mos",
      lemma: "mundo",
      short: "Mundo, orden creado, humanidad o sistema rebelde.",
      definition:
        "Kosmos puede significar universo, humanidad, arreglo social o sistema opuesto a Dios. Juan usa varios matices.",
      beginner:
        "Pregunta si mundo significa personas, creacion o sistema de valores.",
      advanced:
        "Sustantivo masculino. El uso joanino exige distinguir objeto amado y sistema resistido.",
      morphology: "sustantivo masculino",
      tags: ["mundo", "humanidad", "juan"],
      related: ["G25", "G2316"],
      caution: "Juan puede decir que Dios ama al mundo y que el mundo se opone a Dios.",
    },
    {
      id: "G1325",
      language: "Griego",
      original: "δίδωμι",
      transliteration: "didomi",
      pronunciation: "di-do-mi",
      lemma: "dar",
      short: "Dar, entregar, conceder.",
      definition:
        "Verbo amplio para dar o conceder. En textos sobre Jesus puede hablar de entrega salvadora o don recibido.",
      beginner: "Mira quien da, que da y para que lo da.",
      advanced:
        "Verbo mi. Sus tiempos y objetos pueden cargar peso narrativo y teologico.",
      morphology: "verbo",
      tags: ["dar", "don", "entrega"],
      related: ["G5485", "G5207"],
      caution: "No todos los usos tienen la misma intensidad sacrificial.",
    },
    {
      id: "G4982",
      language: "Griego",
      original: "σῴζω",
      transliteration: "sozo",
      pronunciation: "so-zo",
      lemma: "salvar",
      short: "Salvar, rescatar, sanar, preservar.",
      definition:
        "Verbo que puede indicar rescate espiritual, liberacion de peligro, sanidad o preservacion.",
      beginner:
        "Pregunta de que se salva: culpa, enfermedad, peligro, muerte o separacion de Dios.",
      advanced:
        "Verbo. El contexto decide si predomina rescate, sanidad o salvacion escatologica.",
      morphology: "verbo",
      tags: ["salvar", "rescatar", "sanar"],
      related: ["G4991", "G5485"],
      caution: "No todos los usos son tecnicamente identicos.",
    },
    {
      id: "G5547",
      language: "Griego",
      original: "Χριστός",
      transliteration: "Christos",
      pronunciation: "jris-tos",
      lemma: "Cristo",
      short: "Ungido, Mesias, rey esperado.",
      definition:
        "Titulo que traduce la idea hebrea de Mesias: el ungido de Dios. En el NT se une a la identidad de Jesus.",
      beginner: "Cristo no es apellido; es titulo real y mesianico.",
      advanced:
        "Sustantivo/titulo. Conecta expectativas reales, sacerdotales y escatologicas.",
      morphology: "titulo sustantivado",
      tags: ["cristo", "mesias", "rey"],
      related: ["G2424", "H4428"],
      caution: "Lee el titulo dentro de la historia de Israel.",
    },
    {
      id: "G2424",
      language: "Griego",
      original: "Ἰησοῦς",
      transliteration: "Iesous",
      pronunciation: "ie-sus",
      lemma: "Jesus",
      short: "Nombre Jesus, equivalente a Josue: YHWH salva.",
      definition:
        "Nombre personal de Jesus. Se relaciona con la raiz hebrea de salvacion y con la historia de Josue.",
      beginner: "El nombre ya apunta a rescate y liberacion.",
      advanced:
        "Nombre propio. Su trasfondo hebreo ilumina textos programaticos como Mateo 1.",
      morphology: "nombre propio",
      tags: ["jesus", "salvacion"],
      related: ["G4991", "G5547"],
      caution: "No reemplaza la lectura narrativa de cada evangelio.",
    },
    {
      id: "G2962",
      language: "Griego",
      original: "κύριος",
      transliteration: "kyrios",
      pronunciation: "ku-ri-os",
      lemma: "senor",
      short: "Senor, amo, autoridad; titulo divino en muchos contextos.",
      definition:
        "Puede referirse a un amo humano o a autoridad divina. En citas del AT puede representar el nombre YHWH.",
      beginner:
        "Mira si el texto habla de respeto humano, autoridad de Jesus o el Dios de Israel.",
      advanced:
        "Sustantivo masculino. La relacion con LXX y citas veterotestamentarias es clave.",
      morphology: "sustantivo masculino",
      tags: ["senor", "autoridad", "YHWH"],
      related: ["H3068", "G2424"],
      caution: "No todos los usos son automaticamente titulos divinos.",
    },
    {
      id: "G4151",
      language: "Griego",
      original: "πνεῦμα",
      transliteration: "pneuma",
      pronunciation: "pneu-ma",
      lemma: "espiritu",
      short: "Espiritu, viento, aliento.",
      definition:
        "Puede significar viento, aliento, espiritu humano o el Espiritu de Dios. El contexto decide el referente.",
      beginner:
        "Observa si actua como persona, fuerza vital, actitud interior o viento.",
      advanced:
        "Sustantivo neutro. Su trasfondo ruach ilumina muchos usos biblicos.",
      morphology: "sustantivo neutro",
      tags: ["espiritu", "aliento", "Dios"],
      related: ["H7307", "G26"],
      caution: "No decidas el sentido solo por la palabra aislada.",
    },
    {
      id: "G1577",
      language: "Griego",
      original: "ἐκκλησία",
      transliteration: "ekklesia",
      pronunciation: "ek-kle-si-a",
      lemma: "iglesia",
      short: "Asamblea, comunidad convocada.",
      definition:
        "Asamblea reunida. En el NT designa comunidades llamadas por Dios y formadas alrededor de Cristo.",
      beginner: "Iglesia en el NT habla de personas reunidas, no primero de un edificio.",
      advanced:
        "Sustantivo femenino. Conecta asamblea civica y pueblo convocado de Dios.",
      morphology: "sustantivo femenino",
      tags: ["iglesia", "asamblea", "comunidad"],
      related: ["G2842", "G1322"],
      caution: "Evita proyectar estructuras modernas en cada uso.",
    },
    {
      id: "G1322",
      language: "Griego",
      original: "διδαχή",
      transliteration: "didache",
      pronunciation: "di-da-je",
      lemma: "ensenanza",
      short: "Ensenanza, doctrina recibida y practicada.",
      definition:
        "Contenido ensenado y forma de instruccion. En Hechos se asocia con la vida perseverante de la comunidad.",
      beginner: "La ensenanza biblica apunta a formar vida, no solo informar la mente.",
      advanced:
        "Sustantivo femenino. Puede referirse al acto de ensenar o al contenido doctrinal.",
      morphology: "sustantivo femenino",
      tags: ["ensenanza", "doctrina", "formacion"],
      related: ["G1577"],
      caution: "No la separes de practica comunitaria cuando el texto las une.",
    },
    {
      id: "G2842",
      language: "Griego",
      original: "κοινωνία",
      transliteration: "koinonia",
      pronunciation: "koi-no-ni-a",
      lemma: "comunion",
      short: "Participacion, comunion, vida compartida.",
      definition:
        "Comunica participacion real, sociedad y compartir. En la iglesia habla de una vida comun nacida del evangelio.",
      beginner: "Es mas que saludar; implica participar y compartir la vida.",
      advanced:
        "Sustantivo femenino. Puede expresar comunion espiritual, ayuda material o alianza.",
      morphology: "sustantivo femenino",
      tags: ["comunion", "participacion", "comunidad"],
      related: ["G1577", "G26"],
      caution: "No la reduzcas a convivencia agradable.",
    },
    {
      id: "G4335",
      language: "Griego",
      original: "προσευχή",
      transliteration: "proseuche",
      pronunciation: "pros-eu-je",
      lemma: "oracion",
      short: "Oracion dirigida a Dios.",
      definition:
        "Oracion como acto de hablar con Dios, suplicar, agradecer y depender de el.",
      beginner: "Observa si la oracion aparece como costumbre, clamor, gratitud o adoracion.",
      advanced:
        "Sustantivo femenino. Se vincula con dependencia y perseverancia comunitaria.",
      morphology: "sustantivo femenino",
      tags: ["oracion", "dependencia", "adoracion"],
      related: ["G1577"],
      caution: "No todos los contextos ensenan el mismo modelo de oracion.",
    },
    {
      id: "G5479",
      language: "Griego",
      original: "χαρά",
      transliteration: "chara",
      pronunciation: "ja-ra",
      lemma: "gozo",
      short: "Gozo, alegria profunda ligada a Dios.",
      definition:
        "Alegria que puede sostenerse aun en dificultad porque descansa en la obra de Dios.",
      beginner: "No siempre significa estar euforico; puede ser alegria con raiz espiritual.",
      advanced:
        "Sustantivo femenino. Relacionado verbal y sonoramente con charis en varios contextos.",
      morphology: "sustantivo femenino",
      tags: ["gozo", "alegria", "fruto"],
      related: ["G5485", "G4151"],
      caution: "No lo trates como simple temperamento alegre.",
    },
    {
      id: "H7225",
      language: "Hebreo",
      original: "רֵאשִׁית",
      transliteration: "bereshith",
      pronunciation: "be-re-shit",
      lemma: "principio",
      short: "Comienzo, primera parte, punto de origen.",
      definition:
        "Termino de inicio u origen. En Genesis 1:1 abre la escena de la creacion bajo la accion de Dios.",
      beginner: "Marca el punto de partida de la historia biblica de la creacion.",
      advanced:
        "Sustantivo femenino en construccion con prefijo beth en Genesis 1:1.",
      morphology: "sustantivo femenino",
      tags: ["principio", "genesis", "creacion"],
      related: ["H1254", "H430"],
      caution: "Los detalles gramaticales de Genesis 1:1 son debatidos; lee el verso completo.",
      starter: true,
    },
    {
      id: "H1254",
      language: "Hebreo",
      original: "בָּרָא",
      transliteration: "bara",
      pronunciation: "ba-ra",
      lemma: "crear",
      short: "Crear, formar por accion divina.",
      definition:
        "Verbo usado de manera caracteristica con Dios como sujeto para acciones creadoras o renovadoras.",
      beginner: "Cuando Dios es el sujeto, apunta a una accion que funda realidad nueva.",
      advanced:
        "Verbo qal. Su uso con Dios como agente es teologicamente significativo.",
      morphology: "verbo",
      tags: ["crear", "Dios", "genesis"],
      related: ["H7225", "H430"],
      caution: "No todo uso decide por si solo la discusion sobre materiales o proceso.",
      starter: true,
    },
    {
      id: "H430",
      language: "Hebreo",
      original: "אֱלֹהִים",
      transliteration: "elohim",
      pronunciation: "e-lo-him",
      lemma: "Dios",
      short: "Dios; tambien dioses segun contexto.",
      definition:
        "Forma plural usada a menudo para el Dios de Israel con verbos singulares. Tambien puede referirse a dioses o seres celestiales en otros contextos.",
      beginner:
        "En Genesis 1 se refiere al Dios creador; en otros textos revisa el contexto.",
      advanced:
        "Plural morfologico. Concordancia verbal y marco literario orientan el referente.",
      morphology: "sustantivo plural morfologico",
      tags: ["Dios", "creacion", "Israel"],
      related: ["H3068", "G2316"],
      caution: "No construyas una doctrina solo desde la forma plural.",
      starter: true,
    },
    {
      id: "H8064",
      language: "Hebreo",
      original: "שָׁמַיִם",
      transliteration: "shamayim",
      pronunciation: "sha-ma-yim",
      lemma: "cielos",
      short: "Cielos, firmamento, region superior.",
      definition:
        "Puede referirse al cielo visible, la region celestial o los cielos como parte de la creacion.",
      beginner: "Mira si el texto habla del cielo fisico o del ambito de Dios.",
      advanced:
        "Sustantivo plural. Su campo se define por cosmologia y genero literario.",
      morphology: "sustantivo plural",
      tags: ["cielos", "creacion"],
      related: ["H776", "H1254"],
      caution: "No importes categorias modernas sin atender la poesia y cosmologia biblica.",
    },
    {
      id: "H776",
      language: "Hebreo",
      original: "אֶרֶץ",
      transliteration: "erets",
      pronunciation: "e-rets",
      lemma: "tierra",
      short: "Tierra, suelo, pais o territorio.",
      definition:
        "Erets puede significar tierra como mundo, suelo, pais o territorio prometido.",
      beginner: "El contexto decide si es planeta, suelo o tierra de un pueblo.",
      advanced:
        "Sustantivo femenino. Su rango es geografico, cosmologico y politico.",
      morphology: "sustantivo femenino",
      tags: ["tierra", "territorio", "creacion"],
      related: ["H8064", "H430"],
      caution: "No traduzcas mecanicamente igual en todos los pasajes.",
    },
    {
      id: "H3068",
      language: "Hebreo",
      original: "יהוה",
      transliteration: "YHWH",
      pronunciation: "Adonai / Yahweh",
      lemma: "YHWH",
      short: "Nombre del Dios del pacto de Israel.",
      definition:
        "Nombre personal del Dios de Israel. Muchas Biblias lo representan como SENOR o Jehova segun tradicion editorial.",
      beginner:
        "Cuando aparece, no es un titulo generico: es el nombre del Dios que se revela y hace pacto.",
      advanced:
        "Tetragramaton. La vocalizacion liturgica y la representacion en traducciones requieren cuidado.",
      morphology: "nombre propio divino",
      tags: ["YHWH", "pacto", "Dios"],
      related: ["H430", "G2962", "H2617"],
      caution: "Respeta las tradiciones de lectura y explica como tu Biblia lo representa.",
      starter: true,
    },
    {
      id: "H8085",
      language: "Hebreo",
      original: "שָׁמַע",
      transliteration: "shama",
      pronunciation: "sha-ma",
      lemma: "escuchar",
      short: "Oir, escuchar, obedecer con atencion.",
      definition:
        "Shama puede ser percibir sonido, escuchar con atencion o responder obedientemente.",
      beginner: "En la Biblia, escuchar muchas veces incluye responder.",
      advanced:
        "Verbo qal y otros binyanim. El objeto y la escena covenantal dan el matiz.",
      morphology: "verbo",
      tags: ["escuchar", "obedecer", "pacto"],
      related: ["H539", "H8451"],
      caution: "No separes oir y obedecer cuando el pasaje los une.",
      starter: true,
    },
    {
      id: "H3478",
      language: "Hebreo",
      original: "יִשְׂרָאֵל",
      transliteration: "Yisrael",
      pronunciation: "yis-ra-el",
      lemma: "Israel",
      short: "Israel, nombre del pueblo del pacto.",
      definition:
        "Nombre de Jacob y del pueblo descendiente asociado al pacto, la tierra y la vocacion de dar testimonio de YHWH.",
      beginner: "Puede referirse a una persona, un pueblo o un reino segun el libro.",
      advanced:
        "Nombre propio. Su referente historico cambia entre patriarca, tribus, reino y comunidad postexilica.",
      morphology: "nombre propio",
      tags: ["Israel", "pacto", "pueblo"],
      related: ["H3068", "H8085"],
      caution: "Distingue el momento historico del pasaje.",
    },
    {
      id: "H259",
      language: "Hebreo",
      original: "אֶחָד",
      transliteration: "echad",
      pronunciation: "e-jad",
      lemma: "uno",
      short: "Uno, unico, unidad.",
      definition:
        "Numero uno y tambien idea de unidad o singularidad. En Deuteronomio 6 afirma la unicidad de YHWH.",
      beginner: "Puede hablar de numero o de unidad exclusiva.",
      advanced:
        "Numeral/adjetivo. El debate teologico debe atender sintaxis y contexto confesional.",
      morphology: "numeral",
      tags: ["uno", "unidad", "shema"],
      related: ["H3068", "H430"],
      caution: "No fuerces debates posteriores en una palabra aislada.",
    },
    {
      id: "H7462",
      language: "Hebreo",
      original: "רָעָה",
      transliteration: "raah",
      pronunciation: "ra-a",
      lemma: "pastorear",
      short: "Pastorear, cuidar, guiar y alimentar.",
      definition:
        "Verbo para la accion del pastor. Aplicado a Dios comunica guia, provision, proteccion y gobierno cuidadoso.",
      beginner: "Dios como pastor no solo acompana; tambien guia y protege.",
      advanced:
        "Verbo qal. La metafora pastoral une autoridad y ternura en textos reales y devocionales.",
      morphology: "verbo",
      tags: ["pastor", "guia", "cuidado"],
      related: ["H3068", "H7965"],
      caution: "Lee la imagen completa del salmo antes de aislar el termino.",
    },
    {
      id: "H2617",
      language: "Hebreo",
      original: "חֶסֶד",
      transliteration: "chesed",
      pronunciation: "je-sed",
      lemma: "amor leal",
      short: "Amor fiel, misericordia, lealtad de pacto.",
      definition:
        "Chesed combina amor, bondad, lealtad y misericordia dentro de una relacion comprometida.",
      beginner:
        "Es amor que permanece fiel. No es solo sentimiento; es compromiso que actua.",
      advanced:
        "Sustantivo masculino. Su traduccion varia: misericordia, amor leal, bondad, lealtad.",
      morphology: "sustantivo masculino",
      tags: ["amor", "misericordia", "pacto"],
      related: ["G26", "H3068"],
      caution: "Elige traduccion segun contexto, no por una sola formula.",
      starter: true,
    },
    {
      id: "H7965",
      language: "Hebreo",
      original: "שָׁלוֹם",
      transliteration: "shalom",
      pronunciation: "sha-lom",
      lemma: "paz",
      short: "Paz, plenitud, bienestar, integridad.",
      definition:
        "Shalom es bienestar integral: relacion correcta, seguridad, salud, plenitud y vida ordenada bajo Dios.",
      beginner: "Es mas que no pelear. Es vida completa y reparada.",
      advanced:
        "Sustantivo masculino. El campo incluye bienestar personal, social y covenantal.",
      morphology: "sustantivo masculino",
      tags: ["paz", "plenitud", "bienestar"],
      related: ["G1515", "H2617"],
      caution: "No lo reduzcas a una sensacion privada de calma.",
      starter: true,
    },
    {
      id: "H539",
      language: "Hebreo",
      original: "אָמַן",
      transliteration: "aman",
      pronunciation: "a-man",
      lemma: "creer",
      short: "Ser firme, confiar, creer, sostenerse.",
      definition:
        "Raiz relacionada con firmeza y confianza. De ella viene amen. Creer implica apoyarse en la fidelidad de Dios.",
      beginner: "Creer es apoyarse en algo firme, no solo pensar una idea.",
      advanced:
        "Verbo con matices de firmeza, crianza, fidelidad y confianza segun forma verbal.",
      morphology: "verbo",
      tags: ["creer", "confianza", "amen"],
      related: ["G4102", "G4100"],
      caution: "El matiz cambia mucho por binyan y contexto.",
      starter: true,
    },
    {
      id: "H6666",
      language: "Hebreo",
      original: "צְדָקָה",
      transliteration: "tsedaqah",
      pronunciation: "tse-da-ka",
      lemma: "justicia",
      short: "Justicia, rectitud, relacion correcta.",
      definition:
        "Justicia como conducta recta, fidelidad relacional y orden correcto delante de Dios.",
      beginner: "No es solo castigo; tambien es hacer lo correcto y reparar relaciones.",
      advanced:
        "Sustantivo femenino. Puede ser etico, juridico, social y covenantal.",
      morphology: "sustantivo femenino",
      tags: ["justicia", "rectitud", "pacto"],
      related: ["G1343", "H539"],
      caution: "Lee justicia y misericordia juntas cuando el texto las acerca.",
    },
    {
      id: "H3034",
      language: "Hebreo",
      original: "יָדָה",
      transliteration: "yadah",
      pronunciation: "ya-da",
      lemma: "dar gracias",
      short: "Dar gracias, alabar, confesar.",
      definition:
        "Verbo para agradecer, alabar o confesar publicamente la grandeza y bondad de Dios.",
      beginner: "La gratitud biblica suele hablar en voz alta de lo que Dios ha hecho.",
      advanced:
        "Verbo. En salmos, puede unir alabanza, testimonio y confesion liturgica.",
      morphology: "verbo",
      tags: ["gracias", "alabanza", "salmos"],
      related: ["H2617", "H3068"],
      caution: "No confundas confesar aqui solo con admitir culpa.",
    },
    {
      id: "H2896",
      language: "Hebreo",
      original: "טוֹב",
      transliteration: "tov",
      pronunciation: "tov",
      lemma: "bueno",
      short: "Bueno, agradable, beneficioso, correcto.",
      definition:
        "Tov puede hablar de bondad moral, belleza, utilidad o bienestar. En Genesis describe lo creado como bueno.",
      beginner: "Bueno puede significar que algo cumple el proposito de Dios.",
      advanced:
        "Adjetivo/sustantivo. Su rango combina valor moral, estetico y funcional.",
      morphology: "adjetivo",
      tags: ["bueno", "creacion", "bondad"],
      related: ["H1254", "H2617"],
      caution: "No reduzcas tov a agradable; a menudo incluye proposito y orden.",
    },
    {
      id: "H5315",
      language: "Hebreo",
      original: "נֶפֶשׁ",
      transliteration: "nephesh",
      pronunciation: "ne-fesh",
      lemma: "alma",
      short: "Vida, garganta, persona, ser viviente.",
      definition:
        "Nephesh puede indicar vida, deseo, garganta, persona entera o ser viviente. No siempre equivale a una parte separada del cuerpo.",
      beginner: "Muchas veces significa la persona completa, no solo un componente invisible.",
      advanced:
        "Sustantivo femenino. Su antropologia debe leerse desde el hebreo, no desde categorias posteriores.",
      morphology: "sustantivo femenino",
      tags: ["alma", "vida", "persona"],
      related: ["G2222"],
      caution: "No importes automaticamente una division cuerpo/alma en cada pasaje.",
      starter: true,
    },
    {
      id: "H8451",
      language: "Hebreo",
      original: "תּוֹרָה",
      transliteration: "torah",
      pronunciation: "to-ra",
      lemma: "instruccion",
      short: "Instruccion, ley, ensenanza de Dios.",
      definition:
        "Torah puede referirse a instruccion, direccion, la Ley o el Pentateuco. Su sentido basico es guia dada para vivir delante de Dios.",
      beginner: "Piensa primero en instruccion que orienta la vida.",
      advanced:
        "Sustantivo femenino. El contexto decide si habla de instruccion puntual, cuerpo legal o Escritura.",
      morphology: "sustantivo femenino",
      tags: ["ley", "instruccion", "sabiduria"],
      related: ["H8085", "H1697"],
      caution: "No la leas solo como lista fria de reglas.",
    },
    {
      id: "H1697",
      language: "Hebreo",
      original: "דָּבָר",
      transliteration: "dabar",
      pronunciation: "da-var",
      lemma: "palabra",
      short: "Palabra, asunto, cosa, acontecimiento.",
      definition:
        "Dabar une palabra y asunto. En hebreo, una palabra puede ser evento, mandato o realidad comunicada.",
      beginner: "Palabra no es solo sonido; puede ser mensaje que actua.",
      advanced:
        "Sustantivo masculino. Su rango palabra/asunto/evento es clave para narrativa y profecia.",
      morphology: "sustantivo masculino",
      tags: ["palabra", "mensaje", "evento"],
      related: ["G3056", "H8451"],
      caution: "No fuerces siempre la traduccion palabra si asunto encaja mejor.",
    },
    {
      id: "H4428",
      language: "Hebreo",
      original: "מֶלֶךְ",
      transliteration: "melek",
      pronunciation: "me-lej",
      lemma: "rey",
      short: "Rey, gobernante.",
      definition:
        "Rey como autoridad politica y figura representativa. En la esperanza biblica se conecta con el Mesias.",
      beginner: "El rey representa gobierno, justicia y responsabilidad delante de Dios.",
      advanced:
        "Sustantivo masculino. Importante en pactos davideos, salmos reales y esperanza mesianica.",
      morphology: "sustantivo masculino",
      tags: ["rey", "mesias", "gobierno"],
      related: ["G5547"],
      caution: "Distingue reyes humanos, YHWH como rey y esperanza mesianica.",
    },
  ],
  verses: [
    {
      id: "genesis-1-1",
      ref: "Genesis 1:1",
      book: "Genesis",
      testament: "AT",
      text: "En el principio, Dios creo los cielos y la tierra.",
      note: "Texto de estudio basado en una formulacion publica y resumida.",
      tokens: [
        { word: "principio", strong: "H7225" },
        { word: "Dios", strong: "H430" },
        { word: "creo", strong: "H1254" },
        { word: "cielos", strong: "H8064" },
        { word: "tierra", strong: "H776" },
      ],
    },
    {
      id: "deuteronomio-6-4",
      ref: "Deuteronomio 6:4",
      book: "Deuteronomio",
      testament: "AT",
      text: "Escucha, Israel: YHWH es nuestro Dios; YHWH es uno.",
      note: "Parafrasis de estudio del Shema.",
      tokens: [
        { word: "Escucha", strong: "H8085" },
        { word: "Israel", strong: "H3478" },
        { word: "YHWH", strong: "H3068" },
        { word: "Dios", strong: "H430" },
        { word: "uno", strong: "H259" },
      ],
    },
    {
      id: "numeros-6-26",
      ref: "Numeros 6:26",
      book: "Numeros",
      testament: "AT",
      text: "YHWH mire hacia ti con favor y te conceda paz.",
      note: "Parafrasis de estudio de la bendicion sacerdotal.",
      tokens: [
        { word: "YHWH", strong: "H3068" },
        { word: "paz", strong: "H7965" },
      ],
    },
    {
      id: "salmo-23-1",
      ref: "Salmo 23:1",
      book: "Salmos",
      testament: "AT",
      text: "YHWH pastorea mi vida; nada esencial me falta.",
      note: "Parafrasis de estudio.",
      tokens: [
        { word: "YHWH", strong: "H3068" },
        { word: "pastorea", strong: "H7462" },
        { word: "vida", strong: "H5315" },
      ],
    },
    {
      id: "salmo-136-1",
      ref: "Salmo 136:1",
      book: "Salmos",
      testament: "AT",
      text: "Den gracias a YHWH, porque es bueno; su amor leal permanece.",
      note: "Parafrasis de estudio.",
      tokens: [
        { word: "gracias", strong: "H3034" },
        { word: "YHWH", strong: "H3068" },
        { word: "bueno", strong: "H2896" },
        { word: "amor leal", strong: "H2617" },
      ],
    },
    {
      id: "genesis-15-6",
      ref: "Genesis 15:6",
      book: "Genesis",
      testament: "AT",
      text: "Abram confio en YHWH, y eso le fue contado como justicia.",
      note: "Parafrasis de estudio.",
      tokens: [
        { word: "confio", strong: "H539" },
        { word: "YHWH", strong: "H3068" },
        { word: "justicia", strong: "H6666" },
      ],
    },
    {
      id: "proverbios-3-5",
      ref: "Proverbios 3:5",
      book: "Proverbios",
      testament: "AT",
      text: "Confia en YHWH con todo tu ser y no te apoyes solo en tu prudencia.",
      note: "Parafrasis de estudio.",
      tokens: [
        { word: "Confia", strong: "H539" },
        { word: "YHWH", strong: "H3068" },
        { word: "ser", strong: "H5315" },
      ],
    },
    {
      id: "juan-1-1",
      ref: "Juan 1:1",
      book: "Juan",
      testament: "NT",
      text: "En el principio estaba el Logos; el Logos estaba con Dios y el Logos era divino.",
      note: "Parafrasis de estudio.",
      tokens: [
        { word: "Logos", strong: "G3056" },
        { word: "Dios", strong: "G2316" },
      ],
    },
    {
      id: "juan-3-16",
      ref: "Juan 3:16",
      book: "Juan",
      testament: "NT",
      text: "Dios amo al mundo y dio a su Hijo, para que quien confia tenga vida eterna.",
      note: "Parafrasis de estudio.",
      tokens: [
        { word: "Dios", strong: "G2316" },
        { word: "amo", strong: "G25" },
        { word: "mundo", strong: "G2889" },
        { word: "dio", strong: "G1325" },
        { word: "Hijo", strong: "G5207" },
        { word: "confia", strong: "G4100" },
        { word: "vida", strong: "G2222" },
        { word: "eterna", strong: "G166" },
      ],
    },
    {
      id: "hebreos-11-1",
      ref: "Hebreos 11:1",
      book: "Hebreos",
      testament: "NT",
      text: "La fe muestra la realidad de lo que esperamos; es evidencia de lo que no vemos.",
      note: "Texto de memoria de Escuela Sabatica, leccion 8, semana del 16 al 22 de mayo de 2026.",
      tokens: [
        { word: "fe", strong: "G4102" },
        { word: "realidad", strong: "G5287" },
        { word: "esperamos", strong: "G1680" },
        { word: "evidencia", strong: "G1650" },
        { word: "vemos", strong: "G991" },
        { word: "lo que", strong: "G4229" },
      ],
    },
    {
      id: "efesios-2-8",
      ref: "Efesios 2:8",
      book: "Efesios",
      testament: "NT",
      text: "Por gracia ustedes son salvados mediante la fe; esto viene como regalo de Dios.",
      note: "Parafrasis de estudio.",
      tokens: [
        { word: "gracia", strong: "G5485" },
        { word: "salvados", strong: "G4982" },
        { word: "fe", strong: "G4102" },
        { word: "Dios", strong: "G2316" },
      ],
    },
    {
      id: "romanos-5-1",
      ref: "Romanos 5:1",
      book: "Romanos",
      testament: "NT",
      text: "Al ser justificados por la fe, tenemos paz con Dios por Jesus el Cristo.",
      note: "Parafrasis de estudio.",
      tokens: [
        { word: "justificados", strong: "G1344" },
        { word: "fe", strong: "G4102" },
        { word: "paz", strong: "G1515" },
        { word: "Dios", strong: "G2316" },
        { word: "Jesus", strong: "G2424" },
        { word: "Cristo", strong: "G5547" },
      ],
    },
    {
      id: "galatas-5-22",
      ref: "Galatas 5:22",
      book: "Galatas",
      testament: "NT",
      text: "El fruto del Espiritu se ve como amor, gozo y paz.",
      note: "Parafrasis de estudio.",
      tokens: [
        { word: "Espiritu", strong: "G4151" },
        { word: "amor", strong: "G26" },
        { word: "gozo", strong: "G5479" },
        { word: "paz", strong: "G1515" },
      ],
    },
    {
      id: "hechos-2-42",
      ref: "Hechos 2:42",
      book: "Hechos",
      testament: "NT",
      text: "La comunidad perseveraba en la ensenanza, la comunion, el partir el pan y las oraciones.",
      note: "Parafrasis de estudio.",
      tokens: [
        { word: "comunidad", strong: "G1577" },
        { word: "ensenanza", strong: "G1322" },
        { word: "comunion", strong: "G2842" },
        { word: "oraciones", strong: "G4335" },
      ],
    },
  ],
};

const sabbathSchool = {
  source:
    "Adult Bible Study Guide, Lesson 8, May 16-22, 2026. The Church of Peace mirror: lesson 8, Having Faith.",
  title: "Leccion 8: Tener fe",
  weekRange: "16-22 mayo 2026",
  memoryRef: "Hebreos 11:1",
  memoryText:
    "La fe muestra la realidad de lo que esperamos; es evidencia de lo que no vemos.",
  memoryStrong: ["G4102", "G5287", "G1680", "G1650", "G991", "G4229"],
  egwFocus: {
    reference: "Elena G. de White, Primeros Escritos, p. 72",
    quote: "No debemos buscar que nuestros corazones se llenen de emoción antes de creer que Dios nos oye; el sentimiento no debe ser nuestro criterio, porque las emociones son tan variables como las nubes. Debemos tener una base sólida para nuestra fe. La fe no es el sentimiento; la fe no es la vista. Es descansar en las promesas de Dios, sabiendo que Él es fiel.",
    note: "La cita conecta directamente con el énfasis del martes: la fe se apoya en la promesa de Dios, no en la sensación del momento.",
    link: "https://m.egwwritings.org/es/book/132.327"
  },
  days: [
    {
      date: "2026-05-16",
      label: "Sabado",
      title: "Tener fe",
      reading: "Hebreos 11:1",
      summary:
        "La semana abre mostrando la fe como confianza en realidades prometidas por Dios. El texto invita a estudiar la fe como fundamento, no como simple emocion religiosa.",
      prompts: ["G4102", "G5287", "G1680"],
    },
    {
      date: "2026-05-17",
      label: "Domingo",
      title: "Nosotros vivimos por fe",
      reading: "Romanos 1:17; 2 Corintios 5:7",
      summary:
        "La vida cristiana camina mirando las promesas de Dios mas que las apariencias inmediatas. La fe sostiene decisiones practicas cuando aun no se ve el resultado.",
      prompts: ["G4102", "G4100", "H539"],
    },
    {
      date: "2026-05-18",
      label: "Lunes",
      title: "Si puedes creer",
      reading: "Marcos 9:14-29",
      summary:
        "El relato del padre que pide ayuda muestra una fe honesta: cree, pero tambien reconoce su necesidad. La fe crece cuando lleva su debilidad a Cristo.",
      prompts: ["G4100", "G4982", "G5485"],
    },
    {
      date: "2026-05-19",
      label: "Martes",
      title: "La fe no es un sentimiento",
      reading: "Hebreos 11:1; Early Writings, p. 72",
      summary:
        "La leccion distingue fe de emocion. La confianza biblica puede permanecer firme cuando el animo cambia, porque descansa en la Palabra y el caracter de Dios.",
      prompts: ["G4102", "G1650", "G991", "G3056"],
    },
    {
      date: "2026-05-20",
      label: "Miercoles",
      title: "Ejercitar la fe",
      reading: "Santiago 2:17-18; Hebreos 11",
      summary:
        "La fe se fortalece al practicarse. No se trata de presumir fuerza espiritual, sino de responder a Dios con obediencia concreta en lo cotidiano.",
      prompts: ["G4102", "H8085", "G25"],
    },
    {
      date: "2026-05-21",
      label: "Jueves",
      title: "Fe y obediencia",
      reading: "Hebreos 11:8; Genesis 12:1-4",
      summary:
        "La fe de Abraham muestra confianza que se mueve. Creer a Dios produce pasos reales aunque el mapa completo todavia no este visible.",
      prompts: ["H539", "H8085", "G4100"],
    },
    {
      date: "2026-05-22",
      label: "Viernes",
      title: "Para estudiar y meditar",
      reading: "Hebreos 11; Ellen G. White, Early Writings, p. 72",
      summary:
        "La semana cierra llamando a una fe perseverante: confianza que mira a Cristo, recuerda sus promesas y elige caminar con Dios aun antes de ver.",
      prompts: ["G4102", "G5547", "G1680"],
    },
  ],
};

const egwThemes = [
  {
    keys: ["fe", "confianza", "creer", "evidencia", "realidad", "ver"],
    reference: "Elena G. de White, Primeros Escritos, p. 72",
    quote: "La fe no es el sentimiento. 'La fe es la sustancia de las cosas que se esperan, la demostración de las cosas que no se ven'. [...] La fe no es el sentimiento; la fe no es la vista. Nos corresponde a nosotros ejercer fe. Debemos creer a Dios porque Él lo ha dicho.",
    note: "Relaciona esta palabra con una confianza que se aferra a la promesa de Dios.",
    link: "https://m.egwwritings.org/es/book/132.327"
  },
  {
    keys: ["oracion", "dependencia"],
    reference: "Elena G. de White, El Camino a Cristo, p. 93",
    quote: "Orar es el acto de abrir nuestro corazón a Dios como a un amigo. No es que se necesite esto para que Dios sepa lo que somos, sino a fin de capacitarnos para recibirle. La oración no baja a Dios hacia nosotros, sino que nos eleva a Él.",
    note: "Usa esta referencia cuando la palabra apunte a comunion y dependencia.",
    link: "https://m.egwwritings.org/es/book/146.438"
  },
  {
    keys: ["palabra", "ensenanza", "ley", "instruccion", "mensaje"],
    reference: "Elena G. de White, Palabras de Vida del Gran Maestro, p. 24",
    quote: "La palabra de Dios es la semilla. Cada semilla tiene en sí misma un principio germinativo. En ella está encerrada la vida de la planta. Así hay vida en la palabra de Dios. Cristo dice: 'Las palabras que yo os he hablado son espíritu y son vida'.",
    note: "Conecta el termino con Escritura que produce vida y fruto.",
    link: "https://m.egwwritings.org/es/book/165.114"
  },
  {
    keys: ["cristo", "jesus", "hijo", "salvacion", "salvar", "gracia"],
    reference: "Elena G. de White, El Camino a Cristo, p. 21",
    quote: "Cristo es la escalera que vio Jacob, cuya base descansaba en la tierra y cuya cima llegaba al cielo, hasta la misma presencia de Dios. Si esa escalera no hubiera llegado a la tierra y le hubiera faltado un solo peldaño, nos habríamos perdido.",
    note: "Relaciona la palabra con Cristo como centro de la salvacion.",
    link: "https://m.egwwritings.org/es/book/146.68"
  },
  {
    keys: ["amor", "misericordia", "pacto", "bondad"],
    reference: "Elena G. de White, El Deseado de Todas las Gentes, p. 11",
    quote: "La ley del amor es el fundamento del gobierno de Dios en los cielos y en la tierra. Dios es amor... Su naturaleza, su ley, son amor. Así ha sido siempre; así será para siempre.",
    note: "Lee el termino dentro del caracter amoroso de Dios.",
    link: "https://m.egwwritings.org/es/book/125.17"
  },
  {
    keys: ["paz", "gozo", "espiritu", "vida", "eterno"],
    reference: "Elena G. de White, El Deseado de Todas las Gentes, p. 301",
    quote: "En el corazón de Cristo, donde reinaba perfecta armonía con Dios, había perfecta paz. Nunca se dejaba eludir por los aplausos ni deprimir por la censura o el chasco.",
    note: "Ayuda a ver paz y vida como fruto de permanecer en Cristo.",
    link: "https://m.egwwritings.org/es/book/125.1384"
  },
  {
    keys: ["iglesia", "comunion", "comunidad"],
    reference: "Elena G. de White, Palabras de Vida del Gran Maestro, p. 47",
    quote: "Cristo espera con un deseo anhelante la manifestación de sí mismo en su iglesia. Cuando el carácter de Cristo sea perfectamente reproducido en su pueblo, entonces vendrá él a reclamarlos como suyos.",
    note: "Conecta la palabra con una comunidad que revela el caracter de Cristo.",
    link: "https://m.egwwritings.org/es/book/165.318"
  },
  {
    keys: ["justicia", "justificar", "rey", "senor", "Dios", "YHWH"],
    reference: "Elena G. de White, Patriarcas y Profetas, p. 12",
    quote: "Puesto que la ley del amor es el fundamento del gobierno de Dios, la felicidad de todos los seres inteligentes depende de su perfecto acuerdo con sus grandes principios de justicia.",
    note: "Usa esta referencia para gobierno, justicia y caracter de Dios.",
    link: "https://m.egwwritings.org/es/book/167.35"
  },
  {
    keys: ["crear", "creacion", "cielos", "tierra", "principio", "bueno"],
    reference: "Elena G. de White, Patriarcas y Profetas, p. 24",
    quote: "La tierra salió de las manos de su Hacedor en forma sumamente hermosa. Había montañas, colinas y llanuras, entrelazadas con majestuosos ríos y hermosos lagos.",
    note: "Relaciona la palabra con la creacion como obra buena de Dios.",
    link: "https://m.egwwritings.org/es/book/167.92"
  },
];

const state = {
  activeTab: "explorar",
  mode: "beginner",
  query: "",
  language: "all",
  testament: "all",
  selectedId: "G26",
  dialogMode: "import",
  quizIndex: 0,
  revealQuiz: false,
  compare: [],
  data: loadJson(STORAGE_KEYS.data, clone(seedData)),
  favorites: loadJson(STORAGE_KEYS.favorites, { entries: ["G26", "H7965"], verses: [] }),
  notes: loadJson(STORAGE_KEYS.notes, {}),
};

const refs = {};

document.addEventListener("DOMContentLoaded", () => {
  refs.screen = document.querySelector("#screen");
  refs.search = document.querySelector("#globalSearch");
  refs.language = document.querySelector("#languageFilter");
  refs.testament = document.querySelector("#testamentFilter");
  refs.stats = document.querySelector("#stats");
  refs.dialog = document.querySelector("#dataDialog");
  refs.dialogTitle = document.querySelector("#dialogTitle");
  refs.dialogEyebrow = document.querySelector("#dialogEyebrow");
  refs.dataTextarea = document.querySelector("#dataTextarea");
  refs.dialogPrimary = document.querySelector("#dialogPrimary");
  refs.dialogMessage = document.querySelector("#dialogMessage");

  refs.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    const firstMatch = filteredEntries()[0];
    if (state.query.trim() && firstMatch) {
      state.selectedId = firstMatch.id;
    }
    render();
  });

  refs.language.addEventListener("change", (event) => {
    state.language = event.target.value;
    render();
  });

  refs.testament.addEventListener("change", (event) => {
    state.testament = event.target.value;
    render();
  });

  refs.dialogPrimary.addEventListener("click", applyDialogAction);

  document.addEventListener("input", (event) => {
    const noteTarget = event.target.closest("[data-note-for]");
    if (!noteTarget) return;
    state.notes[noteTarget.dataset.noteFor] = noteTarget.value;
    saveJson(STORAGE_KEYS.notes, state.notes);
  });

  document.addEventListener("click", handleAction);
  sanitizeStoredData();
  render();
});

function handleAction(event) {
  const control = event.target.closest("[data-action]");
  if (!control) return;

  const action = control.dataset.action;
  if (action !== "select-entry") {
    event.preventDefault();
  }

  if (action === "go-tab") {
    state.activeTab = control.dataset.tab;
    state.revealQuiz = false;
  }

  if (action === "clear-search") {
    state.query = "";
    refs.search.value = "";
  }

  if (action === "set-mode") {
    state.mode = control.dataset.mode;
  }

  if (action === "select-entry") {
    const id = control.dataset.id;
    if (findEntry(id)) {
      state.selectedId = id;
      state.activeTab = "explorar";
    }
  }

  if (action === "toggle-entry-favorite") {
    toggleInList(state.favorites.entries, control.dataset.id);
    saveJson(STORAGE_KEYS.favorites, state.favorites);
  }

  if (action === "toggle-verse-favorite") {
    toggleInList(state.favorites.verses, control.dataset.id);
    saveJson(STORAGE_KEYS.favorites, state.favorites);
  }

  if (action === "add-compare") {
    addCompare(control.dataset.id);
  }

  if (action === "remove-compare") {
    state.compare = state.compare.filter((id) => id !== control.dataset.id);
  }

  if (action === "clear-compare") {
    state.compare = [];
  }

  if (action === "next-flash") {
    state.quizIndex += 1;
    state.revealQuiz = false;
  }

  if (action === "reveal-flash") {
    state.revealQuiz = !state.revealQuiz;
  }

  if (action === "generate-school-image") {
    drawSchoolShareCard(true);
    return;
  }

  if (action === "download-school-image") {
    downloadSchoolImage();
    return;
  }

  if (action === "share-school-image") {
    shareSchoolImage();
    return;
  }

  if (action === "open-import") {
    openDataDialog("import");
    return;
  }

  if (action === "open-export") {
    openDataDialog("export");
    return;
  }

  if (action === "reset-data") {
    state.data = clone(seedData);
    state.selectedId = "G26";
    saveJson(STORAGE_KEYS.data, state.data);
    refs.dataTextarea.value = JSON.stringify(state.data, null, 2);
    refs.dialogMessage.textContent = "La muestra inicial fue restaurada.";
  }

  render();
}

function render() {
  renderStats();
  syncControls();

  if (state.activeTab === "lexico") {
    refs.screen.innerHTML = renderLexicon();
  } else if (state.activeTab === "versiculos") {
    refs.screen.innerHTML = renderVersesScreen();
  } else if (state.activeTab === "escuela") {
    refs.screen.innerHTML = renderSchool();
  } else if (state.activeTab === "guardados") {
    refs.screen.innerHTML = renderSaved();
  } else if (state.activeTab === "aprender") {
    refs.screen.innerHTML = renderLearn();
  } else {
    refs.screen.innerHTML = renderExplore();
  }

  syncIcons();
  if (state.activeTab === "escuela") {
    requestAnimationFrame(() => drawSchoolShareCard());
  }
}

function renderExplore() {
  const entries = filteredEntries().slice(0, state.query ? 10 : 8);
  const verses = filteredVerses().slice(0, state.query ? 6 : 4);
  const selected = findEntry(state.selectedId) || entries[0] || state.data.entries[0];

  return `
    <div class="screen-grid">
      <div class="screen-stack">
        <section class="module">
          <div class="module-head">
            <div>
              <p class="eyebrow">${state.query ? "Resultados" : "Palabras para empezar"}</p>
              <h2>${state.query ? `${entries.length} fichas cercanas` : "Lexico esencial"}</h2>
            </div>
          </div>
          <div class="module-body">
            ${
              entries.length
                ? `<div class="result-list">${entries
                    .map((entry) => renderEntryCard(entry, selected && entry.id === selected.id))
                    .join("")}</div>`
                : renderMiniEmpty("No encontre una ficha con esos filtros.", "Prueba con amor, fe, shalom, G26 o H3068.")
            }
          </div>
        </section>

        <section class="module">
          <div class="module-head">
            <div>
              <p class="eyebrow">Ejemplos</p>
              <h2>Versiculos relacionados</h2>
            </div>
          </div>
          <div class="module-body">
            ${
              verses.length
                ? `<div class="verse-list">${verses.map((verse) => renderVerseCard(verse, selected && selected.id)).join("")}</div>`
                : renderMiniEmpty("No hay versiculos con esos filtros.", "Importa mas corpus o cambia el termino de busqueda.")
            }
          </div>
        </section>
      </div>

      <div class="screen-stack">
        ${renderEntryDetail(selected)}
      </div>
    </div>
  `;
}

function renderEntryCard(entry, isActive) {
  return `
    <button class="result-card ${isActive ? "active" : ""}" data-action="select-entry" data-id="${escapeHtml(entry.id)}">
      <span class="row-top">
        <span class="strong-chip ${entry.language === "Hebreo" ? "hebrew" : ""}">${escapeHtml(entry.id)}</span>
        <span class="language-chip">${escapeHtml(entry.language)}</span>
      </span>
      <span class="entry-title">
        <strong>${escapeHtml(entry.lemma)}</strong>
        <span>${escapeHtml(entry.transliteration)} · ${escapeHtml(entry.original)}</span>
      </span>
      <span class="muted">${escapeHtml(entry.short)}</span>
    </button>
  `;
}

function renderEntryDetail(entry) {
  if (!entry) {
    return renderEmpty(
      "Sin ficha seleccionada",
      "Importa un corpus con fichas Strong o cambia los filtros activos."
    );
  }

  const isSaved = state.favorites.entries.includes(entry.id);
  const inCompare = state.compare.includes(entry.id);
  const verses = versesForEntry(entry.id);
  const related = (entry.related || []).map(findEntry).filter(Boolean);
  const simpleMode = state.mode === "beginner";

  return `
    <section class="module">
      <div class="module-body">
        <div class="detail-hero">
          <div class="detail-titleline">
            <div>
              <span class="strong-chip ${entry.language === "Hebreo" ? "hebrew" : ""}">${escapeHtml(entry.id)}</span>
              <div class="original-word" lang="${entry.language === "Hebreo" ? "he" : "el"}">${escapeHtml(entry.original)}</div>
              <h1>${escapeHtml(entry.lemma)}</h1>
              <div class="detail-subtitle">${escapeHtml(entry.transliteration)} · ${escapeHtml(entry.pronunciation)} · ${escapeHtml(entry.language)}</div>
            </div>
            <div class="detail-actions">
              <button class="icon-button" data-action="toggle-entry-favorite" data-id="${escapeHtml(entry.id)}" aria-label="${isSaved ? "Quitar de guardados" : "Guardar ficha"}" title="${isSaved ? "Quitar de guardados" : "Guardar ficha"}">
                <i data-lucide="${isSaved ? "bookmark-check" : "bookmark"}"></i>
              </button>
              <button class="icon-button" data-action="add-compare" data-id="${escapeHtml(entry.id)}" aria-label="${inCompare ? "Ya esta en comparar" : "Comparar"}" title="${inCompare ? "Ya esta en comparar" : "Comparar"}">
                <i data-lucide="${inCompare ? "square-check" : "scale"}"></i>
              </button>
            </div>
          </div>
          <p class="definition">${escapeHtml(entry.definition)}</p>
          <div class="pill-group">${(entry.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
        </div>

        <div class="insight-grid">
          <div class="insight green">
            <span>${simpleMode ? "Idea clara" : "Morfologia"}</span>
            <p>${escapeHtml(simpleMode ? entry.beginner : entry.morphology)}</p>
          </div>
          <div class="insight blue">
            <span>${simpleMode ? "Uso" : "Nota tecnica"}</span>
            <p>${escapeHtml(simpleMode ? entry.short : entry.advanced)}</p>
          </div>
          <div class="insight warm">
            <span>Cuidado</span>
            <p>${escapeHtml(entry.caution)}</p>
          </div>
        </div>

        ${renderEgwBox(entry)}
      </div>
    </section>

    <section class="module">
      <div class="module-head">
        <div>
          <p class="eyebrow">Contexto</p>
          <h2>${verses.length} ejemplos en el corpus</h2>
        </div>
      </div>
      <div class="module-body">
        ${
          verses.length
            ? `<div class="verse-list">${verses.map((verse) => renderVerseCard(verse, entry.id)).join("")}</div>`
            : renderMiniEmpty("Aun no hay versiculos para esta ficha.", "Puedes importarlos desde el panel de datos.")
        }
      </div>
    </section>

    <section class="module">
      <div class="module-head">
        <div>
          <p class="eyebrow">Relaciones</p>
          <h2>Palabras cercanas</h2>
        </div>
      </div>
      <div class="module-body">
        ${
          related.length
            ? `<div class="result-list">${related.map((item) => renderEntryCard(item, false)).join("")}</div>`
            : renderMiniEmpty("Sin relaciones cargadas.", "Agrega ids relacionados en el JSON de la ficha.")
        }
      </div>
    </section>

    <section class="module">
      <div class="module-head">
        <div>
          <p class="eyebrow">Notas</p>
          <h2>${escapeHtml(entry.id)} · ${escapeHtml(entry.lemma)}</h2>
        </div>
      </div>
      <div class="module-body">
        <textarea class="note-input" data-note-for="${escapeHtml(entry.id)}" placeholder="Escribe una observacion personal, una pregunta o una conexion con otro pasaje...">${escapeHtml(state.notes[entry.id] || "")}</textarea>
      </div>
    </section>
  `;
}

function renderVersesScreen() {
  const verses = filteredVerses();
  return `
    <section class="module">
      <div class="module-head">
        <div>
          <p class="eyebrow">Corpus</p>
          <h1>Versiculos con numeros Strong</h1>
        </div>
        <span class="mini-chip">${verses.length} visibles</span>
      </div>
      <div class="module-body">
        ${
          verses.length
            ? `<div class="verse-list">${verses.map((verse) => renderVerseCard(verse)).join("")}</div>`
            : renderEmpty("Sin versiculos visibles", "Cambia filtros o importa mas textos con tokens Strong.")
        }
      </div>
    </section>
  `;
}

function renderVerseCard(verse, highlightStrong = "") {
  const isSaved = state.favorites.verses.includes(verse.id);
  const tokenHtml = (verse.tokens || [])
    .map((token) => {
      const exists = Boolean(findEntry(token.strong));
      return `
        <button class="token ${token.strong === highlightStrong ? "active" : ""}" data-action="select-entry" data-id="${escapeHtml(token.strong)}" ${exists ? "" : "disabled"}>
          ${escapeHtml(token.word)}
          <small>${escapeHtml(token.strong)}</small>
        </button>
      `;
    })
    .join("");

  return `
    <article class="verse-card">
      <div class="verse-head">
        <span class="verse-ref">${escapeHtml(verse.ref)}</span>
        <span class="row-top">
          <span class="language-chip">${escapeHtml(verse.testament)}</span>
          <button class="icon-button ghost" data-action="toggle-verse-favorite" data-id="${escapeHtml(verse.id)}" aria-label="${isSaved ? "Quitar versiculo" : "Guardar versiculo"}" title="${isSaved ? "Quitar versiculo" : "Guardar versiculo"}">
            <i data-lucide="${isSaved ? "bookmark-check" : "bookmark"}"></i>
          </button>
        </span>
      </div>
      <p class="verse-text">${escapeHtml(verse.text)}</p>
      <div class="token-line">${tokenHtml}</div>
      <p class="muted">${escapeHtml(verse.note || "")}</p>
    </article>
  `;
}

function renderEgwBox(entry) {
  const egw = getEgwForEntry(entry);
  return `
    <div class="egw-box">
      <div class="egw-head">
        <span>
          <strong>Elena G. de White</strong>
          <small>${escapeHtml(egw.reference)}</small>
        </span>
        ${
          egw.link
            ? `<a href="${escapeHtml(egw.link)}" target="_blank" rel="noopener noreferrer" class="icon-button ghost" style="min-height:24px;width:24px;height:24px;padding:0;" title="Leer párrafo completo">
                 <i data-lucide="external-link" style="width:14px;height:14px"></i>
               </a>`
            : `<i data-lucide="quote"></i>`
        }
      </div>
      <p class="egw-quote">"${escapeHtml(egw.quote)}"</p>
      <p class="muted">${escapeHtml(egw.note)}</p>
    </div>
  `;
}

function getEgwForEntry(entry) {
  const haystack = normalize(
    [
      entry.id,
      entry.lemma,
      entry.short,
      entry.definition,
      ...(entry.tags || []),
    ].join(" ")
  );

  return (
    egwThemes.find((theme) => theme.keys.some((key) => haystack.includes(normalize(key)))) ||
    {
      reference: "Ellen G. White, Steps to Christ, p. 70",
      quote: "Consecrate yourself to God in the morning.",
      note:
        "Referencia devocional base para conectar la palabra con una respuesta practica diaria.",
    }
  );
}

function renderLexicon() {
  const entries = filteredEntries({ includeStarterBias: false });
  const greek = entries.filter((entry) => entry.language === "Griego").length;
  const hebrew = entries.filter((entry) => entry.language === "Hebreo").length;

  return `
    <section class="module">
      <div class="module-head">
        <div>
          <p class="eyebrow">Diccionario</p>
          <h1>Lexico Strong</h1>
        </div>
        <div class="detail-actions">
          <span class="mini-chip">${greek} griegas</span>
          <span class="mini-chip">${hebrew} hebreas</span>
          <button class="text-button" data-action="open-import">
            <i data-lucide="upload"></i>
            Importar
          </button>
        </div>
      </div>
      <div class="module-body">
        ${
          entries.length
            ? `<div class="lexicon-list">${entries.map(renderLexiconRow).join("")}</div>`
            : renderEmpty("No hay fichas visibles", "Cambia la busqueda, cambia el idioma o restaura la muestra inicial.")
        }
      </div>
    </section>
  `;
}

function renderLexiconRow(entry) {
  return `
    <button class="lexicon-row ${entry.id === state.selectedId ? "active" : ""}" data-action="select-entry" data-id="${escapeHtml(entry.id)}">
      <span class="strong-chip ${entry.language === "Hebreo" ? "hebrew" : ""}">${escapeHtml(entry.id)}</span>
      <span class="lexicon-main">
        <strong>${escapeHtml(entry.lemma)} · ${escapeHtml(entry.original)}</strong>
        <span>${escapeHtml(entry.transliteration)} · ${escapeHtml(entry.short)}</span>
      </span>
      <span class="language-chip">${escapeHtml(entry.language)}</span>
    </button>
  `;
}

function renderSchool() {
  const today = getTodaySchoolDay();
  const suggested = getSchoolSuggestedEntries(today);

  return `
    <div class="screen-grid school-grid">
      <section class="module school-main">
        <div class="module-head">
          <div>
            <p class="eyebrow">Escuela Sabatica · ${escapeHtml(sabbathSchool.weekRange)}</p>
            <h1>${escapeHtml(today.label)}: ${escapeHtml(today.title)}</h1>
          </div>
          <span class="mini-chip">${escapeHtml(sabbathSchool.memoryRef)}</span>
        </div>
        <div class="module-body">
          <div class="school-hero">
            <div>
              <span class="tag">${escapeHtml(sabbathSchool.title)}</span>
              <p class="memory-text">${escapeHtml(sabbathSchool.memoryText)}</p>
              <p class="muted">Lectura sugerida: ${escapeHtml(today.reading)}</p>
            </div>
            <div class="egw-mini">
              <div class="row-top">
                <strong>${escapeHtml(sabbathSchool.egwFocus.reference)}</strong>
                ${
                  sabbathSchool.egwFocus.link
                    ? `<a href="${escapeHtml(sabbathSchool.egwFocus.link)}" target="_blank" rel="noopener noreferrer" class="icon-button ghost" style="min-height:24px;width:24px;height:24px;padding:0;" title="Leer párrafo completo">
                         <i data-lucide="external-link" style="width:14px;height:14px"></i>
                       </a>`
                    : ``
                }
              </div>
              <p>"${escapeHtml(sabbathSchool.egwFocus.quote)}"</p>
              <span>${escapeHtml(sabbathSchool.egwFocus.note)}</span>
            </div>
          </div>

          <div class="daily-summary">
            <span>Resumen del dia</span>
            <p>${escapeHtml(today.summary)}</p>
          </div>
          <p class="school-source">${escapeHtml(sabbathSchool.source)}</p>

          <div class="toolbar-line">
            <div>
              <p class="eyebrow">Palabras sugeridas</p>
              <h2>Del texto de memoria y la leccion de hoy</h2>
            </div>
            <button class="text-button" data-action="select-entry" data-id="${escapeHtml(suggested[0]?.id || "G4102")}">
              <i data-lucide="book-open-check"></i>
              Abrir primera ficha
            </button>
          </div>

          <div class="school-word-grid">
            ${suggested.map(renderSchoolWord).join("")}
          </div>
        </div>
      </section>

      <div class="screen-stack">
        <section class="module">
          <div class="module-head">
            <div>
              <p class="eyebrow">Compartir</p>
              <h2>Imagen devocional</h2>
            </div>
          </div>
          <div class="module-body">
            <div class="share-card-frame">
              <canvas id="shareCanvas" width="1080" height="1350" aria-label="Imagen generada para compartir"></canvas>
            </div>
            <div class="share-actions">
              <button class="primary-button" data-action="generate-school-image">
                <i data-lucide="sparkles"></i>
                Generar imagen
              </button>
              <button class="secondary-button" data-action="download-school-image">
                <i data-lucide="download"></i>
                Descargar PNG
              </button>
              <button class="secondary-button" data-action="share-school-image">
                <i data-lucide="share-2"></i>
                Compartir
              </button>
            </div>
            <p class="muted">La imagen se crea en tu navegador a partir del resumen diario y se actualiza automaticamente con la fecha.</p>
          </div>
        </section>

        <section class="module">
          <div class="module-head">
            <div>
              <p class="eyebrow">Semana</p>
              <h2>Ruta diaria</h2>
            </div>
          </div>
          <div class="module-body">
            <div class="lesson-list">
              ${sabbathSchool.days.map((day) => renderSchoolDayRow(day, day.date === today.date)).join("")}
            </div>
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderSchoolWord(entry) {
  const egw = getEgwForEntry(entry);
  return `
    <button class="school-word-card" data-action="select-entry" data-id="${escapeHtml(entry.id)}">
      <span class="row-top">
        <span class="strong-chip ${entry.language === "Hebreo" ? "hebrew" : ""}">${escapeHtml(entry.id)}</span>
        <span class="language-chip">${escapeHtml(entry.language)}</span>
      </span>
      <strong>${escapeHtml(entry.lemma)}</strong>
      <span>${escapeHtml(entry.transliteration)} · ${escapeHtml(entry.original)}</span>
      <p>${escapeHtml(entry.beginner)}</p>
      <small>EGW: ${escapeHtml(egw.reference)}</small>
    </button>
  `;
}

function renderSchoolDayRow(day, isToday) {
  return `
    <article class="lesson-row ${isToday ? "active" : ""}">
      <span class="row-top">
        <strong>${escapeHtml(day.label)} · ${escapeHtml(day.title)}</strong>
        ${isToday ? '<span class="mini-chip">Hoy</span>' : ""}
      </span>
      <span class="muted">${escapeHtml(day.reading)}</span>
    </article>
  `;
}

function renderSaved() {
  const entries = state.favorites.entries.map(findEntry).filter(Boolean);
  const verses = state.favorites.verses.map(findVerse).filter(Boolean);

  return `
    <div class="screen-stack">
      <section class="module">
        <div class="module-head">
          <div>
            <p class="eyebrow">Biblioteca</p>
            <h1>Guardados</h1>
          </div>
          <span class="mini-chip">${entries.length + verses.length} elementos</span>
        </div>
        <div class="module-body">
          ${
            entries.length || verses.length
              ? `
                <div class="saved-list">
                  ${entries.map(renderSavedEntry).join("")}
                  ${verses.map(renderSavedVerse).join("")}
                </div>
              `
              : renderEmpty("Nada guardado todavia", "Guarda fichas o versiculos mientras estudias para verlos aqui.")
          }
        </div>
      </section>

      <section class="module">
        <div class="module-head">
          <div>
            <p class="eyebrow">Notas activas</p>
            <h2>Apuntes por ficha</h2>
          </div>
        </div>
        <div class="module-body">
          ${renderNotesList()}
        </div>
      </section>
    </div>
  `;
}

function renderSavedEntry(entry) {
  return `
    <div class="saved-row">
      <span class="strong-chip ${entry.language === "Hebreo" ? "hebrew" : ""}">${escapeHtml(entry.id)}</span>
      <span>
        <strong>${escapeHtml(entry.lemma)} · ${escapeHtml(entry.transliteration)}</strong>
        <span>${escapeHtml(entry.short)}</span>
      </span>
      <span class="saved-actions">
        <button class="icon-button ghost" data-action="select-entry" data-id="${escapeHtml(entry.id)}" aria-label="Abrir ficha" title="Abrir ficha">
          <i data-lucide="panel-right-open"></i>
        </button>
        <button class="icon-button ghost" data-action="toggle-entry-favorite" data-id="${escapeHtml(entry.id)}" aria-label="Quitar de guardados" title="Quitar de guardados">
          <i data-lucide="trash-2"></i>
        </button>
      </span>
    </div>
  `;
}

function renderSavedVerse(verse) {
  return `
    <div class="saved-row">
      <span class="language-chip">${escapeHtml(verse.testament)}</span>
      <span>
        <strong>${escapeHtml(verse.ref)}</strong>
        <span>${escapeHtml(verse.text)}</span>
      </span>
      <span class="saved-actions">
        <button class="icon-button ghost" data-action="toggle-verse-favorite" data-id="${escapeHtml(verse.id)}" aria-label="Quitar versiculo" title="Quitar versiculo">
          <i data-lucide="trash-2"></i>
        </button>
      </span>
    </div>
  `;
}

function renderNotesList() {
  const notes = Object.entries(state.notes).filter(([, value]) => value.trim());
  if (!notes.length) {
    return renderMiniEmpty("Aun no hay apuntes escritos.", "Abre una ficha y escribe una nota personal.");
  }

  return `
    <div class="saved-list">
      ${notes
        .map(([id, text]) => {
          const entry = findEntry(id);
          return `
            <button class="saved-row" data-action="select-entry" data-id="${escapeHtml(id)}">
              <span class="strong-chip ${entry && entry.language === "Hebreo" ? "hebrew" : ""}">${escapeHtml(id)}</span>
              <span>
                <strong>${escapeHtml(entry ? entry.lemma : "Ficha externa")}</strong>
                <span>${escapeHtml(text)}</span>
              </span>
              <i data-lucide="chevron-right"></i>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderLearn() {
  const deck = getDeck();
  const card = deck[state.quizIndex % deck.length];

  return `
    <div class="screen-grid">
      <section class="module">
        <div class="module-head">
          <div>
            <p class="eyebrow">Memoria</p>
            <h1>Tarjetas Strong</h1>
          </div>
          <span class="mini-chip">${deck.length} fichas</span>
        </div>
        <div class="module-body">
          ${renderFlashCard(card)}
        </div>
      </section>

      <div class="screen-stack">
        <section class="module">
          <div class="module-head">
            <div>
              <p class="eyebrow">Comparar</p>
              <h2>Matices cercanos</h2>
            </div>
            <div class="compare-actions">
              <button class="icon-button ghost" data-action="clear-compare" aria-label="Limpiar comparacion" title="Limpiar comparacion">
                <i data-lucide="eraser"></i>
              </button>
            </div>
          </div>
          <div class="module-body">
            ${renderCompare()}
          </div>
        </section>

        <section class="module">
          <div class="module-head">
            <div>
              <p class="eyebrow">Progreso</p>
              <h2>Lectura recomendada</h2>
            </div>
          </div>
          <div class="module-body">
            <div class="lesson-list">
              ${renderLesson("G26", "Amor en griego", "Compara agape con su verbo y con chesed.")}
              ${renderLesson("H7965", "Paz como plenitud", "Lee shalom junto a eirene.")}
              ${renderLesson("G4102", "Fe y confianza", "Une pistis, pisteuo y aman.")}
            </div>
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderFlashCard(card) {
  if (!card) {
    return renderEmpty("Sin tarjetas", "Guarda fichas o restaura la muestra inicial para estudiar.");
  }

  return `
    <div class="flash-card">
      <div class="flash-prompt">
        <span class="strong-chip ${card.language === "Hebreo" ? "hebrew" : ""}">${escapeHtml(card.id)}</span>
        <strong lang="${card.language === "Hebreo" ? "he" : "el"}">${escapeHtml(card.original)}</strong>
        <span class="detail-subtitle">${escapeHtml(card.transliteration)} · ${escapeHtml(card.language)}</span>
      </div>
      <div class="flash-answer ${state.revealQuiz ? "" : "hidden"}">
        <strong>${escapeHtml(card.lemma)}</strong>
        <p>${escapeHtml(card.beginner)}</p>
      </div>
      <div class="flash-actions">
        <button class="primary-button" data-action="reveal-flash">
          <i data-lucide="${state.revealQuiz ? "eye-off" : "eye"}"></i>
          ${state.revealQuiz ? "Ocultar" : "Ver respuesta"}
        </button>
        <button class="secondary-button" data-action="next-flash">
          <i data-lucide="arrow-right"></i>
          Siguiente
        </button>
        <button class="secondary-button" data-action="toggle-entry-favorite" data-id="${escapeHtml(card.id)}">
          <i data-lucide="${state.favorites.entries.includes(card.id) ? "bookmark-check" : "bookmark"}"></i>
          Guardar
        </button>
      </div>
    </div>
  `;
}

function renderCompare() {
  const items = state.compare.map(findEntry).filter(Boolean);
  if (!items.length) {
    return renderMiniEmpty("Agrega fichas desde el icono de balanza.", "Prueba comparar G26 con H2617, o G1515 con H7965.");
  }

  return `
    <div class="compare-grid">
      ${items
        .map(
          (entry) => `
            <article class="compare-card">
              <span class="row-top">
                <span class="strong-chip ${entry.language === "Hebreo" ? "hebrew" : ""}">${escapeHtml(entry.id)}</span>
                <button class="icon-button ghost" data-action="remove-compare" data-id="${escapeHtml(entry.id)}" aria-label="Quitar de comparar" title="Quitar de comparar">
                  <i data-lucide="x"></i>
                </button>
              </span>
              <h3>${escapeHtml(entry.lemma)} · ${escapeHtml(entry.transliteration)}</h3>
              <p>${escapeHtml(entry.short)}</p>
              <p class="muted">${escapeHtml(entry.caution)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderLesson(id, title, body) {
  const entry = findEntry(id);
  return `
    <button class="lesson-row" data-action="select-entry" data-id="${escapeHtml(id)}">
      <span class="row-top">
        <strong>${escapeHtml(title)}</strong>
        <span class="strong-chip ${entry && entry.language === "Hebreo" ? "hebrew" : ""}">${escapeHtml(id)}</span>
      </span>
      <span class="muted">${escapeHtml(body)}</span>
    </button>
  `;
}

function renderStats() {
  const entries = state.data.entries || [];
  const verses = state.data.verses || [];
  const greek = entries.filter((entry) => entry.language === "Griego").length;
  const hebrew = entries.filter((entry) => entry.language === "Hebreo").length;
  const saved = state.favorites.entries.length + state.favorites.verses.length;

  refs.stats.innerHTML = [
    ["Fichas", entries.length],
    ["Versiculos", verses.length],
    ["Griego", greek],
    ["Hebreo", hebrew],
    ["Guardados", saved],
    ["Notas", Object.values(state.notes).filter((note) => note.trim()).length],
  ]
    .map(
      ([label, value]) => `
        <div class="stat">
          <strong>${value}</strong>
          <span>${label}</span>
        </div>
      `
    )
    .join("");
}

function syncControls() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === state.activeTab);
  });
  document.querySelectorAll(".mode-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });
  refs.language.value = state.language;
  refs.testament.value = state.testament;
}

function filteredEntries(options = {}) {
  const includeStarterBias = options.includeStarterBias !== false;
  const query = normalize(state.query);
  return [...(state.data.entries || [])]
    .filter((entry) => state.language === "all" || entry.language === state.language)
    .filter((entry) => !query || entryMatches(entry, query))
    .sort((a, b) => {
      if (query) {
        const scoreA = entryScore(a, query);
        const scoreB = entryScore(b, query);
        if (scoreA !== scoreB) return scoreB - scoreA;
      }
      if (includeStarterBias && a.starter !== b.starter) return a.starter ? -1 : 1;
      return a.id.localeCompare(b.id, "en", { numeric: true });
    });
}

function entryScore(entry, query) {
  const id = normalize(entry.id);
  const lemma = normalize(entry.lemma);
  const transliteration = normalize(entry.transliteration);
  const original = normalize(entry.original);
  const tags = (entry.tags || []).map(normalize);
  const related = (entry.related || []).map(normalize);

  if (id === query) return 100;
  if (lemma === query) return 96;
  if (transliteration === query) return 94;
  if (original === query) return 92;
  if (tags.includes(query)) return 84;
  if (related.includes(query)) return 78;
  if (id.startsWith(query) || lemma.startsWith(query) || transliteration.startsWith(query)) return 72;
  if (normalize(entry.short).includes(query)) return 48;
  if (normalize(entry.definition).includes(query)) return 36;
  if (normalize(entry.beginner).includes(query)) return 28;
  return 12;
}

function filteredVerses() {
  const query = normalize(state.query);
  return [...(state.data.verses || [])]
    .filter((verse) => state.testament === "all" || verse.testament === state.testament)
    .filter((verse) => {
      if (!query) return true;
      const haystack = normalize(
        [
          verse.ref,
          verse.book,
          verse.text,
          verse.note,
          ...(verse.tokens || []).flatMap((token) => [token.word, token.strong, tokenEntryText(token.strong)]),
        ].join(" ")
      );
      return haystack.includes(query);
    });
}

function tokenEntryText(strongId) {
  const entry = findEntry(strongId);
  if (!entry) return "";
  return [
    entry.original,
    entry.transliteration,
    entry.lemma,
    entry.short,
    ...(entry.tags || []),
  ].join(" ");
}

function entryMatches(entry, query) {
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
}

function versesForEntry(entryId) {
  return (state.data.verses || []).filter((verse) =>
    (verse.tokens || []).some((token) => token.strong === entryId)
  );
}

function findEntry(id) {
  return (state.data.entries || []).find((entry) => entry.id === id);
}

function findVerse(id) {
  return (state.data.verses || []).find((verse) => verse.id === id);
}

function getDeck() {
  const saved = state.favorites.entries.map(findEntry).filter(Boolean);
  if (saved.length) return saved;
  return (state.data.entries || []).filter((entry) => entry.starter).slice(0, 10);
}

function getTodaySchoolDay() {
  const todayKey = formatDateKey(new Date());
  return (
    sabbathSchool.days.find((day) => day.date === todayKey) ||
    sabbathSchool.days.find((day) => day.date > todayKey) ||
    sabbathSchool.days[sabbathSchool.days.length - 1]
  );
}

function getSchoolSuggestedEntries(day) {
  const ids = [...new Set([...(day.prompts || []), ...sabbathSchool.memoryStrong])];
  return ids.map(findEntry).filter(Boolean);
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

async function drawSchoolShareCard(forceVariant = false) {
  const canvas = document.querySelector("#shareCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const day = getTodaySchoolDay();
  const width = canvas.width;
  const height = canvas.height;

  const img = new Image();
  img.src = "./clay-bg.png";
  await new Promise((resolve) => {
    img.onload = resolve;
    img.onerror = () => {
      drawGenerativeBackdrop(ctx, width, height, hashText(`${day.date}-${day.title}`));
      resolve();
    };
  });

  if (img.complete && img.naturalWidth > 0) {
    const scale = Math.max(width / img.width, height / img.height);
    const x = (width / 2) - (img.width / 2) * scale;
    const y = (height / 2) - (img.height / 2) * scale;
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  }

  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  roundRect(ctx, 76, 88, width - 152, height - 176, 34);
  ctx.fill();

  ctx.fillStyle = "#0f766e";
  ctx.font = "700 34px Inter, Segoe UI, sans-serif";
  ctx.fillText("Escuela Sabatica", 126, 170);
  ctx.fillStyle = "#66756e";
  ctx.font = "500 28px Inter, Segoe UI, sans-serif";
  ctx.fillText(sabbathSchool.weekRange, 126, 214);

  ctx.fillStyle = "#17211c";
  wrapCanvasText(ctx, `${day.label}: ${day.title}`, 126, 318, 828, 58, "800 52px Inter, Segoe UI, sans-serif");

  ctx.fillStyle = "#0f766e";
  ctx.font = "800 30px Inter, Segoe UI, sans-serif";
  ctx.fillText(sabbathSchool.memoryRef, 126, 510);
  ctx.fillStyle = "#24362d";
  wrapCanvasText(ctx, sabbathSchool.memoryText, 126, 560, 828, 44, "600 36px Georgia, serif");

  ctx.fillStyle = "#fff7ed";
  roundRect(ctx, 126, 760, 828, 190, 22);
  ctx.fill();
  ctx.fillStyle = "#8a4d05";
  ctx.font = "800 24px Inter, Segoe UI, sans-serif";
  ctx.fillText("Resumen del dia", 164, 814);
  ctx.fillStyle = "#25352d";
  wrapCanvasText(ctx, day.summary, 164, 856, 752, 34, "500 28px Inter, Segoe UI, sans-serif");

  ctx.fillStyle = "#eef7f3";
  roundRect(ctx, 126, 1000, 828, 138, 22);
  ctx.fill();
  ctx.fillStyle = "#0f766e";
  ctx.font = "800 24px Inter, Segoe UI, sans-serif";
  ctx.fillText("Palabras Strong sugeridas", 164, 1053);
  ctx.fillStyle = "#17211c";
  ctx.font = "700 30px Inter, Segoe UI, sans-serif";
  const words = getSchoolSuggestedEntries(day)
    .slice(0, 4)
    .map((entry) => `${entry.id} ${entry.lemma}`)
    .join("  ·  ");
  wrapCanvasText(ctx, words, 164, 1096, 752, 34, "700 30px Inter, Segoe UI, sans-serif");

  ctx.fillStyle = "#66756e";
  ctx.font = "500 22px Inter, Segoe UI, sans-serif";
  ctx.fillText("Generado por Claros Strong", 126, 1238);
  ctx.fillText("Elena G. de White: Primeros Escritos, p. 72", 126, 1272);
}

function drawGenerativeBackdrop(ctx, width, height, seed) {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, hsl(seed % 360, 52, 86));
  gradient.addColorStop(0.46, hsl((seed * 3) % 360, 46, 92));
  gradient.addColorStop(1, hsl((seed * 7) % 360, 58, 80));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < 18; i += 1) {
    const local = hashText(`${seed}-${i}`);
    ctx.beginPath();
    ctx.fillStyle = `hsla(${local % 360}, 58%, ${60 + (local % 24)}%, 0.18)`;
    const x = (local * 37) % width;
    const y = (local * 53) % height;
    const radius = 70 + (local % 180);
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function downloadSchoolImage() {
  const canvas = document.querySelector("#shareCanvas");
  if (!canvas) return;
  const day = getTodaySchoolDay();
  const link = document.createElement("a");
  link.download = `escuela-sabatica-${day.date}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

async function shareSchoolImage() {
  const canvas = document.querySelector("#shareCanvas");
  if (!canvas) return;
  const day = getTodaySchoolDay();
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) return;
  const file = new File([blob], `escuela-sabatica-${day.date}.png`, { type: "image/png" });
  const shareData = {
    title: `${day.label}: ${day.title}`,
    text: `${sabbathSchool.memoryRef} - ${sabbathSchool.memoryText}`,
    files: [file],
  };
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share(shareData);
    } catch {
      // Sharing can be cancelled by the user; keep the generated image available.
    }
  } else {
    downloadSchoolImage();
  }
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, font) {
  ctx.font = font;
  const words = String(text).split(/\s+/);
  let line = "";
  let cursorY = y;
  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, cursorY);
      line = word;
      cursorY += lineHeight;
    } else {
      line = testLine;
    }
  });
  if (line) ctx.fillText(line, x, cursorY);
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function hsl(h, s, l) {
  return `hsl(${h} ${s}% ${l}%)`;
}

function hashText(text) {
  return String(text)
    .split("")
    .reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) >>> 0, 7);
}

function addCompare(id) {
  if (!findEntry(id)) return;
  if (state.compare.includes(id)) return;
  state.compare = [...state.compare, id].slice(-2);
}

function toggleInList(list, value) {
  const index = list.indexOf(value);
  if (index >= 0) {
    list.splice(index, 1);
  } else {
    list.push(value);
  }
}

function openDataDialog(mode) {
  state.dialogMode = mode;
  refs.dialogMessage.textContent = "";
  refs.dialogEyebrow.textContent = mode === "import" ? "Entrada JSON" : "Salida JSON";
  refs.dialogTitle.textContent = mode === "import" ? "Importar corpus" : "Exportar corpus";
  refs.dialogPrimary.textContent = mode === "import" ? "Importar" : "Copiar JSON";
  refs.dataTextarea.value =
    mode === "import"
      ? JSON.stringify(
          {
            entries: [
              {
                id: "G0000",
                language: "Griego",
                original: "λέξη",
                transliteration: "lexe",
                pronunciation: "le-xe",
                lemma: "palabra nueva",
                short: "Resumen breve.",
                definition: "Definicion ampliada.",
                beginner: "Explicacion sencilla.",
                advanced: "Nota tecnica.",
                morphology: "sustantivo",
                tags: ["ejemplo"],
                related: ["G3056"],
                caution: "Cuidado interpretativo.",
              },
            ],
            verses: [
              {
                id: "referencia-unica",
                ref: "Libro 1:1",
                book: "Libro",
                testament: "NT",
                text: "Texto de estudio.",
                note: "Fuente o nota.",
                tokens: [{ word: "palabra", strong: "G0000" }],
              },
            ],
          },
          null,
          2
        )
      : JSON.stringify(state.data, null, 2);
  refs.dialog.showModal();
  syncIcons();
}

async function applyDialogAction() {
  if (state.dialogMode === "export") {
    try {
      await navigator.clipboard.writeText(refs.dataTextarea.value);
      refs.dialogMessage.textContent = "JSON copiado al portapapeles.";
    } catch {
      refs.dialogMessage.textContent = "No pude copiarlo automaticamente; el JSON ya esta seleccionado.";
      refs.dataTextarea.select();
    }
    return;
  }

  try {
    const incoming = JSON.parse(refs.dataTextarea.value);
    const normalized = normalizeImport(incoming);
    state.data = mergeData(state.data, normalized);
    sanitizeStoredData();
    saveJson(STORAGE_KEYS.data, state.data);
    refs.dialogMessage.textContent = `Importado: ${normalized.entries.length} fichas y ${normalized.verses.length} versiculos.`;
    render();
  } catch (error) {
    refs.dialogMessage.textContent = `JSON invalido: ${error.message}`;
  }
}

function normalizeImport(incoming) {
  const entries = Array.isArray(incoming) ? incoming : incoming.entries;
  const verses = Array.isArray(incoming.verses) ? incoming.verses : [];
  if (!Array.isArray(entries)) {
    throw new Error("usa un objeto con entries y verses");
  }

  return {
    entries: entries.map((entry) => ({
      id: required(entry.id, "entry.id"),
      language: entry.language === "Hebreo" ? "Hebreo" : "Griego",
      original: fallback(entry.original, ""),
      transliteration: fallback(entry.transliteration, ""),
      pronunciation: fallback(entry.pronunciation, ""),
      lemma: fallback(entry.lemma, entry.id),
      short: fallback(entry.short, ""),
      definition: fallback(entry.definition, entry.short || ""),
      beginner: fallback(entry.beginner, entry.short || ""),
      advanced: fallback(entry.advanced, entry.definition || ""),
      morphology: fallback(entry.morphology, ""),
      tags: Array.isArray(entry.tags) ? entry.tags.map(String) : [],
      related: Array.isArray(entry.related) ? entry.related.map(String) : [],
      caution: fallback(entry.caution, "Lee siempre el contexto inmediato."),
      starter: Boolean(entry.starter),
    })),
    verses: verses.map((verse) => ({
      id: required(verse.id, "verse.id"),
      ref: fallback(verse.ref, verse.id),
      book: fallback(verse.book, ""),
      testament: verse.testament === "AT" ? "AT" : "NT",
      text: fallback(verse.text, ""),
      note: fallback(verse.note, ""),
      tokens: Array.isArray(verse.tokens)
        ? verse.tokens.map((token) => ({
            word: fallback(token.word, ""),
            strong: required(token.strong, "token.strong"),
          }))
        : [],
    })),
  };
}

function mergeData(current, incoming) {
  const entryMap = new Map((current.entries || []).map((entry) => [entry.id, entry]));
  const verseMap = new Map((current.verses || []).map((verse) => [verse.id, verse]));
  incoming.entries.forEach((entry) => entryMap.set(entry.id, entry));
  incoming.verses.forEach((verse) => verseMap.set(verse.id, verse));
  return {
    entries: [...entryMap.values()],
    verses: [...verseMap.values()],
  };
}

function sanitizeStoredData() {
  if (!Array.isArray(state.data.entries) || !Array.isArray(state.data.verses)) {
    state.data = clone(seedData);
  }
  state.data = mergeData(clone(seedData), state.data);
  state.favorites.entries = [...new Set(state.favorites.entries || [])].filter(findEntry);
  state.favorites.verses = [...new Set(state.favorites.verses || [])].filter(findVerse);
  if (!findEntry(state.selectedId)) {
    state.selectedId = state.data.entries[0] ? state.data.entries[0].id : "";
  }
  saveJson(STORAGE_KEYS.data, state.data);
}

function renderEmpty(title, body) {
  return `
    <div class="empty-state">
      <div>
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(body)}</p>
      </div>
    </div>
  `;
}

function renderMiniEmpty(title, body) {
  return `
    <div class="empty-state">
      <div>
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(body)}</p>
      </div>
    </div>
  `;
}

function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function fallback(value, replacement) {
  return value === undefined || value === null || value === "" ? String(replacement || "") : String(value);
}

function required(value, label) {
  const text = String(value || "").trim();
  if (!text) throw new Error(`falta ${label}`);
  return text;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadJson(key, fallbackValue) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallbackValue;
  } catch {
    return fallbackValue;
  }
}

function saveJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // The app still works without persistence if storage is blocked.
  }
}

function syncIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
