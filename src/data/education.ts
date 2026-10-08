export interface EducationItem {
  degree: string
  institution: string
  field: string
  period: string
  scoreLabel: string
  score: string
}

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering',
    institution: 'University College of Engineering, Kanchipuram',
    field: 'Computer Science and Engineering',
    period: 'October 2022 – May 2026',
    scoreLabel: 'CGPA',
    score: '7.7',
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Lourdu Annai Higher Secondary School',
    field: 'Computer Science with Mathematics',
    period: 'June 2021 – May 2022',
    scoreLabel: 'Percentage',
    score: '86.6%',
  },
]
