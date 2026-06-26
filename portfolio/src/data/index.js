export const films = [
  {
    id: '001', num: 'SCENE 001 · TAKE 01 · ROLL A',
    title: 'Qahwet El Mayteen', arabic: 'قهوة الميتين', subtitle: 'The Coffee of the Dead',
    tags: ['Short Film', 'Graduation'], role: 'Scriptwriter',
    icon: 'fa-scroll',
    image: '/posters/qahwet-poster-new.jpg',
    logline: 'A grieving father keeps a nightly table at a Cairo coffeehouse for a son who stopped coming — and cannot bring himself to stop waiting.',
    desc: 'An original screenplay rooted in Egyptian folklore — a dark, claustrophobic narrative balancing tragedy with black humour, developed for the BUE graduation film.',
    highlights: [
      'Authored the complete original screenplay — dramatic structure, character arcs, thematic throughlines.',
      'Crafted culturally resonant dialogue rooted in Egyptian folklore and lived experience.',
      'Developed the film\'s tonal language: dark subject matter balanced with human warmth and black humour.',
    ],
  },
  {
    id: '002', num: 'SCENE 002 · TAKE 03 · ROLL B',
    title: 'Fisher', arabic: '', subtitle: 'A Documentary on Fisherman Life',
    tags: ['Documentary', 'On-Set'], role: 'Sound Recordist',
    icon: 'fa-microphone',
    image: '/posters/fisher-thumb.jpg',
    video: '/videos/fisherdocumentay.mp4',
    logline: 'The sea gives and takes — a portrait of fishermen and the daily negotiation between livelihood and the water.',
    desc: 'On-set audio capture across demanding coastal locations — delivering broadcast-quality dialogue and ambient sound with real-time monitoring throughout production.',
    highlights: [
      'Operated boom and field recording equipment, capturing broadcast-quality sound.',
      'Real-time level monitoring adapting to changing on-location acoustics.',
      'Coordinated with director and camera team for full audio coverage.',
    ],
  },
  {
    id: '003', num: 'SCENE 003 · TAKE 01 · ROLL A',
    title: 'Placid Disruption', arabic: '', subtitle: 'Placid Essentials — Brand Campaign',
    tags: ['Brand Film', 'Commercial'], role: 'Creative Director',
    image: '/posters/placid-thumb.jpg',
    video: '/videos/placid/reel_v3.mp4',
    icon: 'fa-wand-magic-sparkles',
    logline: 'A scent brand reimagined as cinema — controlled stillness as the ultimate disruption.',
    desc: 'Conceptualized and directed the full creative vision for Placid Essentials\' flagship campaign — visual identity, storytelling concept, and tonal language from brief to final cut.',
    highlights: [
      'Defined "controlled disruption as aesthetic" — translating brand values into cinematic language.',
      'Directed all visual assets ensuring tonal and visual consistency.',
      'Applied filmmaking storytelling techniques to elevate brand identity.',
    ],
  },
]

export const gallery = [
  { image: '/posters/qahwet-poster-new.jpg',    title: 'قهوة الميتين',      tag: 'Short Film · Scriptwriting',         objectPosition: 'center top' },
  { image: '/posters/placid-shot1.jpg',     title: 'Placid Disruption', tag: 'Placid Essentials · Campaign',       objectPosition: 'center center' },
  { image: '/posters/placid-shot2.jpg',     title: 'Creative Direction', tag: 'Placid Essentials · Visual Identity', objectPosition: 'center center' },
  { image: '/posters/fisher-boom.jpg',      title: 'Boom in the Boat',  tag: 'Fisher · Audio Capture',             objectPosition: 'center center' },
  { image: '/posters/placid-thumb.jpg',     title: 'On Set',            tag: 'Placid Essentials · Production',     objectPosition: 'center center' },
  { image: '/posters/placid-shot3.jpg',     title: 'On Set',            tag: 'Placid Essentials · Direction',      objectPosition: 'center center' },
]

