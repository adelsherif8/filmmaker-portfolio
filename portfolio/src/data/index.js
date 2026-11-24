export const films = [
  {
    id: '001', num: 'SCENE 001 · SHORT FILM · 2025',
    title: 'Qahwet El Mayteen', arabic: 'قهوة الميتين', subtitle: 'The Coffee of the Dead · BUE graduation film · May 2025',
    tags: ['Short Film', 'Horror / Drama', 'Egyptian Arabic'], role: 'Scriptwriter',
    icon: 'fa-scroll',
    image: '/posters/qahwet-poster-new.jpg',
    logline: 'When Amir learns his father hid that his mother was alive and searching for him until she died two years ago, he follows an online legend into an abandoned house where, if you enter alone at 11:11, a hot cup of coffee waits and the dead will talk to you.',
    desc: 'Original screenplay in Egyptian dialect, rooted in Egyptian folklore: a family secret, a haunted-house legend and a dark story balanced with black humour. Written for the BUE graduation film; worked with the director, DP and crew from pre-production to delivery.',
    highlights: [
      'Wrote the complete original screenplay: structure, character arcs and tonal balance.',
      'Egyptian-dialect dialogue drawn from lived experience.',
      'Dark subject matter balanced with black humour.',
    ],
  },
  {
    id: '002', num: 'SCENE 002 · DOCUMENTARY · 2024',
    title: 'Netting a Life', arabic: '', subtitle: 'Documentary on fishermen · BUE Documentary Film Module · Nov 2024',
    tags: ['Documentary', 'Location Sound'], role: 'Sound Recordist',
    icon: 'fa-microphone',
    image: '/posters/fisher-thumb.jpg',
    video: '/videos/fisherdocumentay.mp4',
    logline: 'A portrait of fishermen and the daily negotiation between livelihood and the water.',
    desc: 'On-set audio on demanding coastal locations, boom and field recording with real-time level monitoring. Awarded a BUE Certificate of Achievement (Dec 2024) for outstanding contribution as Sound Recordist.',
    highlights: [
      'Boom and field recording on coastal locations.',
      'Real-time level monitoring as conditions changed.',
      'Coordinated with the director and camera team for full coverage.',
    ],
  },
  {
    id: '003', num: 'SCENE 003 · BRAND FILM · 2025',
    title: 'Placid Disruption', arabic: '', subtitle: 'Brand campaign for Placid Essentials · Jan 2025',
    tags: ['Brand Film', 'Commercial'], role: 'Creative Director',
    image: '/posters/placid-thumb.jpg',
    video: '/videos/placid/reel_v3.mp4',
    icon: 'fa-wand-magic-sparkles',
    logline: 'A brand turned into cinema: controlled stillness as the disruption.',
    desc: 'Concept, identity, story and tonal language for the Placid Essentials campaign, from brief to final cut. Defined "controlled disruption as aesthetic" and directed all visual assets for consistency.',
    highlights: [
      'Defined "controlled disruption as aesthetic" for the brand.',
      'Directed all visual assets for tonal and visual consistency.',
      'Applied film storytelling to brand identity.',
    ],
  },
]

// Clean credits list (from the CV)
export const credits = [
  { year: '2025', title: 'The Death of Mozart', role: 'Slate / Clapper', format: 'Short film', company: 'dir. Mazen Haggag · Rahala Productions' },
  { year: '2025', title: 'Qahwet El Mayteen · قهوة الميتين', role: 'Scriptwriter', format: 'Short film (graduation)', company: 'British University in Egypt' },
  { year: '2025', title: 'Placid Disruption', role: 'Creative Director', format: 'Brand film / campaign', company: 'Placid Essentials' },
  { year: '2024', title: 'Netting a Life', role: 'Sound Recordist', format: 'Documentary', company: 'British University in Egypt · Certificate of Achievement' },
]

export const skills = [
  { n:'01', name:'Script Writing',     sub:'Structure · Dialogue · Arc' },
  { n:'02', name:'Film Production',    sub:'Pre · Shoot · Post' },
  { n:'03', name:'Sound Recording',    sub:'Field · Boom · Location' },
  { n:'04', name:'Visual Storytelling',sub:'Frame · Light · Composition' },
  { n:'05', name:'Set Collaboration',  sub:'Crew · Communication · Flow' },
  { n:'06', name:'Story Development',  sub:'Concept · Theme · Narrative' },
  { n:'07', name:'Directing',          sub:'Cast · Frame · Emotion' },
  { n:'08', name:'Creative Direction', sub:'Vision · Identity · Campaign' },
]

