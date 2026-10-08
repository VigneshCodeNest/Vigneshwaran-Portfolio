import { Bot, Layers, Server, type LucideIcon } from 'lucide-react'

export const aboutParagraphs = [
  'I am Vigneshwaran B, a Java Full Stack Developer with a strong foundation in Java, Python, web development, Spring Boot, Django, REST APIs, and MySQL.',
  'Through internship experience and hands-on projects, I have worked on backend services, authentication, database-driven applications, AI-powered systems, and web application development.',
  'I enjoy solving technical problems, designing backend systems, building APIs, and exploring how AI can be integrated into practical software applications.',
  'I am currently looking for an opportunity where I can contribute to real-world software projects while continuously improving my engineering skills.',
]

export interface AboutHighlight {
  title: string
  detail: string
  icon: LucideIcon
}

export const aboutHighlights: AboutHighlight[] = [
  { title: 'Backend Development', detail: 'Java • Spring Boot • REST APIs', icon: Server },
  { title: 'Full Stack Development', detail: 'HTML • CSS • JavaScript • React-ready development', icon: Layers },
  { title: 'AI & Automation', detail: 'Python • NLP • LLM Applications', icon: Bot },
]
