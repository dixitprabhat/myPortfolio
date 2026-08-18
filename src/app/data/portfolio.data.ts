export type ProjectCategory = 'frontend' | 'fullstack';

export interface ProjectCaseStudy {
  overview: string;
  role: string;
  keyContributions: string[];
  outcomes: string[];
  architectureFlow?: string[];
  starMetrics?: { label: string; value: string }[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: ProjectCategory;
  tags: string[];
  featured?: boolean;
  caseStudy?: ProjectCaseStudy;
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
  type: string;
  url?: string;
}

export const PORTFOLIO = {
  name: 'Prabhat Dixit',
  role: 'MEAN Stack Developer',
  tagline: 'Architecting scalable full-stack web applications with MongoDB, Express.js, Angular, Node.js & TypeScript',
  email: 'dxtprabh87@gmail.com',
  phone: '+91 9598 208 182',
  location: 'Delhi, UP, India',
  github: 'https://github.com/theprabhuofficial',
  linkedin: 'https://www.linkedin.com/in/dixitprabhat/',
  summary:
    'Results-driven MEAN Stack Developer with hands-on experience engineering enterprise web applications, RESTful microservices, interactive dashboards, and database architectures using MongoDB, Express.js, Angular, Node.js, and TypeScript. Passionate about end-to-end full-stack architecture, scalable backends, clean code, accessibility, and high-performance UX.',
  resumePath: 'assets/files/PrabhatDixit.pdf',
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
    caseStudy: {
      overview:
        'Enterprise medical representative reporting interface built for pharmaceutical field operations, visualizing sales performance, doctor call logs, and target achievements.',
      role: 'Web Developer / Full Stack Lead',
      architectureFlow: [
        'Angular 17 Signals & RxJS',
        'LoopBack REST Microservices',
        'MongoDB Aggregation Pipelines',
        'Automated PDF/Excel Exporter',
      ],
      starMetrics: [
        { label: 'Report Generation', value: '+40% Faster' },
        { label: 'Active Field Reps', value: '500+ Users' },
      ],
      keyContributions: [
        'Designed dynamic Angular reporting views & interactive chart dashboards',
        'Integrated LoopBack REST APIs and optimized MongoDB database aggregation queries',
        'Engineered automated client-side PDF and Excel export modules',
        'Implemented state management using RxJS observables and Angular Signals',
      ],
      outcomes: [
        'Improved report generation speed by 40%',
        'Streamlined daily field reporting workflow for 500+ active field sales representatives',
      ],
    },
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
    caseStudy: {
      overview:
        'Modern content publishing and blog discovery portal designed with a mobile-first philosophy, clean typography, and interactive navigation drawer.',
      role: 'Frontend Engineer',
      architectureFlow: [
        'Semantic HTML5 Markup',
        'CSS Flexbox & Grid System',
        'Vanilla JS Drawer Handler',
        'Netlify Global CDN',
      ],
      starMetrics: [
        { label: 'Lighthouse Score', value: '100% Mobile' },
        { label: 'Network Latency', value: '< 1 Sec 3G' },
      ],
      keyContributions: [
        'Crafted semantic HTML5 markup and responsive CSS grid layout system',
        'Implemented vanilla JavaScript event handlers for mobile drawer navigation',
        'Optimized critical rendering path and CSS loading performance',
      ],
      outcomes: [
        'Achieved 100% Google Lighthouse mobile usability rating',
        'Sub-1-second initial load time on 3G network conditions',
      ],
    },
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
    caseStudy: {
      overview:
        'Visual media gallery and photography homepage showcasing touch-enabled image sliders, lightbox modal previews, and responsive grid layouts.',
      role: 'UI Developer',
      architectureFlow: [
        'Bootstrap 5 Responsive Grid',
        'Touch Swipe Event Engine',
        'Lightbox Gallery Overlay',
        'Asset Lazy Loader',
      ],
      starMetrics: [
        { label: 'Engagement Rate', value: '+65% Time' },
        { label: 'Viewport Fluidity', value: '100% Touch' },
      ],
      keyContributions: [
        'Built responsive grid layouts using Bootstrap 5 and flexbox utilities',
        'Integrated custom touch swipe sliders and image lightbox popups',
        'Implemented lazy loading for high-resolution photo assets',
      ],
      outcomes: [
        'Enhanced visitor engagement time with touch-friendly lightbox galleries',
        'Fluid cross-device rendering across mobile, tablet, and desktop viewports',
      ],
    },
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
    caseStudy: {
      overview:
        'Movie exploration web application integrating the TMDB REST API to browse trending movies, filter by genre, and view details in modal views.',
      role: 'Frontend Developer',
      architectureFlow: [
        'React Functional Components',
        'TMDB REST Integration',
        'Client Query Filter State',
        'Scoped CSS Modules',
      ],
      starMetrics: [
        { label: 'Search Latency', value: 'Instant' },
        { label: 'Catalog Index', value: '10,000+ Movies' },
      ],
      keyContributions: [
        'Utilized React Hooks (useState, useEffect) for API state management',
        'Implemented real-time client-side search query filtering',
        'Designed custom CSS Modules for isolated component styling',
      ],
      outcomes: [
        'Instant search responses across 10,000+ movie entries',
        'Clean modular component architecture with isolated scoped styles',
      ],
    },
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
];

export const SKILLS: Skill[] = [
  // Frontend Stack
  { name: 'Angular', icon: 'assets/images/programing.png', category: 'frontend', type: 'Framework' },
  { name: 'TypeScript', icon: 'assets/images/TypeScript.png', category: 'frontend', type: 'Language' },
  { name: 'JavaScript (ES6+)', icon: 'assets/images/java-script.png', category: 'frontend', type: 'Language' },
  { name: 'HTML5 & CSS3', icon: 'assets/images/programing.png', category: 'frontend', type: 'Markup & Styling' },
  { name: 'RxJS & Signals', icon: 'assets/images/idea.png', category: 'frontend', type: 'State & Async' },
  { name: 'Tailwind & Bootstrap', icon: 'assets/images/programing.png', category: 'frontend', type: 'UI Library' },

  // Backend Stack
  { name: 'NodeJS', icon: 'assets/images/node.png', category: 'backend', type: 'Runtime' },
  { name: 'ExpressJS', icon: 'assets/images/Express.png', category: 'backend', type: 'Web Framework' },
  { name: 'NestJS', icon: 'assets/images/nestJs.png', category: 'backend', type: 'Framework' },
  { name: 'LoopBack 4', icon: 'assets/images/node.png', category: 'backend', type: 'REST Framework' },
  { name: 'RESTful APIs', icon: 'assets/images/idea.png', category: 'backend', type: 'Architecture' },

  // Database Stack
  { name: 'MongoDB', icon: 'assets/images/mongo.png', category: 'database', type: 'NoSQL DB' },
  { name: 'MySQL', icon: 'assets/images/SQL.png', category: 'database', type: 'Relational DB' },
  { name: 'Mongoose ODM', icon: 'assets/images/mongo.png', category: 'database', type: 'Object Modeling' },
  { name: 'Aggregation Pipelines', icon: 'assets/images/data.png', category: 'database', type: 'Data Processing' },

  // Tools & Ecosystem
  { name: 'Git & GitHub', icon: 'assets/images/githublogo.png', category: 'tools', type: 'Version Control' },
  { name: 'Postman', icon: 'assets/images/postman.png', category: 'tools', type: 'API Testing' },
  { name: 'VS Code', icon: 'assets/images/Visual Studio Code (VS Code).png', category: 'tools', type: 'IDE / Editor' },
  { name: 'AWS Cloud', icon: 'assets/images/AWS.png', category: 'tools', type: 'Cloud Services' },
  { name: 'FileZilla', icon: 'assets/images/FileZilla.png', category: 'tools', type: 'FTP & Deploy' },
];

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills & Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const;
