// Sursă unică de adevăr pentru conținutul site-ului comemorativ.
// Editați acest fișier pentru a actualiza textele, datele și citatele.

export interface TimelineEntry {
  /** Anul sau intervalul (ex. „2008–2016"). */
  period: string
  /** Rolul ori titlul. */
  role: string
  /** Detalii suplimentare. */
  detail: string
}

export interface Stat {
  value: string
  label: string
}

export interface Tribute {
  quote: string
  source: string
}

export interface SourceLink {
  label: string
  url: string
}

export interface GalleryItem {
  /** Numele fișierului din folderul public/. */
  src: string
  /** Text alternativ și legendă. */
  caption: string
}

export const profile = {
  honorific: 'Prof. univ. dr. ing.',
  name: 'Cezar Oprișan',
  lifespan: '1955 – 2018',
  role: 'Prorector al Universității Tehnice „Gheorghe Asachi" din Iași',
  subRole: 'Fost decan al Facultății de Mecanică',
  /** Portretul. Înlocuiți fișierul din folderul public/ cu o fotografie reală
   *  și actualizați aici numele fișierului (ex. „portrait.jpg"). */
  portrait: 'portrait.jpg',
  born: '27 aprilie 1955, Tupilați (jud. Neamț), pe malul râului Moldova',
  died: '11 septembrie 2018, Iași',
} as const

export const hero = {
  epitaph:
    'O viață dedicată ingineriei, învățământului și oamenilor — profesor, mentor și conducător de suflet al Universității Tehnice „Gheorghe Asachi" din Iași.',
}

export const biography = {
  heading: 'In memoriam',
  paragraphs: [
    'Prof. univ. dr. ing. Cezar Oprișan s-a născut la 27 aprilie 1955 în satul Tupilați, pe malul râului Moldova. A urmat școala din satul natal, apoi Liceul real „Calistrat Hogaș" din Piatra Neamț (1970–1974), iar între anii 1975 și 1980 cursurile Facultății de Mecanică din Iași, secția Tehnologia Construcțiilor de Mașini — început al unei vieți întregi închinate ingineriei mecanice și învățământului universitar.',
    'După absolvire a lucrat ca inginer tehnolog la Întreprinderea de Țevi din Roman (1980–1982), revenind apoi în mediul academic. În 1982 s-a alăturat Facultății de Mecanică în calitate de asistent, în cadrul Catedrei de Organe de Mașini și Mecanisme, dedicându-se studiului mecanismelor, dinamicii mașinilor și, mai târziu, roboticii. A parcurs apoi toate treptele carierei academice: șef de lucrări (1991), conferențiar (1998) și profesor universitar (2000) în cadrul Departamentului de Teoria Mecanismelor și Robotică.',
    'A fost un specialist de prestigiu, recunoscut în țară și în străinătate pentru activitatea sa didactică strălucită în domeniile mecanismelor, dinamicii mașinilor și, mai cu seamă, al roboticii. A condus lucrările conferințelor internaționale ACME (2014, 2016, 2018) și a fost președinte al filialei Iași a Asociației Române pentru Teoria Mașinilor și Mecanismelor (ARoTMM). Dincolo de realizările științifice, a rămas în amintirea colegilor și a studenților ca un om cald și principial, care a știut întotdeauna să asculte.',
    'Legat sufletește de locurile natale, a rămas un sprijin pentru tinerii din Moldova, vizitând an de an liceele din zonă pentru a-i îndruma către studiile inginerești; comuna Tupilați l-a declarat Cetățean de Onoare. Prof. univ. dr. ing. Cezar Oprișan s-a stins din viață la 11 septembrie 2018, la vârsta de 63 de ani, lăsând în urmă o moștenire de cunoaștere, dăruire și omenie.',
  ],
}

export const careerHeading = 'Repere ale carierei'

export const timeline: TimelineEntry[] = [
  {
    period: '1970 – 1974',
    role: 'Elev',
    detail: 'Liceul real „Calistrat Hogaș" din Piatra Neamț.',
  },
  {
    period: '1975 – 1980',
    role: 'Student',
    detail:
      'Facultatea de Mecanică din Iași, secția Tehnologia Construcțiilor de Mașini.',
  },
  {
    period: '1980 – 1982',
    role: 'Inginer tehnolog',
    detail: 'Întreprinderea de Țevi din Roman.',
  },
  {
    period: '1982',
    role: 'Asistent universitar',
    detail:
      'Facultatea de Mecanică, Catedra de Organe de Mașini și Mecanisme — mecanisme și dinamica mașinilor.',
  },
  {
    period: '1991',
    role: 'Șef de lucrări',
    detail: 'Departamentul de Teoria Mecanismelor și Robotică.',
  },
  {
    period: '1998',
    role: 'Conferențiar universitar',
    detail: 'Departamentul de Teoria Mecanismelor și Robotică.',
  },
  {
    period: '2000',
    role: 'Profesor universitar',
    detail: 'Departamentul de Teoria Mecanismelor și Robotică.',
  },
  {
    period: '2000 – 2008',
    role: 'Prodecan',
    detail: 'Facultatea de Mecanică, Universitatea Tehnică „Gheorghe Asachi" din Iași.',
  },
  {
    period: '2008 – 2016',
    role: 'Decan',
    detail:
      'Facultatea de Mecanică — funcție onorată cu deosebită responsabilitate și dăruire.',
  },
  {
    period: '2016 – 2018',
    role: 'Prorector',
    detail:
      'Responsabil cu relația cu studenții, Universitatea Tehnică „Gheorghe Asachi" din Iași.',
  },
]

