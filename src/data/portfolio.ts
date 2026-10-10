/**
 * Central portfolio data — generated from Surya Anish K's resume (Kudupudi_Surya_Anish.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Surya Anish K',
  displayName: 'Surya Anish',
  firstName: 'SURYA',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SURYA ANISH ORIGINAL',
  role: 'Python Full-Stack Developer',
  tagline: ['Python Full-Stack Developer', 'Web Developer', 'Machine Learning Enthusiast'],
  summaryTitle: 'Professional Summary',
  intro:
    'Software Developer skilled in designing, developing, and deploying full-stack applications. Proficient in modern programming languages, frameworks, and database management, with a strong emphasis on writing modular code and building responsive, user-centric architectures. Proven ability to quickly master new technologies, and optimize backend and frontend components for maximum speed and scalability.',
  location: 'Hyderabad, Telangana, India',
  phone: '+91 81210 21005',
  phoneHref: 'tel:+918121021005',
  email: 'Suryakudupudi888@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/surya-anish-6a2458227',
    github: 'https://github.com/Suryaa-k',
    portfolio: 'https://surya-anish.onrender.com',
  },
  handles: {
    linkedin: 'surya-anish-6a2458227',
    github: 'Suryaa-k',
    portfolio: 'surya-anish.onrender.com',
  },
  resumePdf: '/assets/Surya_Anish_Resume.pdf',
  resumeFileName: 'Surya_Anish_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Surya Anish',
  },
};

export const education = [
  {
    school: 'Malla Reddy Institute of Technology and Science (JNTUH)',
    place: 'Hyderabad',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: '2021 – 2025',
    coursework: ['Web Technologies', 'Software Engineering', 'Data Structures and Algorithms', 'Database Management Systems'],
  },
];

export const experience = [
  {
    company: 'CV Corp',
    role: 'Python Full-Stack Developer Intern',
    place: 'Hyderabad, India',
    period: '2025 – 2026',
    points: [
      'Developed and maintained full-stack web applications using Python (Django) and ReactJS, improving overall code maintainability by 30%.',
      'Built and consumed REST APIs to integrate front-end interfaces with back-end services, reducing data retrieval time.',
      'Collaborated with cross-functional teams to deliver 3+ client-facing features within agile sprint cycles.',
      'Wrote clean, documented Python scripts for data processing and automation tasks, reducing manual effort by 40%.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  /** Short heading used on cards and the modal billboard; `title` is the full resume title. */
  shortTitle: string;
  year: string;
  institution: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when there is no public repository — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'wave';
};

