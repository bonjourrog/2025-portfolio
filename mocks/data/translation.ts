export const translations = {
    en: {
        nav: ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'],
        hero: {
            title: 'Full-Stack Developer',
            subtitle: 'Specialized in building modern, scalable web experiences using React, Next.js, TypeScript, AWS and Go.',
            cta: 'View my projects'
        },
        about: {
            title: 'About me',
            p1: "I'm a Full-Stack Developer with 2+ years of professional experience building real web applications. I specialize in React, TypeScript and Go, and I care about writing clean, maintainable code that solves real problems.",
            p2: "I reduced contract processing time by 80% at a car rental company through better tooling, and I founded GymPulse — a gym management SaaS that's live and being used by a real client today.",
            journeyTitle: 'My journey:',
            journey: [
                '→ Full-Stack Developer at Triple i Soluciones',
                '→ Web Developer at Blue Bay Car Rental',
                '→ Founder of GymPulse — live SaaS product'
            ]
        },
        experience: {
            title: 'Experience'
        },
        projects: {
            title: 'Featured Projects'
        },
        skills: {
            title: 'Technical Skills'
        },
        contact: {
            title: "Let's work together",
            subtitle: "I'm open to new projects, collaborations and job opportunities. Feel free to reach out.",
            email: 'Send Email',
            linkedin: 'LinkedIn'
        },
        footer: 'Built with Next.js and Tailwind.'
    },
    es: {
        nav: ['Inicio', 'Acerca', 'Experiencia', 'Proyectos', 'Skills', 'Contacto'],
        hero: {
            title: 'Desarrollador Full-Stack especializado en Frontend',
            subtitle: 'Especializado en crear experiencias web modernas y escalables con React, Next.js, TypeScript y Go.',
            cta: 'Ver mis proyectos'
        },
        about: {
            title: 'Sobre mí',
            p1: 'Soy desarrollador Full-Stack con más de 2 años de experiencia profesional construyendo aplicaciones web reales. Me especializo en React, TypeScript y Go, y me enfoco en escribir código limpio y mantenible que resuelva problemas concretos.',
            p2: 'Reduje el tiempo de procesamiento de contratos un 80% en una empresa de renta de autos, y fundé GymPulse — un SaaS de gestión de gimnasios que está en producción y siendo usado por un cliente real hoy.',
            journeyTitle: 'Mi camino:',
            journey: [
                '→ Desarrollador Full-Stack en Triple i Soluciones',
                '→ Web Developer en Blue Bay Car Rental',
                '→ Fundador de GymPulse — producto SaaS en producción'
            ]
        },
        experience: {
            title: 'Experiencia'
        },
        projects: {
            title: 'Proyectos Destacados'
        },
        skills: {
            title: 'Habilidades Técnicas'
        },
        contact: {
            title: 'Trabajemos Juntos',
            subtitle: 'Estoy disponible para proyectos nuevos, colaboraciones y oportunidades. No dudes en contactarme.',
            email: 'Enviar Email',
            linkedin: 'LinkedIn'
        },
        footer: 'Construido con Next.js y Tailwind.'
    }
};

export const experienceData = {
    en: [
        {
            id: 1,
            title: 'Founder & Full-Stack Developer',
            role: 'GymPulse · Personal Project',
            date: 'Sep 2025 – Present',
            description: 'Built a gym management SaaS from scratch. Currently live and in active use by a real client, with plans to scale to more gyms.',
            skills: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Cron Jobs', 'Git / GitHub']
        },
        {
            id: 2,
            title: 'Web Developer',
            role: 'Blue Bay Car Rental · Full Time',
            date: 'Jan 2024 – Dec 2024',
            description: 'Built a public website and an internal contract management system that reduced contract creation time from 25 minutes to under 5 — an 80% improvement. Also delivered a real estate portal in React and two WordPress sites for restaurants for the same client.',
            skills: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'WordPress', 'Git / GitHub']
        },
        {
            id: 3,
            title: 'Web Developer',
            role: 'Castaways Real Estate / Bevao · Full Time',
            date: 'Aug 2022 – Sep 2022',
            description: 'Migrated the company website from Wix to a custom WordPress implementation. Improved performance, SEO, and implemented a mobile-first responsive design.',
            skills: ['WordPress', 'Responsive Design', 'CSS', 'SEO', 'Git']
        },
        {
            id: 4,
            title: 'Full-Stack Developer',
            role: 'Triple i Soluciones · Full Time',
            date: 'Aug 2021 – May 2022',
            description: 'Developed frontend components and backend features in a remote agile team. Wrote unit tests and participated in code reviews and sprint planning.',
            skills: ['Angular', 'TypeScript', 'Golang', 'Tailwind CSS', 'MongoDB', 'Git / GitLab', 'Jasmine Testing', 'Scrum']
        }
    ],
    es: [
        {
            id: 1,
            title: 'Fundador & Desarrollador Full-Stack',
            role: 'GymPulse · Proyecto Propio',
            date: 'Sep 2025 – Presente',
            description: 'Construí un SaaS de gestión de gimnasios desde cero. Actualmente en producción y en uso activo por un cliente real, con planes de escalar a más gimnasios.',
            skills: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Cron Jobs', 'Git / GitHub']
        },
        {
            id: 2,
            title: 'Desarrollador Web',
            role: 'Blue Bay Car Rental · Tiempo Completo',
            date: 'Ene 2024 – Dic 2024',
            description: 'Construí el sitio web público y un sistema interno de gestión de contratos que redujo el tiempo de creación de 25 minutos a menos de 5 — una mejora del 80%. También entregué un portal de bienes raíces en React y dos sitios WordPress para restaurantes del mismo cliente.',
            skills: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'WordPress', 'Git / GitHub']
        },
        {
            id: 3,
            title: 'Desarrollador Web',
            role: 'Castaways Real Estate / Bevao · Tiempo Completo',
            date: 'Ago 2022 – Sep 2022',
            description: 'Migré el sitio web de Wix a WordPress personalizado. Mejoré el rendimiento, SEO e implementé diseño responsive con enfoque mobile-first.',
            skills: ['WordPress', 'Responsive Design', 'CSS', 'SEO', 'Git']
        },
        {
            id: 4,
            title: 'Desarrollador Full-Stack',
            role: 'Triple i Soluciones · Tiempo Completo',
            date: 'Ago 2021 – May 2022',
            description: 'Desarrollé componentes frontend y funcionalidades backend en un equipo ágil remoto. Escribí pruebas unitarias y participé en revisiones de código y planificación de sprints.',
            skills: ['Angular', 'TypeScript', 'Golang', 'Tailwind CSS', 'MongoDB', 'Git / GitLab', 'Jasmine Testing', 'Scrum']
        }
    ]
};

