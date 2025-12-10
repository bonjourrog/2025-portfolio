import { Project } from "@/entity/project";

export const PROJECT_DATA_MOCK: Project[] = [
    {
        id: 1,
        title: 'Gymio',
        description: 'Sistema de administración para gimnasios pequeños, con gestión de miembros, asistecia, pagos y reportes automatizados.',
        technologies: ['Next.js', 'Supabase', 'Tailwind', 'Cron'],
        metrics: ['Modulos: Dashboard, Miembros, Paquetes']

    },
    {
        id: 2,
        title: 'Job Board',
        description: 'Job board con filtros de búsqueda, panel para empresas con vacantes y postulantes, integrado con backend en Go y MongoDB.',
        technologies: ['React', 'Golang', 'MongoDB', 'Figma'],
        metrics: ['Búsqueda con filtros avanzados', 'Panel para empresas y postulantes']
    },
    {
        id: 3,
        title: 'Contract System',
        description: 'Gestión de contratos, clientes e inventario de vehículos, con filtrado avanzado, autocompletado de formularios y formateo claro de precios y fechas.',
        technologies: ['React', 'Tauri', 'Firebase', 'Figma'],
        metrics: ['-60% tiempo de registro', '-40% errores en capturas', 'Elimina uso de múltiples archivos Excel y plantillas PDF',
            'Reduce errores por cambios accidentales en archivos compartidos',
            'Centraliza contratos, clientes e inventario en un solo sistema']
    }
];