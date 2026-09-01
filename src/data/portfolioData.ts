import { EducationInfo, SocialLinks, SkillItem, ProjectItem, CaseStudy, AchievementItem, PresentationItem, MetricItem, LearningTopic } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Kasi Naveen K",
  role: "Computer Science & Engineering Student",
  specializations: [
    "Full-Stack Developer",
    "App Developer",
    "Java Developer"
  ],
  bio: "I am a motivated and technically skilled 3rd-year Computer Science and Engineering student with an academic record of 8.9 CGPA up to the 4th semester. I have hands-on experience in full-stack web development and application development. I enjoy building complete software solutions from frontend interfaces to backend services and databases.",
  careerObjective: "To begin a challenging career in the software industry where I can apply my skills in Java, full-stack development, application development, and problem solving to build impactful software solutions while continuously improving my technical and professional expertise.",
  interests: [
    "Full-Stack Development",
    "Application Development",
    "Software Engineering",
    "Database Systems",
    "Computer Networks",
    "AI-powered Applications",
    "Problem Solving",
    "Innovation"
  ],
  primaryLanguage: "Java",
  otherLanguages: ["Python", "C"],
  status: "SYSTEM READY // 3RD YEAR CSE",
  profileImage: "/images/profile.png", // Real photo from public/images/profile.png
  declaration: "I hereby declare that the information provided above is true and accurate to the best of my knowledge."
};

export const SOCIAL_LINKS: SocialLinks = {
  github: "YOUR_GITHUB_URL", // User placeholder
  linkedin: "https://www.linkedin.com/in/kasi-naveen-k-673353431", // User placeholder
  email: "kkasinaveen@gmail.com",
  phone: "6381246015",
  resumePdf: "/Kasi_Naveen_K_Resume.pdf" // Put resume PDF into /public/Kasi_Naveen_K_Resume.pdf
};

export const EDUCATION_DATA: EducationInfo = {
  degree: "B.E. Computer Science and Engineering",
  institution: "Government College of Engineering",
  location: "Sengipatti, Thanjavur, Tamil Nadu, India",
  duration: "2024 – 2028",
  currentYear: "Currently Pursuing — 3rd Year",
  cgpa: "8.9",
  cgpaMax: "10.0",
  semesterCoverage: "Up to 4th Semester",
  highlights: [
    "Consistent academic excellence with 8.9 / 10.0 CGPA",
    "Strong foundation in Data Structures, OOP, OS, Networks & DBMS",
    "Active participant in technical presentations and inter-college hackathons",
    "Hands-on full-stack software and mobile engineering projects"
  ]
};

export const TYPEWRITER_PHRASES = [
  "Building scalable software.",
  "Turning ideas into applications.",
  "Engineering full-stack solutions.",
  "Developing intelligent systems.",
  "Exploring AI-powered applications.",
  "Solving real-world problems with code."
];

