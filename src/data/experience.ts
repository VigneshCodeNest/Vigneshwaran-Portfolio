export interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  type: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Backend Developer Intern',
    company: 'NexGen Innovator Solutions',
    location: 'Chennai, India',
    period: 'June 24, 2025 – July 31, 2025',
    type: 'Internship',
    description:
      'Completed a hands-on backend development internship at NexGen Innovator Solutions, working on a Student Portal using the Python Django framework.',
    responsibilities: [
      'Developed modules for student profile management.',
      'Implemented student registration functionality.',
      'Worked with user authentication and secure data handling.',
      'Contributed to backend application development using Django.',
      'Helped create responsive and intuitive web interfaces.',
      'Worked with database-driven application workflows.',
      'Followed structured development practices.',
      'Delivered assigned project milestones within deadlines.',
    ],
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Database Management'],
  },
]
