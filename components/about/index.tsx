export default function About() {
    return (
        <section id="about" className="py-16 sm:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                        Sobre mí
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Soy un desarrollador frontend apasionado por crear soluciones
                        elegantes y funcionales. Con experiencia como fullstack engineer
                        y desarrollador web, he trabajado en proyectos que van desde
                        aplicaciones empresariales hasta sistemas independientes.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Me enfoco en escribir código limpio, mantenible y con buenas
                        prácticas. Valoro la colaboración, el aprendizaje continuo y la
                        excelencia técnica.
                    </p>
                </div>
                <div>
                    <p className="text-gray-400 mb-8">Mi camino en desarrollo:</p>
                    <ul className="space-y-2 text-gray-600">
                        <li className="py-2">
                            → Fullstack Engineer en empresa fintech
                        </li>
                        <li className="py-2">→ Web Developer creando sistemas web</li>
                        <li className="py-2">→ Actualmente desarrollando Gymio</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}