export const projectsData = {
    en: [
        {
            id: 1,
            title: 'GymPulse',
            description: 'Gym management SaaS with member management, attendance tracking, package creation, subscriptions and automated reports. Currently live and used by a real client.',
            technologies: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
            badge: 'Live product'
        },
        {
            id: 2,
            title: 'Job Board Platform',
            description: 'Full-stack job board connecting local job seekers with employers. Features advanced search filters, company dashboard, and applicant management.',
            technologies: ['React', 'TypeScript', 'Golang', 'MongoDB'],
            badge: null
        },
        {
            id: 3,
            title: 'Contract Management System',
            description: 'Internal system for Blue Bay Car Rental to manage contracts, clients and vehicle inventory. Reduced contract creation time by 80% through smart forms and real-time validation.',
            technologies: ['React', 'TypeScript', 'Tailwind CSS'],
            badge: null
        }
    ],
    es: [
        {
            id: 1,
            title: 'GymPulse',
            description: 'SaaS de gestión de gimnasios con gestión de miembros, control de asistencia, creación de paquetes, suscripciones y reportes automatizados. En producción con un cliente real.',
            technologies: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
            badge: 'Producto en producción'
        },
        {
            id: 2,
            title: 'Job Board',
            description: 'Plataforma full-stack que conecta buscadores de empleo con empresas. Incluye búsqueda con filtros avanzados, panel para empresas y gestión de postulantes.',
            technologies: ['React', 'TypeScript', 'Golang', 'MongoDB'],
            badge: null
        },
        {
            id: 3,
            title: 'Sistema de Contratos',
            description: 'Sistema interno para Blue Bay Car Rental para gestionar contratos, clientes e inventario de vehículos. Redujo el tiempo de creación de contratos un 80% con formularios inteligentes y validación en tiempo real.',
            technologies: ['React', 'TypeScript', 'Tailwind CSS'],
            badge: null
        }
    ]
};

export const skillsData = {
    en: [
        {
            id: 1,
            category: 'Frontend',
            skills: ['React & React Hooks', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Responsive Design', 'React Testing Library & Vitest']
        },
        {
            id: 2,
            category: 'Backend & Databases',
            skills: ['Go (Golang)', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Supabase', 'MySQL', 'JWT Authentication', 'Swagger / OpenAPI']
        },
        {
            id: 3,
            category: 'Tools & Practices',
            skills: ['Git & GitHub', 'Scrum / Agile', 'Clean Architecture', 'Unit Testing', 'CI/CD', 'Vercel', 'Railway']
        }
    ],
    es: [
        {
            id: 1,
            category: 'Frontend',
            skills: ['React & React Hooks', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Diseño Responsive', 'React Testing Library & Vitest']
        },
        {
            id: 2,
            category: 'Backend & Bases de datos',
            skills: ['Go (Golang)', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Supabase', 'MySQL', 'JWT Authentication', 'Swagger / OpenAPI']
        },
        {
            id: 3,
            category: 'Herramientas & Prácticas',
            skills: ['Git & GitHub', 'Scrum / Agile', 'Clean Architecture', 'Pruebas Unitarias', 'CI/CD', 'Vercel', 'Railway']
        }
    ]
};