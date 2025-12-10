export default function Header() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const items: string[] = [
        "Inicio",
        "Acerca",
        "Experiencia",
        "Proyectos",
        "Skills",
        "Contacto",
    ]
    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-2xl font-bold tracking-tight">Dev</div>
                <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base">
                    {items.map((item, index) => (
                        <li key={index}>
                            <a
                                href={`#${[
                                    "hero",
                                    "about",
                                    "experience",
                                    "projects",
                                    "skills",
                                    "contact",
                                ][index]
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(
                                        [
                                            "hero",
                                            "about",
                                            "experience",
                                            "projects",
                                            "skills",
                                            "contact",
                                        ][index]
                                    );
                                }}
                                className="font-medium hover:text-gray-600 transition-colors duration-300 cursor-pointer relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}