export const influences = [
  {
    title: 'Cairo Station', year: '1958', director: 'Youssef Chahine',
    quote: 'The film that proved Egyptian cinema could be brutal, intimate, and operatic all at once.',
    bg: 'linear-gradient(160deg,#1a0800 0%,#0a0400 100%)',
    poster: '/posters/cairo-station.jpg',
    icon: 'fa-train-subway', color: '#b8973a',
  },
  {
    title: 'Parasite', year: '2019', director: 'Bong Joon-ho',
    quote: 'A masterclass in tonal control — dark comedy bleeding into horror without a single false note.',
    bg: 'linear-gradient(160deg,#001a08 0%,#000a04 100%)',
    poster: '/posters/parasite.jpg',
    icon: 'fa-house', color: '#4a9a6a',
  },
  {
    title: 'No Country for Old Men', year: '2007', director: 'Coen Brothers',
    quote: 'What silence can carry. What is left unsaid does more work than any dialogue.',
    bg: 'linear-gradient(160deg,#0f0e00 0%,#050500 100%)',
    poster: '/posters/no-country.jpg',
    icon: 'fa-wind', color: '#9a9a3a',
  },
  {
    title: 'Bicycle Thieves', year: '1948', director: 'Vittorio De Sica',
    quote: 'Proof that the smallest human stories contain the largest human truths.',
    bg: 'linear-gradient(160deg,#08081a 0%,#04040a 100%)',
    poster: '/posters/bicycle-thieves.jpg',
    icon: 'fa-bicycle', color: '#4a6a9a',
  },
  {
    title: 'Stalker', year: '1979', director: 'Andrei Tarkovsky',
    quote: 'Cinema as meditation. Every frame a question the film refuses to answer for you.',
    bg: 'linear-gradient(160deg,#040810 0%,#020408 100%)',
    poster: '/posters/stalker.jpg',
    icon: 'fa-compass', color: '#3a6a8a',
  },
  {
    title: 'The Square', year: '2013', director: 'Jehane Noujaim',
    quote: 'How documentary can be as urgent and poetic as any scripted film. Egypt through unblinking eyes.',
    bg: 'linear-gradient(160deg,#180400 0%,#080200 100%)',
    poster: '/posters/the-square.jpg',
    icon: 'fa-video', color: '#9a4a3a',
  },
]

// Add real testimonials from your collaborators, directors, or clients
export const testimonials = [
  { text: 'Add a quote from a collaborator, director, or client you\'ve worked with.', name: 'Collaborator Name', role: 'Their Role' },
  { text: 'Add a quote from a collaborator, director, or client you\'ve worked with.', name: 'Collaborator Name', role: 'Their Role' },
  { text: 'Add a quote from a collaborator, director, or client you\'ve worked with.', name: 'Collaborator Name', role: 'Their Role' },
]

export const process = [
  {
    num: '01', title: 'The Script', title_ar: 'السيناريو', icon: 'pen',
    desc: 'Every frame begins as a word. Character, conflict, and world are built on the page — where story logic, emotional truth, and visual possibility are tested before a single camera rolls.',
    desc_ar: 'كل لقطة تبدأ بكلمة. الشخصية والصراع والعالم تُبنى على الورق — حيث تُختبر منطق القصة والحقيقة العاطفية والإمكانية البصرية قبل أن تدور الكاميرا.',
  },
  {
    num: '02', title: 'Production', title_ar: 'التصوير', icon: 'camera',
    desc: 'On set, every department decision is a storytelling decision. From sound placement to actor blocking, the director\'s job is to translate the written word into something the camera can feel.',
    desc_ar: 'في موقع التصوير، كل قرار من أي قسم هو قرار سردي. من وضع المايك إلى حركة الممثل، مهمة المخرج هي ترجمة الكلمة المكتوبة إلى شيء تشعر به الكاميرا.',
  },
  {
    num: '03', title: 'The Cut', title_ar: 'المونتاج', icon: 'film',
    desc: 'The final story is found in the edit. Pacing, rhythm, and silence are the tools. What survives the cut is what the film actually says.',
    desc_ar: 'القصة الأخيرة تُكتشف في المونتاج. الإيقاع والصمت والتوقيت هي الأدوات. ما يبقى بعد القطع هو ما يقوله الفيلم فعلاً.',
  },
]

export const skills = [
  { n:'01', name:'Script Writing',     sub:'Structure · Dialogue · Arc' },
  { n:'02', name:'Film Production',    sub:'Pre · Shoot · Post' },
  { n:'03', name:'Sound Recording',    sub:'Field · Boom · Location' },
  { n:'04', name:'Visual Storytelling',sub:'Frame · Light · Composition' },
  { n:'05', name:'Set Collaboration',  sub:'Crew · Communication · Flow' },
  { n:'06', name:'Story Development',  sub:'Concept · Theme · Narrative' },
  { n:'07', name:'Directing',          sub:'Cast · Frame · Emotion' },
]

export const training = [
  { school:'Arab Film School',            program:'Full Filmmaking Diploma',        status:'In Progress', active:true },
  { school:'We Can Film School',          program:'Full Filmmaking Diploma',        status:'Completed',   active:false },
  { school:'We Can Film School',          program:'Filmmaking Level 1',             status:'Completed',   active:false },
  { school:'British University in Egypt', program:'BSc Media & Mass Communication — Filmmaking Track', status:'Graduated', active:false },
]

