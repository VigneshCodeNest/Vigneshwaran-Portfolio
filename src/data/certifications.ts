export interface Certificate {
  id: string
  title: string
  issuer: string
  partner?: string
  date: string
  regNo?: string
  certificateNo?: string
  description: string
  skills: string[]
  image: string
  pdfUrl: string
  verifyUrl?: string
}

export const certificates: Certificate[] = [
  {
    id: 'java-springboot',
    title: 'Java with Spring Boot',
    issuer: 'Tamil Nadu Skill Development Corporation (Naan Mudhalvan Scheme)',
    partner: 'digiSailor',
    date: 'Sep 2025',
    regNo: '513422104021',
    certificateNo: 'NME2425EAU29203056082',
    description:
      'Certificate of Achievement for successfully completing comprehensive training in Java, Spring Boot framework, RESTful API development, and backend application architecture.',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Backend Development'],
    image: '/certificates/java-springboot.jpg',
    pdfUrl: '/certificates/java-springboot.pdf',
  },
  {
    id: 'ibm-ai-fundamentals',
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'Feb 2026',
    description:
      'In recognition of the commitment to achieve professional excellence in Artificial Intelligence Fundamentals, covering foundational AI concepts, machine learning principles, and applications.',
    skills: ['Artificial Intelligence', 'Machine Learning', 'AI Fundamentals'],
    image: '/certificates/ibm-ai-fundamentals.jpg',
    pdfUrl: '/certificates/ibm-ai-fundamentals.pdf',
    verifyUrl: 'https://www.credly.com/badges/27a32cb6-d0b3-4c50-bd70-a05cfb596a06',
  },
  {
    id: 'nexgen-internship',
    title: 'Backend Developer Internship Completion',
    issuer: 'NexGen Innovator Solutions, Chennai',
    date: 'June 2025 – July 2025',
    regNo: '513422104021',
    description:
      'Completed internship developing the Student Portfolio Portal with Generative AI using Python Django framework. Responsible for user authentication, student registration, profile management, and secure data handling.',
    skills: ['Python', 'Django', 'REST APIs', 'Authentication', 'Full Stack Development'],
    image: '/certificates/nexgen-internship.jpg',
    pdfUrl: '/certificates/nexgen-internship.pdf',
  },
  {
    id: 'experience-project-learning',
    title: 'Experience Based Project Learning',
    issuer: 'Tamil Nadu Skill Development Corporation (Naan Mudhalvan Scheme)',
    partner: 'HCL / Career Shaper',
    date: 'Sep 2025',
    regNo: '513422104021',
    certificateNo: 'NME2324EAU25453056082',
    description:
      'Certificate of Achievement for successful completion of hands-on, project-based engineering development sponsored by Naan Mudhalvan and conducted by HCL.',
    skills: ['Project Learning', 'Software Engineering', 'Applied Development'],
    image: '/certificates/experience-project-learning.jpg',
    pdfUrl: '/certificates/experience-project-learning.pdf',
  },
]
