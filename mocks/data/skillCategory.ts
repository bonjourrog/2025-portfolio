import { SkillCategory } from "@/entity/skillsCategory";

export const SKILLCATEGORY_DATA_MOCK: SkillCategory[] = [
    {
        id: 1,
        category: 'Frontend',
        skills: ['React & React Hooks', 'Next.js', 'HTML5 & CSS3', 'Tailwind CSS', 'JavaScript (ES6+)', 'Responsive Design', 'TypeScript', 'React Testing Library & Vitest']
    },
    {
        id: 2,
        category: 'Backend & DevOps',
        skills: ['Golang', 'PostreSQL', 'MongoDB', 'Supabase', 'Git', 'GitHub', 'CI/CD Pipelines', 'Cron Jobs']
    },
    {
        id: 3,
        category: 'Herramientas & Metodología',
        skills: ['Scrum Agile', 'REST APIs', 'Database Design', 'Version Control', 'Debugging & Optimization', 'Testing']
    }
];