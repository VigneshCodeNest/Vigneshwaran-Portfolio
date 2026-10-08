import { Bot, Briefcase, Layers, Server, type LucideIcon } from 'lucide-react'

export interface Highlight {
  title: string
  description: string
  icon: LucideIcon
}

export const highlights: Highlight[] = [
  {
    title: 'Backend Development',
    description: 'Hands-on experience with Spring Boot, Django, FastAPI, REST APIs, and authentication.',
    icon: Server,
  },
  {
    title: 'AI-Powered Applications',
    description: 'Experience building LLM-based diagnostic and e-commerce automation projects.',
    icon: Bot,
  },
  {
    title: 'Full Stack Foundation',
    description: 'Knowledge of Java, Python, HTML, CSS, JavaScript, MySQL, and web application development.',
    icon: Layers,
  },
  {
    title: 'Hands-on Internship',
    description: 'Practical experience developing a Django-based Student Portal during internship.',
    icon: Briefcase,
  },
]
