export type ProjectCategory = 'frontend' | 'fullstack';

export interface Project {
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: ProjectCategory;
  tags: string[];
  featured?: boolean;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  image: string;
  description: string;
  tags: string[];
  location?: string;
}

export interface Qualification {
  title: string;
  period: string;
  institution?: string;
  description: string;
  badge?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  url?: string;
}

export const PORTFOLIO = {
  name: 'Prabhat Dixit',
  role: 'Frontend Web Developer',
  tagline: 'Crafting performant, accessible, and elegant Web Applications with Angular & TypeScript',
  email: 'dxtprabh87@gmail.com',
  phone: '+91 9598 208 182',
  location: 'Delhi, UP, India',
  github: 'https://github.com/theprabhuofficial',
  linkedin: 'https://www.linkedin.com/in/dixitprabhat/',
  summary:
    'Results-driven Frontend Developer with experience building enterprise web applications, interactive dashboards, and responsive web experiences using Angular, TypeScript, RxJS, and modern CSS systems. Focused on scalable frontend architecture, accessibility (WCAG), performance optimization, and intuitive UX.',
  resumePath: 'assets/files/Prabhat Dixit.pdf',
  availability: 'Available for Opportunities',
} as const;

export const PROJECTS: Project[] = [
  {
    title: 'MR Reporting Dashboard',
    description:
      'Enterprise Angular application featuring interactive reporting dashboards, real-time data filtering, dynamic chart visualizations, and multi-format Excel/PDF report exports for pharmaceutical sales teams.',
    image: 'assets/images/ELogo.png',
    category: 'fullstack',
    tags: ['Angular', 'TypeScript', 'RxJS', 'LoopBack', 'MongoDB'],
    featured: true,
  },
  {
    title: 'BlogGram',
    description:
      'Modern responsive blog portal showcasing dynamic layout grid, content browsing, mobile navigation drawer, and seamless cross-device layout design.',
    image: 'assets/images/front-end-images/Responsive-Navbar.png',
    demoUrl: 'https://dynamic-palmier-e25ea9.netlify.app/',
    githubUrl: 'https://github.com/theprabhuofficial',
    category: 'frontend',
    tags: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design'],
    featured: true,
  },
  {
    title: 'Photography Showcase Gallery',
    description:
      'High-impact photography portfolio homepage featuring interactive slider carousels, responsive Bootstrap grid architecture, lightbox previews, and touch swipe gestures.',
    image: 'assets/images/front-end-images/photograpgy_home.png',
    demoUrl: 'https://front-end-test-kappa.vercel.app/',
    githubUrl: 'https://github.com/theprabhuofficial',
    category: 'frontend',
    tags: ['Bootstrap 5', 'JavaScript', 'CSS Grid', 'Web Performance'],
    featured: true,
  },
  {
    title: 'React Movie Discovery App',
    description:
      'Dynamic movie exploration web app powered by TMDB REST API, client-side search filtering, modal detail views, and state management using React Hooks.',
    image: 'assets/images/front-end-images/bst-movie.png',
    githubUrl: 'https://github.com/theprabhuofficial',
    category: 'frontend',
    tags: ['React', 'JavaScript', 'REST API', 'CSS Modules'],
    featured: false,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    title: 'Web Developer',
    company: 'MR Reporting',
    period: 'Sep 2023 – Present',
    location: 'India',
    image: 'assets/images/ELOGO.jpg',
    description:
      'Engineered enterprise web reporting interfaces for pharmaceutical field teams using Angular and TypeScript. Built complex interactive dashboards, custom dynamic filters, and high-volume data export features (PDF/Excel) while maintaining fast rendering performance.',
    tags: ['Angular', 'TypeScript', 'Angular Material', 'RxJS', 'LoopBack API'],
  },
  {
    title: 'Technical Support & Database Management',
    company: 'MR Reporting',
    period: 'May 2022 – Aug 2023',
    location: 'India',
    image: 'assets/images/edubridge.jpg',
    description:
      'Managed MongoDB and SQL databases, optimized query execution speed, engineered data integrity constraints, and supported API integration workflows between Node.js/LoopBack backends and Angular frontends.',
    tags: ['MongoDB', 'MySQL', 'Node.js', 'Data Integrity', 'REST APIs'],
  },
];

export const QUALIFICATIONS: Qualification[] = [
  {
    title: 'NIELIT A-Level Certification',
    period: '2022',
    institution: 'National Institute of Electronics & Information Technology',
    description:
      'Advanced Diploma covering software engineering, object-oriented analysis, database design, web application development, and data structures.',
    badge: 'Advanced Diploma',
  },
  {
    title: 'NIELIT O-Level Certification',
    period: '2018',
    institution: 'National Institute of Electronics & Information Technology',
    description:
      'Foundation Diploma covering web programming, IT fundamentals, database basics, and algorithmic problem solving.',
    badge: 'Foundation Diploma',
  },
  {
    title: 'Bachelor of Arts (B.A.)',
    period: '2017 – 2020',
    institution: 'M.J.P. Rohilkhand University, Bareilly',
    description:
      'Focused on Education and English Literature, developing critical thinking, communication, and structured analytical skill sets.',
    badge: 'Undergraduate Degree',
  },
  {
    title: 'Intermediate (Class XII)',
    period: '2016',
    institution: 'U.P. Board — Inter College, Powayan',
    description: 'Higher Secondary Education with focus on academics and mathematical reasoning.',
  },
  {
    title: 'High School (Class X)',
    period: '2014',
    institution: 'U.P. Board — Saraswati Vidya Mandir, Powayan',
    description: 'Secondary School Education establishing analytical and science foundations.',
  },
];

export const SKILLS: Skill[] = [
  { name: 'Angular', icon: 'assets/images/programing.png', category: 'frontend' },
  { name: 'TypeScript', icon: 'assets/images/java-script.png', category: 'frontend' },
  { name: 'JavaScript (ES6+)', icon: 'assets/images/java-script.png', category: 'frontend' },
  { name: 'Node.js', icon: 'assets/images/node.png', category: 'backend' },
  { name: 'MongoDB', icon: 'assets/images/mongo.png', category: 'database' },
  { name: 'SQL / MySQL', icon: 'assets/images/SQL.png', category: 'database' },
  { name: 'C Language', icon: 'assets/images/clang.png', category: 'backend' },
  {
    name: 'Git & GitHub',
    icon: 'assets/images/githublogo.png',
    category: 'tools',
    url: 'https://github.com/theprabhuofficial',
  },
];

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const;
