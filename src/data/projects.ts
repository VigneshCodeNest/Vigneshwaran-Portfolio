/**
 * Project content. Everything here is based only on the provided details.
 * - Replace github / demo placeholders (YOUR_*) with real URLs. Placeholders render as disabled buttons.
 * - "problem", "solution", "contribution" and "futureImprovements" reflect exact project scope.
 */

export interface FeatureCategory {
  title: string
  items: string[]
}

export interface MetricHighlight {
  badge: string
  title: string
  description: string
}

export interface WorkflowStep {
  step: number
  title: string
  description: string
}

export interface SecurityItem {
  title: string
  description: string
}

export interface ApiCommunicationItem {
  type: string
  features: string[]
}

export interface Project {
  id: string
  title: string
  subtitle?: string
  category: string
  categories: string[]
  description: string
  cardDescription?: string
  detailedDescription?: string
  problem: string
  problemPoints?: string[]
  solution: string
  solutionFlow?: string[]
  cardTechnologies?: string[]
  technologies: string[]
  allTags?: string[]
  highlights: string[]
  featureCategories?: FeatureCategory[]
  metrics?: MetricHighlight[]
  architectureTitle: string
  architecture: string[]
  useCustomArchitectureDiagram?: boolean
  realtimeWorkflow?: WorkflowStep[]
  security?: SecurityItem[]
  databaseInfo?: {
    summary: string
  }
  apiCommunication?: ApiCommunicationItem[]
  developmentTools?: {
    tools: string[]
    summary: string
  }
  contributionTitle?: string
  contribution: string[]
  futureImprovements: string[]
  github: string
  demo?: string
  hasCustomCardVisual?: boolean
}

