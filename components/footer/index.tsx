import { LINKS_DATA_MOCK } from "@/mocks/data/links";

export default function Footer() {
    return (
        <footer className="mt-16 py-12 px-8 border-t border-zinc-200">
            <div className="max-w-300 mx-auto flex justify-between items-center flex-wrap gap-8">
                <div className="text-zinc-400 text-sm">&copy; 2025 Rogelio Beltran. Construido con Next.js y Tailwind.</div>
                <div className="flex gap-8 flex-wrap">
                    {LINKS_DATA_MOCK.map((elem, idx) => (
                        <a key={idx} target="_blank" href={elem.link} className="text-zinc-800 no-underline text-sm font-semibold">
                            {elem.title}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}