export const research = {
  heading: 'Cercetare și învățământ',
  intro:
    'Activitatea sa academică a îmbinat predarea de excepție cu o bogată contribuție științifică în domeniile teoriei mecanismelor, dinamicii mașinilor și roboticii, susținută prin proiecte de cercetare naționale și europene.',
  fields: ['Teoria mecanismelor', 'Dinamica mașinilor', 'Robotică'],
  stats: [
    { value: '9', label: 'manuale și tratate publicate în România și Republica Moldova' },
    { value: '50+', label: 'lucrări în reviste indexate ISI și BDI' },
    { value: '100+', label: 'articole și comunicări la conferințe, în țară și străinătate' },
    { value: '2', label: 'proiecte europene de robotică în cadrul programului FP6' },
    { value: '20+', label: 'granturi de cercetare CNCSIS/MCT și contracte cu mediul industrial' },
    { value: '3', label: 'ediții ale conferinței internaționale ACME prezidate (2014, 2016, 2018)' },
  ] as Stat[],
}

export const gallerySection = {
  heading: 'Chipuri și amintiri',
  intro:
    'Profesorul Cezar Oprișan, alături de studenți și colegi, în amfiteatrele și sălile Facultății de Mecanică din Iași.',
  items: [
    {
      src: 'gallery-1.jpg',
      caption:
        'Cuvânt de deschidere la o festivitate studențească a Facultății de Mecanică.',
    },
    {
      src: 'gallery-2.jpg',
      caption: 'Premierea studenților — cărți și distincții oferite tinerilor ingineri.',
    },
    {
      src: 'gallery-3.jpg',
      caption: 'Moment festiv în cadrul facultății, alături de colegi.',
    },
    {
      src: 'gallery-4.jpg',
      caption: 'În mijlocul studenților, cu zâmbetul discret care i-a rămas în amintire.',
    },
  ] as GalleryItem[],
}

export const tributesSection = {
  heading: 'Mărturii',
  tributes: [
    {
      quote:
        'Un specialist de prestigiu și, deopotrivă, un om cald și principial, care a știut să asculte problemele colegilor și ale studenților.',
      source: 'Comunitatea academică a Universității Tehnice „Gheorghe Asachi" din Iași',
    },
    {
      quote:
        'S-a remarcat printr-o activitate didactică strălucită în domeniile mecanismelor, dinamicii mașinilor și, mai cu seamă, al roboticii, cu numeroase realizări recunoscute în țară și în străinătate.',
      source: 'In memoriam, Facultatea de Mecanică din Iași',
    },
    {
      quote:
        'Plecarea Profesorului Cezar Oprișan lasă un gol imens în inimile noastre. Să-i privim chipul luminos, cu zâmbetul discret, și să-i păstrăm memoria întru veșnicie!',
      source: 'Campusul „Tudor Vladimirescu", Universitatea Tehnică „Gheorghe Asachi" din Iași',
    },
  ] as Tribute[],
}

export const footer = {
  remembrance:
    'Cu recunoștință și prețuire din partea familiei, a colegilor și a studenților.',
  sourcesHeading: 'Surse',
  sources: [
    {
      label: 'In memoriam — Facultatea de Mecanică Iași',
      url: 'https://mec.tuiasi.ro/cezar-oprisan/',
    },
    {
      label: 'La ceas de comemorare — Facultatea de Mecanică Iași',
      url: 'https://mec.tuiasi.ro/profesorul-decanul-si-prorectorul-cezar-oprisan-la-ceas-de-comemorare/',
    },
    {
      label: 'Campusul „Tudor Vladimirescu" — TUIASI',
      url: 'https://campus.tuiasi.ro/profesor-cezar-oprisan/',
    },
    {
      label: 'In memoriam — Universitatea Tehnică „Gheorghe Asachi" din Iași',
      url: 'https://www.tuiasi.ro/noutati/in-memoriam-prof-univ-dr-ing-cezar-oprisan/',
    },
  ] as SourceLink[],
}