export const projects: Project[] = [
  {
    id: 'connectly',
    title: 'Connectly',
    subtitle: 'Real-Time Messaging Application',
    category: 'Full Stack Development / Real-Time Communication / Java Backend',
    categories: ['Full Stack', 'Backend', 'Real-Time'],
    cardDescription:
      'Secure full-stack messaging platform with real-time communication, private/group chats, media sharing, and JWT-based authentication.',
    description:
      'Connectly is a full-stack real-time messaging application designed to provide a secure and seamless communication experience. Users can connect through email-based connection requests and communicate through private or group conversations.',
    detailedDescription:
      'Connectly is a full-stack real-time messaging application focused on secure, responsive, and seamless communication between users. The application supports private and group conversations while providing real-time message delivery through WebSocket communication.',
    problem:
      'Traditional request/response-based communication alone is not ideal for instant messaging because users expect messages to appear immediately without manually refreshing the application.',
    problemPoints: [
      'REST APIs for standard application operations',
      'WebSocket for real-time communication',
      'JWT authentication for secure user sessions',
      'MySQL for persistent messaging and user data',
    ],
    solution:
      'Connectly combines a React.js frontend with a Java Spring Boot backend to provide a complete real-time communication platform. REST APIs handle standard operations such as authentication, user management, connections, and message-related requests, while WebSocket enables real-time message communication and status updates.',
    solutionFlow: [
      'Frontend',
      'REST API / WebSocket',
      'Spring Boot Backend',
      'Spring Security / JWT',
      'Spring Data JPA / Hibernate',
      'MySQL',
    ],
    cardTechnologies: [
      'Java',
      'Spring Boot',
      'React.js',
      'WebSocket',
      'MySQL',
      'JWT',
      'Spring Security',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'React.js',
      'JavaScript',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate',
      'MySQL',
      'REST API',
      'WebSocket',
      'JWT',
      'BCrypt',
      'Maven',
      'Git',
      'GitHub',
      'Postman',
    ],
    highlights: [
      'Private and group real-time conversations with instant message dispatch.',
      'JWT authentication, Spring Security, and BCrypt password hashing.',
      'Message controls: reply, forward, star, delete, and read receipts.',
      'Email-based connection requests and block/unblock user management.',
      '24-hour expiring status updates (text/image) and chat notification muting.',
      'Spring Data JPA and Hibernate ORM for reliable persistence in MySQL.',
    ],
    featureCategories: [
      {
        title: 'Authentication & Security',
        items: [
          'JWT authentication',
          'Spring Security',
          'BCrypt password hashing',
          'Secure user sessions',
        ],
      },
      {
        title: 'Messaging',
        items: [
          'Private conversations',
          'Group conversations',
          'Real-time messaging',
          'Text messages',
          'Image messages',
          'Video messages',
          'Sticker messages',
        ],
      },
      {
        title: 'Message Management',
        items: [
          'Reply to messages',
          'Forward messages',
          'Star messages',
          'Delete messages',
          'Sent status',
          'Delivered status',
          'Read status',
        ],
      },
      {
        title: 'Connection Management',
        items: [
          'Email-based connection requests',
          'User management',
          'Block users',
          'Unblock users',
        ],
      },
      {
        title: 'Status & Notifications',
        items: [
          'Text status',
          'Image status',
          '24-hour status expiration',
          'Chat notification muting',
        ],
      },
      {
        title: 'Account Management',
        items: [
          'Profile management',
          'Password management',
        ],
      },
    ],
    metrics: [
      { badge: '⚡ Real-Time', title: 'Real-Time', description: 'WebSocket-powered communication' },
      { badge: '🔐 Secure', title: 'Secure', description: 'JWT + Spring Security + BCrypt' },
      { badge: '💬 Messaging', title: 'Messaging', description: 'Private and group conversations' },
      { badge: '🧩 Full Stack', title: 'Full Stack', description: 'React.js + Spring Boot + MySQL' },
    ],
    architectureTitle: 'Real-Time Architecture',
    architecture: [
      'React.js Frontend',
      'REST API / WebSocket',
      'Spring Boot Backend (Spring Security + JWT)',
      'Service Layer & REST Controllers',
      'Spring Data JPA / Hibernate',
      'MySQL Database',
    ],
    useCustomArchitectureDiagram: true,
    realtimeWorkflow: [
      { step: 1, title: 'User Login', description: 'User logs into Connectly.' },
      { step: 2, title: 'JWT Authentication', description: 'Backend authenticates the user using JWT.' },
      { step: 3, title: 'Conversation Access', description: 'User opens a private or group conversation.' },
      { step: 4, title: 'WebSocket Channel', description: 'WebSocket establishes the real-time communication channel.' },
      { step: 5, title: 'Message Dispatch', description: 'User sends a message.' },
      { step: 6, title: 'Backend Processing', description: 'Backend processes the message.' },
      { step: 7, title: 'Data Persistence', description: 'Message is persisted in MySQL.' },
      { step: 8, title: 'Real-Time Delivery', description: 'WebSocket delivers the message to connected recipients.' },
      { step: 9, title: 'Status Lifecycle', description: 'Message status can transition through sent, delivered, and read states.' },
    ],
    security: [
      {
        title: 'JWT Authentication',
        description: 'JWT is used to authenticate users and secure API access.',
      },
      {
        title: 'Spring Security',
        description: 'Spring Security handles authentication and authorization mechanisms.',
      },
      {
        title: 'BCrypt',
        description: 'BCrypt is used for secure password hashing.',
      },
    ],
    databaseInfo: {
      summary:
        'MySQL is used to persist application data including users, conversations, messages, connections, and other application-related records.',
    },
    apiCommunication: [
      {
        type: 'REST API',
        features: [
          'Authentication',
          'User management',
          'Connection management',
          'Profile operations',
          'Message-related operations',
          'Other standard application requests',
        ],
      },
      {
        type: 'WebSocket',
        features: [
          'Real-time messaging',
          'Instant communication',
          'Real-time message delivery',
          'Real-time communication events',
        ],
      },
    ],
    developmentTools: {
      tools: ['Maven', 'Git', 'GitHub', 'Postman'],
      summary:
        'Maven was used for Java project dependency and build management, Git/GitHub for source control, and Postman for API development and testing.',
    },
    contributionTitle: 'Key Development Areas',
    contribution: [
      'Developed full-stack application architecture using React.js and Spring Boot.',
      'Implemented secure authentication using JWT and Spring Security.',
      'Built REST APIs for application functionality.',
      'Integrated WebSocket-based real-time communication.',
      'Worked with Spring Data JPA, Hibernate, and MySQL for data persistence.',
      'Implemented private and group messaging workflows.',
      'Added message management features including reply, forwarding, starring, deletion, and status tracking.',
      'Implemented user connection and management functionality.',
      'Integrated media and status-related features.',
      'Tested APIs using Postman.',
    ],
    futureImprovements: [
      'Implement end-to-end encryption for direct messages.',
      'Add voice and audio messaging capabilities.',
      'Support automated background push notifications.',
    ],
    github: 'YOUR_CONNECTLY_GITHUB_URL',
    demo: '',
    hasCustomCardVisual: true,
  },
  {
    id: 'predictive-maintenance',
    title: 'Autonomous Predictive Maintenance System',
    category: 'AI / Backend / Predictive Maintenance',
    categories: ['Backend', 'AI'],
    description:
      'An LLM-based vehicle diagnostics system designed for real-time root cause analysis, anomaly detection, predictive maintenance, and fleet health monitoring.',
    problem:
      'Helps identify vehicle issues early, explain their root cause, and act on them through risk alerts and service scheduling, while keeping track of overall fleet health.',
    solution:
      'A microservice-based backend built with FastAPI and Spring Boot and secured with JWT authentication. Vehicle data passes through diagnostic and anomaly detection services, an LLM-based step produces root cause analysis, and the results feed risk assessment and automated service scheduling.',
    highlights: [
      'Built backend microservices using FastAPI and Spring Boot.',
      'Implemented secure JWT-based authentication.',
      'Developed REST APIs for risk alerts.',
      'Created APIs for automated service scheduling.',
      'Designed real-time fleet health monitoring functionality.',
      'Integrated AI/LLM concepts for vehicle diagnostics.',
      'Focused on scalable backend architecture.',
    ],
    architectureTitle: 'Architecture',
    architecture: [
      'Vehicle Data',
      'Diagnostic Service',
      'Anomaly Detection',
      'LLM-based RCA',
      'Risk Assessment',
      'Service Scheduling',
    ],
    technologies: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'REST APIs', 'JWT', 'LLM', 'Microservices'],
    contribution: [
      'Built backend microservices using FastAPI and Spring Boot.',
      'Implemented JWT-based authentication for secure access.',
      'Developed REST APIs for risk alerts and automated service scheduling.',
      'Designed the real-time fleet health monitoring functionality.',
    ],
    futureImprovements: [
      'Add automated tests and API documentation for each service.',
      'Containerize the services for simpler deployment.',
      'Extend fleet health views on top of the existing monitoring APIs.',
    ],
    github: 'YOUR_GITHUB_REPOSITORY_URL',
    demo: 'YOUR_LIVE_DEMO_URL',
  },
  {
    id: 'ecostream-lite',
    title: 'EcoStream-Lite',
    subtitle: 'Agentic AI Framework for E-Commerce Automation',
    category: 'AI / NLP / Automation',
    categories: ['AI'],
    description:
      'A resource-efficient agentic AI system designed to automate common e-commerce workflows using Python, NLP, and lightweight language models.',
    problem:
      'E-commerce work such as writing product descriptions, replying to customers, and reading sentiment is repetitive, and many AI tools need heavy hardware. This project targets low-resource environments.',
    solution:
      'A Python-based AI agent that takes product or customer input, processes it with NLP, selects the right task, and either generates text with DistilGPT-2 or runs sentiment analysis. Results are shown on a centralized dashboard, and the system runs on CPU only.',
    highlights: [
      'Automated product description generation.',
      'Automated customer response generation.',
      'Sentiment analysis.',
      'Prompt-driven text generation.',
      'Centralized dashboard control.',
      'CPU-only deployment.',
      'Designed for low-resource environments.',
      'Used DistilGPT-2 for lightweight language generation.',
    ],
    architectureTitle: 'Workflow',
    architecture: [
      'Product / Customer Input',
      'NLP Processing',
      'AI Agent',
      'Task Selection',
      'Text Generation / Sentiment Analysis',
      'Dashboard Output',
    ],
    technologies: ['Python', 'NLP', 'DistilGPT-2', 'LLM', 'Prompt Engineering', 'AI Automation'],
    contribution: [
      'Built the Python and NLP pipeline for product description and customer response generation.',
      'Added sentiment analysis and prompt-driven text generation.',
      'Created the centralized dashboard for controlling tasks.',
      'Configured the system for CPU-only, low-resource deployment using DistilGPT-2.',
    ],
    futureImprovements: [
      'Add more e-commerce tasks to the agent’s task selection.',
      'Add automated tests for the generation and sentiment steps.',
      'Package the application for simpler deployment.',
    ],
    github: 'YOUR_GITHUB_REPOSITORY_URL',
    demo: 'YOUR_LIVE_DEMO_URL',
  },
]
