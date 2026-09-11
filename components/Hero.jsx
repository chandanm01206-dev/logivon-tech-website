import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative bg-bg-dark min-h-[90vh] flex flex-col justify-center px-6 md:px-16 pt-32 pb-20 overflow-hidden"
        >
            {/* Ambient background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-brand/10 blur-[160px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B0B0C_70%)]" />
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                        backgroundSize: '48px 48px',
                    }}
                />
            </div>

            <div className="relative max-w-6xl mx-auto w-full">
                <div
                    className="animate-hero inline-flex items-center gap-2 border border-white/15 rounded-pill px-3 py-1 text-xs text-white/60"
                    style={{ animationDelay: '0s' }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                    Full-Stack · AI/ML · Cybersecurity
                </div>

                <h1
                    className="animate-hero font-display font-bold text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-white mt-6 max-w-4xl"
                    style={{ animationDelay: '0.1s' }}
                >
                    We build software that <span className="text-brand">actually ships.</span>
                </h1>

                <p
                    className="animate-hero text-lg md:text-xl text-white/60 max-w-xl mt-6 leading-relaxed"
                    style={{ animationDelay: '0.2s' }}
                >
                    Logivon Tech is an engineer-led studio building production-grade web apps, mobile apps,
                    AI/ML systems, and cybersecurity tooling — designed to be sold and scaled, not just demoed.
                </p>

                <div
                    className="animate-hero mt-10 flex flex-wrap gap-4"
                    style={{ animationDelay: '0.3s' }}
                >
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white rounded-pill px-6 py-3 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
                    >
                        Start a Project
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                    <a
                        href="#work"
                        className="inline-flex items-center gap-2 border border-white/20 text-white bg-transparent hover:bg-white/5 rounded-pill px-6 py-3 text-sm font-medium transition-colors"
                    >
                        See Our Work
                    </a>
                </div>

                <div
                    className="animate-hero mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/40"
                    style={{ animationDelay: '0.4s' }}
                >
                    <span>Engineer-led team</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>Open-source portfolio on GitHub</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>Based in India</span>
                </div>
            </div>
        </section>
    );
}