export const METRICS_DATA: MetricItem[] = [
  {
    label: "Academic CGPA",
    value: "8.9",
    numericTarget: 8.9,
    suffix: "/10",
    subtext: "Up to 4th Sem (GCE Sengipatti)",
    isVerified: true,
    iconName: "GraduationCap"
  },
  {
    label: "Core Full-Stack Projects",
    value: "3",
    numericTarget: 3,
    suffix: "+",
    subtext: "End-to-End Architectures",
    isVerified: true,
    iconName: "FolderGit2"
  },
  {
    label: "Hackathon Participations",
    value: "2",
    numericTarget: 2,
    suffix: "",
    subtext: "Competitive Engineering",
    isVerified: true,
    iconName: "Trophy"
  },
  {
    label: "Hackathon Distinction",
    value: "2nd Prize",
    subtext: "Bannari Amman Institute of Tech (BIT)",
    isVerified: true,
    iconName: "Award"
  },
  {
    label: "Mobile Platforms",
    value: "Android + iOS",
    subtext: "Hostel App Ecosystem",
    isVerified: true,
    iconName: "Smartphone"
  },
  {
    label: "Primary Language",
    value: "Java",
    subtext: "Core OOP & Enterprise Backend",
    isVerified: true,
    iconName: "Code2"
  },
  {
    label: "NPTEL Certified",
    value: "Programming in Java",
    subtext: "Elite Academic Verification",
    isVerified: true,
    iconName: "CheckCircle2"
  },
  {
    label: "Open Source Activity",
    value: "[Add Verified Metric]",
    subtext: "Upcoming Public PRs",
    isVerified: false,
    iconName: "GitPullRequest"
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  {
    name: "Java",
    category: "Programming",
    isPrimary: true,
    proficiency: "Primary Language",
    iconName: "Coffee",
    description: "Primary programming language with deep OOP architecture, multithreading, enterprise backend APIs, and desktop/service systems.",
    relatedProjects: ["Hostel Management System", "Student Management System"],
    tags: ["Core Java", "OOP", "Collections", "Multithreading", "Backend Architecture"]
  },
  {
    name: "Python",
    category: "Programming",
    proficiency: "Proficient",
    iconName: "Binary",
    description: "Scripting, rapid backend prototyping, data handling, AI logic workflows, and full-stack integration.",
    relatedProjects: ["Student Management System", "AI Interview Knowledge Assessment"],
    tags: ["Data Processing", "Automation", "AI Modules", "REST Services"]
  },
  {
    name: "C",
    category: "Programming",
    proficiency: "Foundational",
    iconName: "Cpu",
    description: "Low-level memory management, systems programming fundamentals, pointers, algorithms, and computational efficiency.",
    relatedProjects: [],
    tags: ["Memory Management", "Algorithms", "Pointers", "Systems"]
  },

  // Full-Stack Development
  {
    name: "Frontend Development",
    category: "Full-Stack",
    iconName: "Layout",
    description: "Building responsive, modern, user-centric web interfaces using modern component patterns, CSS animations, and reactive state.",
    relatedProjects: ["Student Management System", "Hostel Management System", "AI Interview Knowledge Assessment"],
    tags: ["HTML5", "CSS3", "JavaScript/TypeScript", "React", "Responsive UI"]
  },
  {
    name: "Backend Development",
    category: "Full-Stack",
    iconName: "Server",
    description: "Designing structured backend architectures, microservices, business logic processing, and persistent service layers.",
    relatedProjects: ["Student Management System", "Hostel Management System"],
    tags: ["Java Backend", "Python Backend", "Service Design", "Logic Pipelines"]
  },
  {
    name: "REST API Development",
    category: "Full-Stack",
    iconName: "Network",
    description: "Architecting clean RESTful endpoints, request/response validation, token-based authentication, and JSON serialization.",
    relatedProjects: ["Hostel Management System", "AI Interview Knowledge Assessment"],
    tags: ["REST Endpoints", "JSON", "HTTP Status Codes", "API Gateways"]
  },
  {
    name: "Database Integration",
    category: "Full-Stack",
    iconName: "Database",
    description: "Connecting backend controllers to relational database engines, connection pooling, and transactional query execution.",
    relatedProjects: ["Student Management System", "Hostel Management System"],
    tags: ["JDBC/Connectors", "Query Pipelines", "Data Persistence", "Relational Mapping"]
  },
  {
    name: "Full-Stack Application Architecture",
    category: "Full-Stack",
    iconName: "Layers",
    description: "Coordinating multi-tier software architectures from UI to secure API gateways, business logic, and relational storage.",
    relatedProjects: ["Hostel Management System", "Student Management System"],
    tags: ["Tiered Architecture", "Separation of Concerns", "Scalability", "Full-Stack Flow"]
  },

  // Application Development
  {
    name: "Application UI Development",
    category: "Application",
    iconName: "Smartphone",
    description: "Designing touch-optimized, fluid mobile interfaces tailored for cross-platform Android and iOS workflows.",
    relatedProjects: ["Hostel Management Mobile Apps"],
    tags: ["Cross-Platform UI", "Mobile Layouts", "Touch Ergonomics", "Component State"]
  },
  {
    name: "Backend & API Integration",
    category: "Application",
    iconName: "Radio",
    description: "Bridging mobile client interfaces with live cloud/local backend services via asynchronous API calls.",
    relatedProjects: ["Hostel Management System"],
    tags: ["Async Data Fetching", "Endpoint Mapping", "Error Handling", "State Sync"]
  },
  {
    name: "Database Connectivity in Apps",
    category: "Application",
    iconName: "HardDrive",
    description: "Enabling smooth mobile client communication with database clusters through secure backend middleware.",
    relatedProjects: ["Hostel Management System"],
    tags: ["Data Cache", "Secure Middleware", "Offline Simulation", "DB Sync"]
  },

  // Database
  {
    name: "DBMS & Database Design",
    category: "Database",
    iconName: "Database",
    description: "Schema normalization (1NF-3NF), entity-relationship modeling, primary/foreign key constraints, and index optimization.",
    relatedProjects: ["Student Management System", "Hostel Management System"],
    tags: ["Relational Schema", "Normalization", "ER Diagrams", "Data Integrity"]
  },
  {
    name: "Data Management & Querying",
    category: "Database",
    iconName: "TerminalSquare",
    description: "Crafting efficient SQL queries, multi-table joins, subqueries, aggregation, and transactional ACID consistency.",
    relatedProjects: ["Student Management System", "Hostel Management System"],
    tags: ["Complex SQL", "Joins", "ACID Transactions", "CRUD Operations"]
  },

  // Networking
  {
    name: "Computer Networks & Protocols",
    category: "Networking",
    iconName: "Globe",
    description: "Comprehensive understanding of OSI & TCP/IP layers, routing, port forwarding, sockets, and client-server paradigm.",
    relatedProjects: ["Hostel Management System", "Student Management System"],
    tags: ["OSI Model", "TCP/IP", "Client-Server", "Sockets"]
  },
  {
    name: "TCP & Sockets",
    category: "Networking",
    iconName: "Workflow",
    description: "Reliable byte-stream transmission, connection handshake, flow control, and custom query transmission sockets.",
    relatedProjects: ["Hostel Management System (Hosteller Query Processing)"],
    tags: ["TCP Handshake", "Packet Transmission", "Reliable Delivery", "Socket I/O"]
  },
  {
    name: "SMTP Concepts",
    category: "Networking",
    iconName: "Mail",
    description: "Implementing automated email notification pipelines, message routing, mail headers, and SMTP protocol handshakes.",
    relatedProjects: ["Hostel Management System (Email Notifications)"],
    tags: ["SMTP Protocol", "Email Alerts", "Mail Server Handshake", "Notification Daemon"]
  },

  // Core CS
  {
    name: "Object-Oriented Programming (OOP)",
    category: "Core CS",
    iconName: "Boxes",
    description: "Encapsulation, Inheritance, Polymorphism, Abstraction, Interface design, and modular software maintainability.",
    relatedProjects: ["Student Management System", "Hostel Management System"],
    tags: ["Inheritance", "Polymorphism", "Encapsulation", "Clean Interfaces"]
  },
  {
    name: "Data Structures & Algorithms",
    category: "Core CS",
    iconName: "GitBranch",
    description: "Array structures, Linked Lists, Stacks, Queues, Trees, Hash Tables, Sorting, Searching, and Big-O efficiency.",
    relatedProjects: [],
    tags: ["Time Complexity", "Space Complexity", "Recursion", "Searching & Sorting"]
  },
  {
    name: "Operating Systems",
    category: "Core CS",
    iconName: "HardDriveDownload",
    description: "Process scheduling, thread synchronization, memory virtualization, paging, file systems, and system calls.",
    relatedProjects: [],
    tags: ["Process Lifecycle", "Multithreading", "Memory Virtualization", "Deadlocks"]
  },

  // Software Engineering
  {
    name: "Problem Solving & Debugging",
    category: "Software Engineering",
    iconName: "Bug",
    description: "Systematic root-cause diagnosis, stack trace analysis, breakpoint debugging, and edge-case unit verification.",
    relatedProjects: ["All Projects", "Hackathon Solutions"],
    tags: ["Stack Trace Analysis", "Root Cause Discovery", "Edge Cases", "Optimizations"]
  },
  {
    name: "Version Control (Git)",
    category: "Software Engineering",
    iconName: "GitCommit",
    description: "Branching strategies, commit history hygiene, merge conflict resolution, and collaborative repository management.",
    relatedProjects: ["All Projects"],
    tags: ["Git CLI", "Branching", "Merge Workflows", "Repo Hygiene"]
  },
  {
    name: "Team Collaboration & Design",
    category: "Software Engineering",
    iconName: "Users",
    description: "Agile task division, peer code reviews, software documentation, and rapid sprint execution in hackathons.",
    relatedProjects: ["BIT Hackathon Project", "Game Prototype Innovation"],
    tags: ["Agile Sprint", "Code Reviews", "Documentation", "Team Sync"]
  },

  // AI
  {
    name: "AI-Powered Application Concepts",
    category: "AI",
    iconName: "Sparkles",
    description: "Designing intelligent system pipelines that process natural language inputs, extract key parameters, and generate dynamic reports.",
    relatedProjects: ["AI Open-Source Interview Knowledge Assessment"],
    tags: ["Knowledge Evaluation", "AI Pipeline", "Automated Assessment", "Dynamic Scoring"]
  },
  {
    name: "AI Report & Readiness Generation",
    category: "AI",
    iconName: "FileCheck",
    description: "Algorithmic synthesis of technical capability, communication metrics, and interview readiness into structured reports.",
    relatedProjects: ["AI Open-Source Interview Knowledge Assessment"],
    tags: ["Readiness Metrics", "Automated Synthesis", "Radar Scoring", "Feedback Engine"]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "hostel-management-system",
    title: "Hostel Management System",
    subtitle: "Enterprise Full-Stack & Multi-Platform Campus Living Ecosystem",
    badge: "MAJOR FULL-STACK & MOBILE PROJECT",
    isMajorProject: true,
    webToMobile: true,
    featured: true,
    description: "A comprehensive full-stack Hostel Management System designed to digitize hostel administration and provide intelligent solutions for hostel officers and hostellers across Web, Android, and iOS platforms.",
    technologies: [
      "Full-Stack Development",
      "Java Backend",
      "Database Management",
      "Computer Networking",
      "TCP Sockets",
      "SMTP Mail Protocol",
      "Android Mobile App",
      "iOS Mobile App",
      "Role-Based Security"
    ],
    features: [
      "Role-Based Authentication: Distinct access portals for Hostel Officers, Admins, and Hostellers",
      "Automatic Attendance Tracking: Real-time digital roll call and absence logging",
      "Hosteller Query Processing & Advanced Resolution: Ticket tracking pipeline for maintenance & issues",
      "Multi-Channel Notifications: In-app instant notifications and automated SMTP email alerts",
      "Room Allocation & Inventory Management: Dynamic room capacity tracking and asset records",
      "Cross-Platform Mobile Deployment: Converted web architecture into native-feeling Android & iOS applications",
      "TCP & Socket Integration: Low-latency query packet transmission and notification dispatching"
    ],
    engineeringHighlights: [
      "Architected 3-tier architecture with separate microservice daemons for Email (SMTP) and Query Processing (TCP)",
      "Implemented comprehensive CRUD with transactional consistency preventing double room allocation",
      "Engineered automated daily attendance reports dispatched to admin dashboards via scheduled background jobs",
      "Successfully translated web frontend state management into mobile Android and iOS app views"
    ],
    architectureOverview: "User Request -> Role-Based Auth Gateway -> Frontend Client (Web / Mobile) -> Secure REST API Layer -> Java/Python Backend Controller -> Database (DBMS) + Standalone Daemon Services (Attendance, Notification, SMTP Email, TCP Query Engine)",
    architectureNodes: [
      { id: "client", label: "Multi-Client Layer", desc: "Web Browser + Android APK + iOS App", type: "client" },
      { id: "auth", label: "Authentication Service", desc: "Role-Based Token Verification (Admin / Officer / Hosteller)", type: "gateway" },
      { id: "api", label: "API Gateway Layer", desc: "RESTful HTTP & Socket Routing Endpoints", type: "gateway" },
      { id: "backend", label: "Core Backend Services", desc: "Java Business Logic & Transaction Processor", type: "service" },
      { id: "services", label: "Auxiliary Daemons", desc: "SMTP Email Service, TCP Query Engine, Auto-Attendance", type: "service" },
      { id: "db", label: "DBMS Persistence Layer", desc: "Relational Tables: Students, Rooms, Attendance, Queries", type: "db" }
    ],
    screenshots: [
      {
        url: "/images/projects/hostel-management/file_000000000ec082079e8575c7876945eb.png",
        title: "Hostel Admin Command Dashboard & Room Allocation Grid",
        caption: "Hostel Admin Command Dashboard & Room Allocation Grid",
        description: "Centralized administrative workspace for monitoring total occupancy, room allocations, hosteller check-ins, and active maintenance tickets. Provides hostel officers and administrators with a real-time command overview of dormitory blocks, vacancy rates, and student assignments.",
        technicalSignificance: "Demonstrates role-based administrative authorization, aggregate metric calculation, and unified state management consolidating multi-building hostel logistics into a single dashboard.",
        isPlaceholder: false
      },
      {
        url: "/images/projects/hostel-management/file_0000000047c482089747f939c50d223e.png",
        title: "Automated Night Roll Call & Attendance Tracking Portal",
        caption: "Automated Night Roll Call & Attendance Tracking Portal",
        description: "Digital attendance logging interface that captures evening hostel check-ins, records student presence or absence, and generates real-time daily roll call audits. Replaces error-prone manual paper registers with instant timestamped verification.",
        technicalSignificance: "Implements scheduled batch synchronization, automated absence calculation, and background daemon routines that trigger administrative alerts upon student absence.",
        isPlaceholder: false
      },
      {
        url: "/images/projects/hostel-management/file_0000000063a48211a6a2e0ac0355bf66.png",
        title: "Hosteller Query Processing & TCP Socket Resolution Pipeline",
        caption: "Hosteller Query Processing & TCP Socket Resolution Pipeline",
        description: "Interactive ticket management console enabling hostellers to log maintenance, electrical, and plumbing complaints directly to hostel staff. Displays ticket lifecycle tracking from submission, classification, and priority assignment through final resolution.",
        technicalSignificance: "Powered by low-latency TCP socket communication and asynchronous event dispatching for instant status updates and multi-tier priority queue sorting.",
        isPlaceholder: false
      },
      {
        url: "/images/projects/hostel-management/file_00000000cde08211bc497ed444f98d3e.png",
        title: "Student Profile & Room Inventory Management Directory",
        caption: "Student Profile & Room Inventory Management Directory",
        description: "Comprehensive student directory and room assignment register allowing administrators to inspect hosteller academic details, emergency guardian contacts, room capacity thresholds, and assigned assets.",
        technicalSignificance: "Demonstrates relational DBMS schema normalization, ACID-compliant transactional updates preventing double-booking room allocations, and foreign key integrity across student and room tables.",
        isPlaceholder: false
      },
      {
        url: "/images/projects/hostel-management/file_00000000e1fc82118cba4485621424fb.png",
        title: "Cross-Platform Mobile Self-Service Client (Android & iOS)",
        caption: "Cross-Platform Mobile Self-Service Client (Android & iOS)",
        description: "Mobile application interface allowing resident hostellers to view room details, check attendance logs, receive administrative announcements, and submit maintenance tickets directly from Android and iOS smartphones.",
        technicalSignificance: "Demonstrates full-stack web-to-mobile architecture translation, RESTful API endpoint sharing, and responsive mobile-first UI paradigms for native mobile deployment.",
        isPlaceholder: false
      }
    ],
    images: [
      "/images/projects/hostel-management/file_000000000ec082079e8575c7876945eb.png",
      "/images/projects/hostel-management/file_0000000047c482089747f939c50d223e.png",
      "/images/projects/hostel-management/file_0000000063a48211a6a2e0ac0355bf66.png",
      "/images/projects/hostel-management/file_00000000cde08211bc497ed444f98d3e.png",
      "/images/projects/hostel-management/file_00000000e1fc82118cba4485621424fb.png"
    ],
    githubUrl: "PROJECT_GITHUB_URL", // User placeholder
    liveDemoUrl: "https://hostel-management-api-w0rw.onrender.com", // User placeholder
    docUrl: "PROJECT_DOCS_URL", // User placeholder
    apkUrl: "PROJECT_ANDROID_APK_URL", // User placeholder
    iosUrl: "PROJECT_IOS_APP_URL" // User placeholder
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    subtitle: "Complete Full-Stack Academic Administration Portal",
    badge: "FULL-STACK & DBMS",
    isMajorProject: false,
    featured: true,
    description: "A complete full-stack Student Management System designed to manage student-related information and administrative operations with seamless frontend-to-backend database synchronization.",
    technologies: [
      "Full-Stack Web Development",
      "Java",
      "Python Implementation",
      "Database Technologies (DBMS)",
      "Networking Concepts",
      "CRUD Operations"
    ],
    features: [
      "Student Registration: Streamlined onboarding with input validation and data sanitization",
      "Student Profile Management: Detailed academic, contact, and enrollment records",
      "Complete CRUD Operations: Create, Read, Update, and Delete student records with transactional safety",
      "Frontend & Backend Integration: Dynamic asynchronous UI updates without page reloads",
      "Database-Driven Storage: Structured relational schemas with primary and foreign key constraints",
      "Intuitive User Interface: Clean, accessible administrative layout designed for rapid data entry"
    ],
    engineeringHighlights: [
      "Built with Python and Java implementation modules to explore multi-backend integration paradigms",
      "Utilized networking client-server principles for remote database query execution",
      "Designed resilient error handling and validation for clean student record lifecycle management"
    ],
    architectureOverview: "Admin UI -> HTTP Request Handler -> Controller Logic (Java / Python) -> Database Management System (DBMS Records)",
    screenshots: [
      {
        url: "/images/projects/student-management/student-1.svg",
        title: "Student Directory & Interactive Record Search Table",
        caption: "Student Directory & Interactive Record Search Table",
        description: "Centralized academic administrative interface providing searchable, filterable records of enrolled students. Enables administrators to query by department, enrollment year, academic status, and student registration ID.",
        technicalSignificance: "Demonstrates end-to-end full-stack integration, parameterized SQL database querying with indexing, and responsive data table pagination with asynchronous UI updates.",
        isPlaceholder: false
      }
    ],
    images: [
      "/images/projects/student-management/student-1.svg"
    ],
    githubUrl: "PROJECT_GITHUB_URL",
    liveDemoUrl: "https://student-by-kasi-019.ai.studio",
    docUrl: "PROJECT_DOCS_URL"
  },
  {
    id: "ai-interview-assessment",
    title: "AI Open-Source Interview Knowledge Assessment",
    subtitle: "Intelligent Technical & Communication Evaluation Engine",
    badge: "AI-POWERED & OPEN-SOURCE",
    isMajorProject: false,
    featured: true,
    description: "An AI-powered/open-source interview knowledge assessment system designed to evaluate a candidate's readiness for technical interviews across programming depth, problem solving, and technical communication.",
    technologies: [
      "AI Assessment Concepts",
      "Open-Source Architecture",
      "Knowledge Evaluation Pipelines",
      "Technical Capability Scoring",
      "Report Synthesis Engine",
      "Full-Stack Integration"
    ],
    features: [
      "Question Assessment Engine: Evaluates answers against algorithmic and domain-specific benchmarks",
      "Knowledge Analysis: Breaks down programming concepts and fundamental knowledge accuracy",
      "Technical Depth Evaluation: Evaluates problem-solving methodology, edge-case coverage, and complexity awareness",
      "Communication Evaluation: Analyzes clarity, technical vocabulary, and structured articulation",
      "Dynamic AI Report Generation: Synthesizes a comprehensive readiness scorecard and targeted improvement roadmap"
    ],
    engineeringHighlights: [
      "Designed a 7-stage processing workflow from candidate input to final interview readiness breakdown",
      "Created structured scoring matrices balancing theoretical precision with communication fluency",
      "Open-source modular architecture allowing plug-and-play evaluation modules for different domains"
    ],
    architectureOverview: "Candidate Input -> Question Assessment -> Knowledge Analysis -> Technical Evaluation -> Communication Evaluation -> AI Synthesis Processing -> Interview Readiness Report",
    screenshots: [
      {
        url: "/images/projects/ai-interview/ai-1.svg",
        title: "Candidate Readiness Report & Technical Synthesis Scorecard",
        caption: "Candidate Readiness Report & Technical Synthesis Scorecard",
        description: "Comprehensive technical evaluation report presenting a multi-dimensional analysis of a candidate's programming depth, algorithmic problem solving, and technical communication. Synthesizes qualitative interview feedback into actionable improvement roadmaps.",
        technicalSignificance: "Demonstrates 7-stage evaluation pipeline synthesis, weighted multi-metric scoring aggregation, and automated scorecard generation for objective technical skill benchmarking.",
        isPlaceholder: false
      }
    ],
    images: [
      "/images/projects/ai-interview/ai-1.svg"
    ],
    githubUrl: "PROJECT_GITHUB_URL",
    liveDemoUrl: "PROJECT_LIVE_URL",
    docUrl: "https://go.fliplink.me/view/2CD90CD4-684E-414D-B502-D6FF0B7F0458"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    projectId: "hostel-management-system",
    projectTitle: "Hostel Management System — Multi-Platform Living Ecosystem",
    problem: "Traditional campus hostel management relies on fragmented paper logs, manual roll calls, and unrecorded student complaints. Hostel officers struggled with attendance discrepancies, lost query requests, and delayed emergency notices.",
    research: "Analyzed administrative workflows at collegiate hostels. Identified core bottlenecks in three primary areas: 1) manual attendance logging with zero real-time visibility, 2) lost hosteller maintenance queries, and 3) lack of mobile self-service channels for students.",
    architecture: "Engineered a decoupled, tiered architecture with a centralized Java/Python backend service, relational database management layer, and dedicated daemons: an SMTP Mailer for transactional notices, a TCP socket query receiver for instant ticket status, and automated attendance processors.",
    implementation: "Constructed the web interface with clean modular views for Admin, Officer, and Hosteller roles. Integrated secure token authentication and connection-pooled SQL interactions. Subsequently converted client views into responsive Android and iOS mobile app architectures sharing identical API endpoints.",
    challenges: "Handling concurrent attendance submissions during evening curfew hours without locking the database; designing a reliable notification dispatch mechanism without slowing down main HTTP response loops; preserving state across mobile network disconnects.",
    solution: "Implemented asynchronous background job dispatching for email alerts and roll-call batching. Employed indexed relational schemas for fast lookups. Used responsive mobile application adapters with client caching for offline resilience.",
    result: "Successfully delivered an end-to-end multi-platform management platform that cut query resolution times, eliminated attendance discrepancies, and gave students real-time mobile tracking for all hostel services.",
    learnings: [
      "Mastery of multi-tier software design and asynchronous service orchestration",
      "Real-world networking protocols: TCP socket transmission and SMTP email handshakes",
      "Converting scalable web application logic into native Android and iOS mobile environments",
      "Database schema normalization and concurrency safety in multi-user systems"
    ]
  },
  {
    projectId: "student-management-system",
    projectTitle: "Student Management System — End-to-End Academic CRUD Engine",
    problem: "Academic departments need reliable, rapid software to manage student enrollment, update grades, inspect profile metadata, and archive records with zero data corruption.",
    research: "Studied administrative record-keeping operations and mapped out the exact entity-relationship diagrams necessary to model student profiles, departments, and course progress cleanly.",
    architecture: "Designed a clean 3-tier MVC architecture with frontend presentation, controller routing, service logic, and relational DBMS tables bound by strict foreign key constraints.",
    implementation: "Implemented the core system with Java and Python backends to explore cross-language database connectivity (JDBC / DB-API) and structured SQL query generation.",
    challenges: "Preventing duplicate registration attempts and ensuring that student record updates or deletions maintain referential integrity without orphan records in relational tables.",
    solution: "Used parameterized SQL statements, transaction rollbacks on failure, and robust form validation rules on both frontend and backend layers.",
    result: "Created a robust, full-stack student management portal capable of handling complete CRUD operations smoothly with sub-second response times.",
    learnings: [
      "Deep understanding of DBMS normalization, constraints, and ACID transactions",
      "Clean separation of frontend UI, business controller, and persistence layers",
      "Practical experience integrating Java and Python backend services with relational databases"
    ]
  },
  {
    projectId: "ai-interview-assessment",
    projectTitle: "AI Interview Assessment — Intelligent Technical Evaluation Pipeline",
    problem: "Job candidates and students often lack objective, instant feedback on their technical problem-solving clarity and communication readiness before appearing in real-world software engineering interviews.",
    research: "Researched standard software engineering interview rubrics (technical precision, algorithm optimization, edge-case consideration, communication structure) to model an automated assessment pipeline.",
    architecture: "Constructed a 7-stage evaluation pipeline: Candidate Input -> Question Assessment -> Knowledge Analysis -> Technical Evaluation -> Communication Evaluation -> AI Synthesis Processing -> Interview Readiness Report.",
    implementation: "Designed modular evaluation units that process user code and spoken/written explanations, cross-referencing knowledge graphs to compute quantitative readiness ratings across multiple technical dimensions.",
    challenges: "Balancing the evaluation of raw programming correctness against communication fluency, avoiding biased scoring, and formatting actionable advice in human-readable reports.",
    solution: "Established multi-parameter weighting algorithms that isolate syntax accuracy, conceptual understanding, and articulation into distinct radar charts with concrete improvement tips.",
    result: "Delivered a functioning prototype assessment engine that generates structured, personalized interview readiness dossiers for students and aspiring developers.",
    learnings: [
      "Designing multi-stage automated processing pipelines for unstructured technical input",
      "Balancing multidimensional scoring criteria (syntax, logic, communication)",
      "Open-source modular architecture principles for extensible developer tooling"
    ]
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "hackathon-bit-erode",
    title: "Hackathon 2nd Prize / Winner Distinction",
    event: "Inter-College Hackathon Competition",
    institution: "Bannari Amman Institute of Technology (BIT)",
    location: "Erode, Tamil Nadu",
    rank: "2nd Prize / Winner",
    distinctionNote: "Participated in 2 hackathon events. Secured 2nd Prize in the hackathon conducted by Bannari Amman Institute of Technology (BIT), Erode (also noted as winner distinction in event records; certificate-backed wording editable below).",
    category: "hackathon",
    description: "Competed in high-intensity problem-solving sprint, architecting rapid prototype software solutions under rigorous time constraints and presenting before technical judging panels.",
    certificatePlaceholder: "/images/certificates/hackathon-2nd-prize.png",
    tags: ["Hackathon", "Rapid Prototyping", "Team Collaboration", "Problem Solving"]
  },
  {
    id: "prototype-game-innovation",
    title: "Prototype Software Innovation — Game Development",
    event: "Prototype Software Innovation Challenge",
    institution: "Bannari Amman Institute of Technology (BIT) / Technical Symposium",
    location: "Erode, Tamil Nadu",
    rank: "Second Prize",
    category: "prototype",
    description: "Awarded Second Prize for Prototype Software Innovation in Game Development using well-defined technologies, designing interactive game logic, real-time mechanics, and responsive player control systems.",
    certificatePlaceholder: "/images/certificates/prototype-innovation.jpg",
    tags: ["Prototype Innovation", "Game Development", "Logic Systems", "Second Prize"]
  }
];

export const NPTEL_CERTIFICATION = {
  courseTitle: "Programming in Java",
  issuingBody: "NPTEL (National Programme on Technology Enhanced Learning)",
  status: "Course Completed / Certified",
  scoreBadge: "NPTEL Certified",
  description: "Comprehensive elite course certification covering Core Java, Object-Oriented Programming, Java Memory Model, Multithreading, Exception Handling, I/O Streams, Collections Framework, and AWT/Swing.",
  certificatePlaceholder: "/images/certificates/nptel-java.svg"
};

export const PRESENTATIONS_DATA: PresentationItem[] = [
  {
    id: "paper-1",
    title: "Technical Paper Presentation — Emerging Computing & Software Paradigms",
    event: "Intra & Inter-College Technical Symposiums",
    institution: "Government College of Engineering / Partner Institutions",
    date: "2024 – 2025",
    award: "Participant & Recognized Presenter",
    description: "Presented research and technical implementation concepts across multiple intra-college and inter-college paper presentation competitions, showcasing software engineering architectures and modern technological advancements.",
    certificatePlaceholder: "/images/certificates/hackathon-2nd-prize.png",
    presentationLink: "PRESENTATION_SLIDES_URL"
  },
  {
    id: "paper-2",
    title: "Technical Symposium Presentations (Outside Campus)",
    event: "External Campus Engineering Competitions",
    institution: "Outside-Campus College Technical Festivals",
    date: "2024 – 2025",
    award: "Active Competitor",
    description: "Demonstrated strong oral communication, technical defense, and slide presentation skills addressing panel queries on computer science fundamentals and software system design.",
    certificatePlaceholder: "/certificates/external-paper-cert.pdf",
    presentationLink: "PRESENTATION_SLIDES_URL"
  }
];

export const CURRENTLY_LEARNING_DATA: LearningTopic[] = [
  {
    title: "Advanced Full-Stack Development",
    domain: "Web & Enterprise Systems",
    status: "Active Implementation",
    description: "Deepening knowledge of microservices orchestration, server-side caching with Redis, GraphQL APIs, and robust frontend state machines.",
    keyConcepts: ["Microservices", "Serverless Functions", "State Management", "Caching"]
  },
  {
    title: "Advanced Java & JVM Internals",
    domain: "Language & Runtime Depth",
    status: "Deep Dive",
    description: "Exploring Spring Boot enterprise ecosystem, JVM garbage collection tuning, memory management, and reactive Java streams.",
    keyConcepts: ["Spring Boot", "JVM Internals", "Reactive Streams", "Concurrency"]
  },
  {
    title: "Application Development & Ecosystems",
    domain: "Mobile & Cross-Platform",
    status: "Exploring",
    description: "Studying advanced native bridge mechanics, background synchronization tasks, push notification servers, and app store deployment lifecycles.",
    keyConcepts: ["Background Sync", "Push Daemons", "App Lifecycles", "Native Modules"]
  },
  {
    title: "AI-Powered Applications & Agents",
    domain: "Artificial Intelligence",
    status: "Exploring",
    description: "Building intelligent software workflows that integrate LLM APIs, vector embeddings, autonomous agent tools, and knowledge retrieval.",
    keyConcepts: ["LLM Integrations", "Vector Databases", "Prompt Engineering", "Autonomous Workflows"]
  },
  {
    title: "System Design & Scalable Architecture",
    domain: "Distributed Systems",
    status: "Exploring",
    description: "Studying horizontal scaling, load balancing, database sharding, CAP theorem trade-offs, and fault-tolerant message brokers.",
    keyConcepts: ["Load Balancers", "Database Sharding", "CAP Theorem", "Message Queues"]
  },
  {
    title: "Advanced Database Concepts & Networking",
    domain: "Infrastructure & Protocols",
    status: "Active Implementation",
    description: "Investigating distributed transaction protocols, query execution plans, TCP socket multiplexing, and secure network encryption.",
    keyConcepts: ["Query Optimization", "Distributed ACID", "Socket Multiplexing", "TLS/SSL Handshake"]
  }
];

export const DEVELOPER_JOURNEY_STEPS = [
  {
    step: "01",
    title: "Computer Science Student",
    subtext: "Enrolled in B.E. CSE at GCE Sengipatti (8.9 CGPA)",
    icon: "GraduationCap",
    status: "FOUNDATION"
  },
  {
    step: "02",
    title: "Java Programming Mastery",
    subtext: "Mastered Core Java, OOP, Collections & NPTEL Certification",
    icon: "Coffee",
    status: "PRIMARY LANGUAGE"
  },
  {
    step: "03",
    title: "Full-Stack Development",
    subtext: "Built Frontend interfaces, RESTful APIs, and Database layers",
    icon: "Layers",
    status: "CORE SKILL"
  },
  {
    step: "04",
    title: "Student Management System",
    subtext: "End-to-End academic CRUD platform with Java/Python & DBMS",
    icon: "FolderGit2",
    status: "PROJECT 01"
  },
  {
    step: "05",
    title: "Hostel Management System",
    subtext: "Major campus system with TCP queries, SMTP alerts & Auto-attendance",
    icon: "Building2",
    status: "PROJECT 02 (MAJOR)"
  },
  {
    step: "06",
    title: "Mobile Application Ecosystem",
    subtext: "Converted Hostel System into Android & iOS client applications",
    icon: "Smartphone",
    status: "FROM WEB TO MOBILE"
  },
  {
    step: "07",
    title: "AI Interview Assessment",
    subtext: "Constructed 7-stage automated technical readiness evaluator",
    icon: "Sparkles",
    status: "PROJECT 03 (AI)"
  },
  {
    step: "08",
    title: "Hackathons & Innovation Awards",
    subtext: "2nd Prize at BIT Erode & Game Prototype Innovation Prize",
    icon: "Trophy",
    status: "ACHIEVEMENTS"
  },
  {
    step: "09",
    title: "Technical Presentations",
    subtext: "Symposium papers and technical defense across multiple colleges",
    icon: "Presentation",
    status: "COMMUNICATION"
  },
  {
    step: "10",
    title: "Continuous Learning",
    subtext: "Exploring System Design, Advanced JVM, and AI Systems",
    icon: "Flame",
    status: "CURRENT FOCUS"
  },
  {
    step: "11",
    title: "Future Software Engineer",
    subtext: "Ready to engineer impactful, scalable enterprise solutions",
    icon: "Rocket",
    status: "DESTINATION"
  }
];  
