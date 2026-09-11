'use client';

import { Mail, MessageSquare, ArrowUpRight, Clock, ShieldCheck, Zap } from 'lucide-react';

export default function ComingSoon() {
    return (
        <section id="contact" className="relative bg-bg-dark py-24 px-6 md:px-16 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand/10 blur-[140px]" />
            </div>

            <div className="relative max-w-6xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 text-xs text-white/50 border border-white/10 rounded-pill px-3 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand" /> Get In Touch
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mt-4 tracking-tight">
                        Ready to ship your next product?
                    </h2>
                    <p className="text-white/60 mt-4 text-base md:text-lg leading-relaxed">
                        Talk directly to engineers who build. No pushy sales calls, no fluff — just an honest evaluation of scope, timeline, and architecture.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* WhatsApp Card */}
                    <a
                        href="https://wa.me/919663711206"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand/50 rounded-2xl p-8 transition-all flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center border border-green-500/20">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="font-display text-xl font-semibold text-white mt-6 flex items-center justify-between">
                                WhatsApp Chat
                                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </h3>
                            <p className="text-white/50 text-sm mt-2 leading-relaxed">
                                Fastest response for quick queries, project briefs, and immediate questions.
                            </p>
                        </div>
                        <div className="mt-6 text-sm font-medium text-brand">
                            +91 96637 11206 →
                        </div>
                    </a>

                    {/* Email Card */}
                    <a
                        href="mailto:logivontech07@gmail.com"
                        className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand/50 rounded-2xl p-8 transition-all flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center border border-brand/20">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="font-display text-xl font-semibold text-white mt-6 flex items-center justify-between">
                                Direct Email
                                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </h3>
                            <p className="text-white/50 text-sm mt-2 leading-relaxed">
                                Send us your detailed specification, RFPs, or technical project documentation.
                            </p>
                        </div>
                        <div className="mt-6 text-sm font-medium text-brand break-all">
                            logivontech07@gmail.com →
                        </div>
                    </a>

                    {/* Guarantee / Perks Card */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="font-display text-xl font-semibold text-white mt-6">
                                Engineering Guarantees
                            </h3>
                            <ul className="mt-4 space-y-3 text-sm text-white/60">
                                <li className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-brand flex-shrink-0" />
                                    <span>Guaranteed 24h reply turnaround</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-brand flex-shrink-0" />
                                    <span>100% IP & code ownership to you</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-brand flex-shrink-0" />
                                    <span>Production-ready architectures</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6 text-xs text-white/40">
                            Bengaluru / Mysuru, India · Global Delivery
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}