export const projects: Project[] = [
  {
    id: 'cyber-attack-detection',
    title: 'Detection of Cyber Attacks in Networks using ML Techniques',
    shortTitle: 'Cyber Attack Detection',
    year: '2024',
    institution: 'Malla Reddy Institute of Technology and Science, JNTUH',
    genre: 'Machine Learning • Cybersecurity • Desktop GUI',
    logline: 'A real-time network intrusion detection system using ensemble ML methods to classify known and novel cyberattacks.',
    stack: ['Python', 'Tkinter', 'Pandas', 'NumPy', 'Scikit-learn', 'Keras', 'Ensemble Learning'],
    build: [
      'Designed and implemented a real-time network intrusion detection system using ensemble ML methods, achieving 94% accuracy in classifying both known and novel cyberattacks.',
      'Developed automated response mechanisms and behavioral analysis modules that reduced false-positive alerts.',
      'Built a Tkinter-based desktop GUI to visualize threat data and monitoring dashboards for non-technical users.',
    ],
    features: [
      'Real-time network intrusion detection',
      'Ensemble ML classification of known and novel cyberattacks',
      'Automated response mechanisms',
      'Behavioral analysis modules that reduce false-positive alerts',
      'Tkinter desktop GUI with threat data visualization and monitoring dashboards',
    ],
    metrics: [
      { value: '94%', label: 'accuracy on known and novel cyberattacks' },
      { value: 'Real-time', label: 'network intrusion detection' },
      { value: 'Ensemble', label: 'learning approach' },
      { value: 'Tkinter', label: 'GUI for non-technical users' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'parkinsons-detection',
    title: "Detection of Parkinson's Disease through Analysis of Image and Speech Data using AI/ML",
    shortTitle: "Parkinson's Detection",
    year: '2024 – 2025',
    institution: 'Malla Reddy Institute of Technology and Science, JNTUH',
    genre: 'AI / ML • Healthcare • Computer Vision • NLP',
    logline: "A serverless dual-modality diagnostic system that analyzes brain MRI images and speech patterns to detect early signs of Parkinson's Disease.",
    stack: ['Python', 'TensorFlow/PyTorch', 'OpenCV', 'Natural Language Processing', 'Scikit-learn', 'Ensemble Learning'],
    build: [
      "Developed a serverless dual-modality diagnostic system that analyzes brain MRI images and speech patterns to detect early signs of Parkinson's Disease with high clinical relevance.",
      'Implemented image segmentation to identify structural abnormalities in the substantia nigra and voice feature extraction (pitch, phonation, rhythm) for speech impairment analysis.',
      'Reduced diagnostic uncertainty compared to traditional methods by combining two independent data sources in one ML pipeline.',
    ],
    features: [
      'Serverless dual-modality diagnostic system',
      'Brain MRI analysis with image segmentation of the substantia nigra',
      'Voice feature extraction — pitch, phonation, rhythm',
      'Two independent data sources combined in one ML pipeline',
    ],
    metrics: [
      { value: '2', label: 'independent data sources in one ML pipeline' },
      { value: 'MRI', label: 'substantia nigra image segmentation' },
      { value: '3', label: 'voice features — pitch, phonation, rhythm' },
      { value: 'Serverless', label: 'dual-modality diagnostic system' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'wave',
  },
];

export type Certification = { id: string; name: string; detail: string; laurel: string };

export const certifications: Certification[] = [
  { id: 'python-full-stack', name: 'Python Full-Stack', detail: 'Certification in Python Full-Stack development.', laurel: 'Certified' },
  { id: 'sql', name: 'SQL', detail: 'Certification in SQL.', laurel: 'Certified' },
  { id: 'web-development', name: 'Web Development', detail: 'Certification in Web Development.', laurel: 'Certified' },
  { id: 'artificial-intelligence', name: 'Artificial Intelligence', detail: 'Certification in Artificial Intelligence.', laurel: 'Certified' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Python & Java',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'Java', mono: 'Jv' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & Design',
    subtitle: 'Interfaces, design & modelling',
    skills: [
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'React.js', mono: 'Re' },
      { name: 'UI/UX Design', mono: 'UX' },
      { name: 'AutoCAD', mono: 'Ac' },
      { name: 'StarUML', mono: 'Su' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'Server-side logic & APIs',
    skills: [
      { name: 'Django', mono: 'Dj' },
      { name: 'REST API', mono: 'Ap' },
      { name: 'Tkinter', mono: 'Tk' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Analytics',
    subtitle: 'Data stores & insight',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'Data Analysis', mono: 'Da' },
      { name: 'Power BI', mono: 'Pb' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    subtitle: 'Shipping & workflow',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Antigravity', mono: 'Ag' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Generative AI',
    subtitle: 'Working with models',
    skills: [{ name: 'Prompt Engineering', mono: 'Pe' }],
  },
  {
    id: 'core',
    title: 'Engineering Core',
    subtitle: 'The foundations',
    skills: [
      { name: 'Data Structures & Algorithms', mono: 'Ds' },
      { name: 'Code Design', mono: 'Cd' },
      { name: 'Project/User Manual Documentation', mono: 'Dc' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the experience, projects or certifications on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['CV Corp internship', 'Cyber Attack Detection', "Parkinson's Detection", 'Python Full-Stack certification'],
  Django: ['CV Corp internship'],
  'React.js': ['CV Corp internship'],
  'REST API': ['CV Corp internship'],
  Tkinter: ['Cyber Attack Detection'],
  SQL: ['SQL certification'],
  MySQL: ['SQL certification'],
  HTML5: ['Web Development certification'],
  CSS3: ['Web Development certification'],
  JavaScript: ['Web Development certification'],
  'Data Structures & Algorithms': ['B.Tech coursework'],
  'Data Analysis': ['Databases & Analytics'],
  'Prompt Engineering': ['AI & Generative AI'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2021 – 2025',
    synopsis: 'B.Tech in Computer Science and Engineering at Malla Reddy Institute of Technology and Science (JNTUH), Hyderabad.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Computer Science and Engineering at Malla Reddy Institute of Technology and Science (JNTUH), Hyderabad.',
        tags: ['B.Tech', 'CSE', 'JNTUH'],
        runtime: '2021 – 2025',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Syllabus',
        description: 'Coursework in Web Technologies, Software Engineering, Data Structures and Algorithms, and Database Management Systems.',
        tags: ['Web Technologies', 'Software Engineering', 'DSA', 'DBMS'],
        runtime: 'Coursework',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Learning by Building',
    period: '2024 – 2025',
    synopsis: 'Two technical projects at Malla Reddy Institute of Technology and Science, JNTUH — both powered by machine learning.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Defender',
        description: 'Detection of Cyber Attacks in Networks using ML Techniques — a real-time intrusion detection system with 94% accuracy, plus a Tkinter dashboard.',
        tags: ['Python', 'Scikit-learn', 'Keras', 'Tkinter'],
        runtime: '2024',
        palette: crimson,
      },
      {
        code: 'S02 E02',
        title: 'The Diagnostician',
        description: "Detection of Parkinson's Disease through Analysis of Image and Speech Data using AI/ML — a serverless dual-modality diagnostic system.",
        tags: ['TensorFlow/PyTorch', 'OpenCV', 'NLP', 'Ensemble Learning'],
        runtime: '2024 – 2025',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Going Pro',
    period: '2025 – 2026',
    synopsis: 'Python Full-Stack Developer Intern at CV Corp, Hyderabad — working with Django and ReactJS in agile sprint cycles.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Full-Stack Intern',
        description: 'Developed and maintained full-stack web applications using Python (Django) and ReactJS, improving overall code maintainability by 30%.',
        tags: ['Django', 'ReactJS', '30% maintainability'],
        runtime: 'CV Corp',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Integrator',
        description: 'Built and consumed REST APIs to integrate front-end interfaces with back-end services, reducing data retrieval time.',
        tags: ['REST API', 'Front-end', 'Back-end'],
        runtime: 'CV Corp',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'The Team Player',
        description: 'Collaborated with cross-functional teams to deliver 3+ client-facing features within agile sprint cycles.',
        tags: ['Agile', '3+ features', 'Cross-functional'],
        runtime: 'CV Corp',
        palette: jade,
      },
      {
        code: 'S03 E04',
        title: 'The Automator',
        description: 'Wrote clean, documented Python scripts for data processing and automation tasks, reducing manual effort by 40%.',
        tags: ['Python', 'Automation', '40% less manual effort'],
        runtime: 'CV Corp',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'The Toolkit',
    period: 'Skills & certifications',
    synopsis: 'Python, Java, Django, React.js, MySQL, MongoDB, Power BI and more — backed by four certifications.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Stack',
        description: 'Python and Java; HTML5, CSS3, JavaScript and React.js; Django, REST API, Tkinter and Postman; MySQL and MongoDB.',
        tags: ['Python', 'Java', 'React.js', 'Django', 'MySQL', 'MongoDB'],
        runtime: 'Skills',
        palette: violet,
      },
      {
        code: 'S04 E02',
        title: 'The Certified',
        description: 'Certifications in Python Full-Stack, SQL, Web Development and Artificial Intelligence.',
        tags: ['Python Full-Stack', 'SQL', 'Web Development', 'AI'],
        runtime: '4 certifications',
        palette: amber,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Python', detail: 'With Java • Python Full-Stack certified', palette: amber },
  { label: 'The Security Original', title: 'Cyber Attack Detection', detail: '94% accuracy • real-time intrusion detection', palette: crimson },
  { label: 'The Healthcare Original', title: "Parkinson's Detection", detail: 'MRI images + speech data with AI/ML', palette: violet },
  { label: 'The internship', title: 'CV Corp', detail: 'Python Full-Stack Developer Intern • 2025 – 2026', palette: ocean },
  { label: 'Code quality', title: '30%', detail: 'Improved code maintainability with Django & ReactJS', palette: jade },
  { label: 'Automation', title: '40%', detail: 'Reduction in manual effort with Python scripts', palette: amber },
  { label: 'Team delivery', title: '3+ Features', detail: 'Client-facing, in agile sprint cycles', palette: crimson },
  { label: 'The degree', title: 'B.Tech CSE', detail: 'Malla Reddy Institute (JNTUH) • 2021 – 2025', palette: violet },
  { label: 'The toolkit', title: 'Django + React', detail: 'REST APIs connecting front end to back end', palette: ocean },
  { label: 'Credentials', title: '4 Certifications', detail: 'Python Full-Stack • SQL • Web Dev • AI', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['Malla Reddy Institute of Technology and Science (JNTUH), Hyderabad', '2021 – 2025'],
    chips: ['Web Technologies', 'Software Engineering', 'DSA', 'DBMS'],
  },
  {
    kicker: 'Skills',
    title: 'Python first.',
    lines: ['Python, Java · Django, REST API, React.js', 'MySQL, MongoDB, Power BI · Git, GitHub'],
    chips: ['Python', 'Java', 'Django', 'React.js', 'MySQL', 'MongoDB'],
  },
  {
    kicker: 'Experience',
    title: 'CV Corp',
    lines: ['Python Full-Stack Developer Intern · 2025 – 2026', 'Django + ReactJS in agile sprint cycles', '30% better maintainability · 40% less manual effort'],
  },
  {
    kicker: 'Projects',
    title: 'Two Originals',
    lines: ['Cyber Attack Detection — 94% accuracy', "Parkinson's Detection — MRI images + speech data"],
  },
  {
    kicker: 'Certified',
    title: '4 Certifications',
    lines: ['Python Full-Stack · SQL', 'Web Development · Artificial Intelligence'],
  },
  {
    kicker: 'Contact',
    title: "Let's connect",
    lines: ['Suryakudupudi888@gmail.com · +91 81210 21005', 'Hyderabad, Telangana, India', 'surya-anish.onrender.com'],
  },
];

export type ProfileId = 'surya' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'surya',
    name: 'Surya',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, certifications & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Summary, education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2024 – 2025`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: `Top ${topPicks.length} from the resume`, palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Certified', card: 'Certifications', meta: `${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