// Dates inferred from CV — update with exact years if known
export const timeline = [
  { year:'—',   event:'Enrolled at BUE',    event_ar:'التحاق بـ BUE',          desc:'Began BSc in Media & Mass Communication, Filmmaking Track — British University in Egypt.',          desc_ar:'بداية دراسة بكالوريوس الإعلام وصناعة الأفلام في الجامعة البريطانية بمصر.' },
  { year:'—',   event:'Filmmaking Level 1', event_ar:'دبلوم المستوى الأول',    desc:'Completed Filmmaking Level 1 at We Can Film School.',                                              desc_ar:'إتمام دبلوم المستوى الأول في صناعة الأفلام — مدرسة We Can.' },
  { year:'—',   event:'Full Diploma',       event_ar:'دبلوم كامل',             desc:'Completed Full Filmmaking Diploma at We Can Film School.',                                          desc_ar:'إتمام الدبلوم الكامل في صناعة الأفلام — مدرسة We Can.' },
  { year:'—',   event:'Documentary Sound',  event_ar:'تسجيل صوت وثائقي',       desc:'Joined as Sound Recordist on documentary film production.',                                         desc_ar:'الانضمام كمسجل صوت في إنتاج فيلم وثائقي.' },
  { year:'—',   event:'Qahwet El Mayteen',  event_ar:'قهوة الميتين',            desc:'Authored original screenplay for graduation short film — dark Egyptian folklore narrative.',         desc_ar:'كتابة سيناريو فيلم التخرج القصير — قصة مستوحاة من الموروث الشعبي المصري.' },
  { year:'—',   event:'Placid Campaign',    event_ar:'حملة Placid',             desc:'Led full creative direction for Placid Essentials flagship brand campaign.',                        desc_ar:'الإشراف على الإخراج الإبداعي الكامل لحملة Placid Essentials.' },
  { year:'—',   event:'BUE Graduation',     event_ar:'التخرج من BUE',           desc:'Received BSc in Media & Mass Communication — Filmmaking Track.',                                   desc_ar:'التخرج بدرجة البكالوريوس في الإعلام وصناعة الأفلام.' },
  { year:'Now', event:'Arab Film School',   event_ar:'مدرسة الفيلم العربي',     desc:'Full Filmmaking Diploma — currently in progress.',                                                  desc_ar:'الدبلوم الكامل في صناعة الأفلام — جارٍ حالياً.' },
]