export const training = [
  { school:'Arab Film School',            program:'Full Filmmaking Diploma · 2026',        status:'In Progress', active:true },
  { school:'We Can Film School',          program:'Full Filmmaking Diploma · 2025',        status:'Completed',   active:false },
  { school:'We Can Film School',          program:'Filmmaking Level 1 · 2024',             status:'Completed',   active:false },
  { school:'British University in Egypt', program:'BA (Hons) Communication & Mass Media, Filmmaking Track · 2025', status:'Graduated', active:false },
]

export const breakdown = {
  title: 'Qahwet El Mayteen',
  arabic: 'قهوة الميتين',
  subtitle: 'Sample pages · Egyptian dialect · The confrontation',
  excerpt_ar: [
    { type: 'slug',     text: 'داخلي - مكتب والد أمير - مستمر' },
    { type: 'action',   text: 'يدخل أمير إلى المكتب ويلاحظ أن الخزنة مفتوحة. في الداخل، يجد صورة قديمة لنفسه وهو طفل مع والدته بجوارها. يرى أيضًا مجموعة أوراق مطوية تحمل أختامًا رسمية. يفتح أمير الورقة ليقرأ العنوان: «محضر عدم تعرض».' },
    { type: 'action',   text: 'فجأة، يسمع أمير باب المنزل يُغلق. يلتفت ليجد والده، أحمد، يقف عند مدخل المكتب ويراه ممسكًا بالأوراق.' },
    { type: 'char',     text: 'أحمد' },
    { type: 'dialogue', text: 'إنت بتعمل إيه هنا؟ أنا مش قولت محدش يدخل المكتب وأنا مش موجود؟' },
    { type: 'char',     text: 'أمير' },
    { type: 'dialogue', text: 'إنت إزاي مخبي عليا الورق ده؟' },
    { type: 'char',     text: 'أحمد' },
    { type: 'dialogue', text: 'إنت مالكش دعوة بالورق ده!' },
    { type: 'char',     text: 'أمير' },
    { type: 'dialogue', text: 'المحضر ده كان من فترة قريبة... ده معناه إن ماما كانت عايشة وكانت بتدور عليَّ! إنت إزاي متقوليش حاجة زي دي؟' },
    { type: 'char',     text: 'أحمد' },
    { type: 'dialogue', text: 'كنت بدور على مصلحتك... ومصلحتك إن الست دي مكنش ليها مكان في حياتنا.' },
    { type: 'char',     text: 'أمير' },
    { type: 'dialogue', text: 'مصلحتي؟ مصلحتي إنك تحرمني من أمي؟' },
    { type: 'char',     text: 'أمير' },
    { type: 'dialogue', text: 'طب أنا عايز أعرف... هي فين دلوقتي؟' },
    { type: 'char',     text: 'أحمد' },
    { type: 'dialogue', text: 'ماتت... من سنتين.' },
    { type: 'char',     text: 'أمير' },
    { type: 'dialogue', text: 'ماتت؟ وإزاي متقوليش؟' },
    { type: 'char',     text: 'أحمد' },
    { type: 'dialogue', text: 'أنا عملت اللي أنا شايفه صح.' },
    { type: 'action',   text: 'يخطو أمير نحو الباب.' },
    { type: 'char',     text: 'أحمد' },
    { type: 'dialogue', text: 'إنت لو خرجت من الباب ده، أنا مش عايز أشوف وشك تاني!' },
    { type: 'action',   text: 'يفتح أمير الباب ويغادر، ثم يغلقه بعنف خلفه.' },
  ],
  annotations_ar: [
    {
      anchor: 'يدخل أمير إلى المكتب ويلاحظ أن الخزنة مفتوحة. في الداخل، يجد صورة قديمة لنفسه وهو طفل مع والدته بجوارها. يرى أيضًا مجموعة أوراق مطوية تحمل أختامًا رسمية. يفتح أمير الورقة ليقرأ العنوان: «محضر عدم تعرض».',
      note: 'الورقة الرسمية بتوصل قبل المواجهة، فالجمهور بيعرف الحقيقة قبل ما الأب يبدأ يبرر. لغة المحضر بتخلي قرار الأب يبان قانوني وبارد، مش بس شخصي.',
    },
    {
      anchor: 'ماتت... من سنتين.',
      note: 'الأب لا بينكر ولا بيعتذر. جملة قصيرة بتقفل باب الأمل، وهي اللي بتدفع أمير للبيت المهجور في باقي الفيلم.',
    },
    {
      anchor: 'يفتح أمير الباب ويغادر، ثم يغلقه بعنف خلفه.',
      note: 'المشهد بيخلص بفعل مش بكلام. الباب اللي بيتقفل هنا بيقابله باب البيت المهجور اللي هيتفتح بعدين.',
    },
  ],
  excerpt: [
    { type: 'slug',    text: 'INT. AMIR\'S FATHER\'S OFFICE — CONTINUOUS' },
    { type: 'action',  text: 'Amir enters and notices the safe is open. Inside: an old photo of himself as a child, his mother beside him, and folded papers bearing official stamps. He opens one and reads the heading: "Non-Interference Report."' },
    { type: 'action',  text: 'The front door shuts. He turns to find his father, AHMED, in the doorway, watching him hold the papers.' },
    { type: 'char',    text: 'AHMED' },
    { type: 'dialogue',text: 'What are you doing in here? Didn\'t I say nobody comes into the office when I\'m out?' },
    { type: 'char',    text: 'AMIR' },
    { type: 'dialogue',text: 'How could you hide these papers from me?' },
    { type: 'char',    text: 'AHMED' },
    { type: 'dialogue',text: 'Those papers are none of your business!' },
    { type: 'char',    text: 'AMIR' },
    { type: 'dialogue',text: 'This report is recent... that means Mum was alive, and she was looking for me! How could you not tell me?' },
    { type: 'char',    text: 'AHMED' },
    { type: 'dialogue',text: 'I was looking out for you... and what was best for you was that woman having no place in our lives.' },
    { type: 'char',    text: 'AMIR' },
    { type: 'dialogue',text: 'Best for me? Keeping me from my mother was best for me?' },
    { type: 'char',    text: 'AMIR' },
    { type: 'dialogue',text: 'Fine. I want to know... where is she now?' },
    { type: 'char',    text: 'AHMED' },
    { type: 'dialogue',text: 'She died... two years ago.' },
    { type: 'char',    text: 'AMIR' },
    { type: 'dialogue',text: 'She died? And you didn\'t tell me?' },
    { type: 'char',    text: 'AHMED' },
    { type: 'dialogue',text: 'I did what I thought was right.' },
    { type: 'action',  text: 'Amir steps toward the door.' },
    { type: 'char',    text: 'AHMED' },
    { type: 'dialogue',text: 'If you walk out that door, I never want to see your face again!' },
    { type: 'action',  text: 'Amir opens the door, leaves, and slams it behind him.' },
  ],
  annotations: [
    {
      anchor: 'Amir enters and notices the safe is open. Inside: an old photo of himself as a child, his mother beside him, and folded papers bearing official stamps. He opens one and reads the heading: "Non-Interference Report."',
      note: 'The document arrives before the confrontation, so the audience knows the truth before the father starts justifying himself. The legal language makes his choice feel cold and official, not only personal.',
    },
    {
      anchor: 'She died... two years ago.',
      note: 'No denial, no apology. A short line that closes the door on hope, and the reason Amir walks into the abandoned house for the rest of the film.',
    },
    {
      anchor: 'Amir opens the door, leaves, and slams it behind him.',
      note: 'The scene ends on an action, not a line. The door slammed here mirrors the door of the haunted house that opens later.',
    },
  ],
}

export const placidShoot = [
  { kind:'video', src:'/videos/placid/reel_v3.mp4', poster:'/posters/placid-showreel-thumb.jpg', label:'Final Cut · Reel'    },
  { kind:'image', src:'/posters/placid-shot1.jpg',  label:'Scene 01 · Frame'    },
  { kind:'video', src:'/videos/placid/reel1.mp4',   poster:'/posters/placid-thumb.jpg',          label:'Behind the Lens'      },
  { kind:'image', src:'/posters/placid-shot2.jpg',  label:'Scene 02 · Frame'    },
  { kind:'image', src:'/posters/placid-shot3.jpg',  label:'Scene 03 · Frame'    },
  { kind:'image', src:'/posters/placid-thumb.jpg',  label:'Set Reference'       },
]

