import { Code2, Smartphone, BrainCircuit, Cpu, ShieldCheck } from 'lucide-react';
import { services } from '@/data/services';

const iconMap = { Code2, Smartphone, BrainCircuit, Cpu, ShieldCheck };

export default function About() {
    return (
        <section id="about" className="bg-bg-light py-24 px-6 md:px-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                <div>
                    <span className="inline-flex items-center gap-2 text-xs text-ink-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand" /> About Us
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-primary leading-tight mt-3">
                        We help businesses ship real software, not slideware.
                    </h2>
                    <p className="text-ink-muted mt-4 max-w-md leading-relaxed">
                        Logivon Tech is run by builders, not account managers. Every project is engineered to
                        production standard — clean architecture, real deployment, and code you actually own.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-6 text-sm">
                        <div>
                            <div className="font-display text-3xl font-bold text-ink-primary">100%</div>
                            <div className="text-ink-muted text-xs mt-1">Code you own</div>
                        </div>
                        <div>
                            <div className="font-display text-3xl font-bold text-ink-primary">5</div>
                            <div className="text-ink-muted text-xs mt-1">Core disciplines</div>
                        </div>
                        <div>
                            <div className="font-display text-3xl font-bold text-ink-primary">24h</div>
                            <div className="text-ink-muted text-xs mt-1">Reply window</div>
                        </div>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    {services.map((s) => {
                        const Icon = iconMap[s.icon];
                        return (
                            <div
                                key={s.title}
                                className="bg-white border border-black/5 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 transition-all"
                            >
                                <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                                    {Icon ? <Icon className="w-5 h-5" /> : null}
                                </div>
                                <h3 className="font-display font-medium text-ink-primary mt-3">{s.title}</h3>
                                <p className="text-sm text-ink-muted mt-1 leading-relaxed">{s.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}