export const breakdown = {
  title: 'Qahwet El Mayteen',
  arabic: 'قهوة الميتين',
  subtitle: 'Scene Analysis — The Confrontation',
  excerpt_ar: [
    { type: 'slug',     text: 'داخلي. مكتب الأب — مستمر' },
    { type: 'action',   text: 'يدخل أمير. الخزنة مفتوحة. بداخلها — صورة قديمة له وهو طفل، أمه بجانبه. وتحتها وثيقة مطوية تحمل أختاماً رسمية.' },
    { type: 'action',   text: 'يقرأ العنوان: «أمر عدم التدخل.»' },
    { type: 'action',   text: 'يُغلق الباب الأمامي. يقف أحمد عند المدخل.' },
    { type: 'char',     text: 'أحمد' },
    { type: 'paren',    text: '(ببرود)' },
    { type: 'dialogue', text: 'ماذا تفعل هنا؟ قلت لا أحد يدخل في غيابي.' },
    { type: 'char',     text: 'أمير' },
    { type: 'dialogue', text: 'كيف أخفيت هذا عني؟' },
    { type: 'char',     text: 'أحمد' },
    { type: 'dialogue', text: 'هذا لا يعنيك.' },
    { type: 'char',     text: 'أمير' },
    { type: 'dialogue', text: 'كانت حية. كانت تبحث عني.' },
    { type: 'char',     text: 'أحمد' },
    { type: 'paren',    text: '(لحظة)' },
    { type: 'dialogue', text: 'ماتت. منذ سنتين.' },
    { type: 'char',     text: 'أمير' },
    { type: 'dialogue', text: 'ماتت. ولم تقل شيئاً.' },
    { type: 'action',   text: 'يتجه أمير نحو الباب. يفتحه. يتوقف.' },
    { type: 'char',     text: 'أحمد' },
    { type: 'dialogue', text: 'إذا خرجت من هذا الباب، لا أريد أن أرى وجهك مجدداً.' },
    { type: 'action',   text: 'يخرج. يُغلق الباب بقوة خلفه.' },
  ],
  annotations_ar: [
    {
      anchor: '«أمر عدم التدخل.»',
      note: 'الوثيقة تعمل أكثر من أي سطر حوار في السيناريو. تصل قبل المواجهة، وقبل أي إنكار — مما يعني أن الجمهور يعرف الحقيقة بالفعل حين يحاول أحمد تبريرها. اللغة القانونية مقصودة: تجعل اختيار الأب يبدو مؤسسياً، لا شخصياً فحسب.',
    },
    {
      anchor: 'ماتت. منذ سنتين.',
      note: 'أحمد لا ينكر. لا يعتذر. يكتفي بالإفادة — كحقيقة، كتبرير. الجملة أربع كلمات. في مسودة سابقة كانت اثنتي عشرة. اختزالها إلى هذا غيّر الشخصية بالكامل: هو ليس قاسياً، بل متيقن. وهذا أسوأ.',
    },
    {
      anchor: 'يخرج. يُغلق الباب بقوة خلفه.',
      note: 'المشهد ينتهي بفعل، لا بحوار. كل نسخة من هذه النهاية تضمنت سطراً أخيراً بدت كحكم. الباب أفضل — يتيح للرجلين أن يكونا على حق وخطأ في آنٍ واحد، وهو المكان الوحيد الصادق الذي يمكن أن يهبط فيه مشهد كهذا.',
    },
  ],
  excerpt: [
    { type: 'slug',    text: 'INT. FATHER\'S OFFICE — CONTINUOUS' },
    { type: 'action',  text: 'AMIR enters. The safe is open. Inside — an old photograph of himself as a child, his mother beside him. Beneath it, a folded document bearing official stamps.' },
    { type: 'action',  text: 'He reads the heading: "Non-Intervention Order."' },
    { type: 'action',  text: 'The front door closes. AHMED stands at the entrance.' },
    { type: 'char',    text: 'AHMED' },
    { type: 'paren',   text: '(cold)' },
    { type: 'dialogue',text: 'What are you doing here? I said no one enters when I\'m not home.' },
    { type: 'char',    text: 'AMIR' },
    { type: 'dialogue',text: 'How did you hide this from me?' },
    { type: 'char',    text: 'AHMED' },
    { type: 'dialogue',text: 'That\'s none of your concern.' },
    { type: 'char',    text: 'AMIR' },
    { type: 'dialogue',text: 'She was alive. She was looking for me.' },
    { type: 'char',    text: 'AHMED' },
    { type: 'paren',   text: '(a beat)' },
    { type: 'dialogue',text: 'She died. Two years ago.' },
    { type: 'char',    text: 'AMIR' },
    { type: 'dialogue',text: 'She died. And you said nothing.' },
    { type: 'action',  text: 'Amir moves toward the door. Opens it. Stops.' },
    { type: 'char',    text: 'AHMED' },
    { type: 'dialogue',text: 'If you walk out that door, I don\'t want to see your face again.' },
    { type: 'action',  text: 'He walks out. The door closes hard behind him.' },
  ],
  annotations: [
    {
      anchor: '"Non-Intervention Order."',
      note: 'The document does more work than any line of dialogue in the script. It arrives before the confrontation, before any denial — which means the audience already knows the truth when Ahmed tries to justify it. The legal language is deliberate: it makes the father\'s choice feel institutional, not just personal.',
    },
    {
      anchor: 'She died. Two years ago.',
      note: 'Ahmed doesn\'t deny it. He doesn\'t apologise. He just states it — as fact, as justification. The line is four words. In an earlier draft it was twelve. Cutting it to this changed the entire character: he\'s not cruel, he\'s certain. That\'s worse.',
    },
    {
      anchor: 'He walks out. The door closes hard behind him.',
      note: 'The scene ends on action, not dialogue. Every version of this ending that used a final line of dialogue felt like a verdict. The door is better — it lets both men be right and wrong at the same time, which is the only honest place a scene like this can land.',
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

// Add real screenings, festival submissions, or press coverage below
export const press = [
  {
    venue: 'British University in Egypt',
    type: 'Graduation Screening',
    project: 'Qahwet El Mayteen — قهوة الميتين',
    year: '—',
    note: 'Official graduation short film screening, BUE Faculty of Arts & Sciences, Media & Mass Communication.',
    note_ar: 'عرض الفيلم القصير التخرجي الرسمي، كلية الفنون والعلوم، قسم الإعلام وصناعة الأفلام — الجامعة البريطانية في مصر.',
    icon: 'fa-film',
  },
  {
    venue: 'Placid Essentials',
    type: 'Brand Release',
    project: 'Placid Disruption — Placid Essentials',
    year: '—',
    note: 'Full campaign launched across Placid Essentials brand platforms.',
    note_ar: 'إطلاق الحملة الكاملة عبر منصات علامة Placid Essentials التجارية.',
    icon: 'fa-wand-magic-sparkles',
  },
  {
    venue: 'Rahala Productions',
    type: 'On-Set Credit',
    project: 'The Death of Mozart — dir. Mazen Haggag',
    year: '—',
    note: 'On-set credit as Slate / Clapper on this short film by Mazen Haggag.',
    note_ar: 'اعتماد على موقع التصوير ككلاكيت في هذا الفيلم القصير من إخراج مازن حجاج.',
    icon: 'fa-clapperboard',
    poster: '/posters/death-of-mozart.jpg',
  },
]
