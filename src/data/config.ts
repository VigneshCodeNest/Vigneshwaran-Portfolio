/**
 * Central place for personal details and links.
 * Replace the YOUR_* placeholders with your real URLs. Anything still
 * containing "YOUR_" is shown as a disabled, clearly marked link.
 */
export const profile = {
  name: 'Vigneshwaran B',
  logo: 'VB.',
  role: 'Java Full Stack Developer',
  email: 'vigneshwaranuec@gmail.com',
  phone: '+91 8637640729',
  phoneHref: 'tel:+918637640729',
  location: 'Tamil Nadu, India',
  github: 'https://github.com/VigneshCodeNest',
  linkedin: 'https://www.linkedin.com/in/vigneshwaranuec/?isSelfProfile=true',
  resumeUrl: '/resume/Vigneshwaran_B_Resume.pdf',
  avatar: '/images/profile.jpg',
}

export const isPlaceholder = (url?: string): boolean => !url || url.includes('YOUR_')

export const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

export const navIds = navLinks.map((l) => l.id)
