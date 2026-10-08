import { Code2, Database, Layers, Puzzle, Server, Wrench, type LucideIcon } from 'lucide-react'

export interface SkillCategory {
  title: string
  icon: LucideIcon
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  { title: 'Programming Languages', icon: Code2, items: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL'] },
  { title: 'Frameworks', icon: Layers, items: ['Spring Boot', 'Django'] },
  {
    title: 'Backend & APIs',
    icon: Server,
    items: ['REST APIs', 'JWT Authentication', 'Microservices', 'Backend Development'],
  },
  { title: 'Databases', icon: Database, items: ['MySQL'] },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    items: ['Git', 'GitHub', 'Visual Studio Code', 'Eclipse', 'IntelliJ IDEA', 'Postman'],
  },
  {
    title: 'Core Strengths',
    icon: Puzzle,
    items: [
      'Problem Solving',
      'Technical Communication',
      'Backend Development',
      'API Development',
      'Debugging',
      'Software Development',
    ],
  },
]
