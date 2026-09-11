import { Github, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black py-12 px-6 md:px-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                <div>
                    <div className="font-display font-bold text-white text-lg">
                        Logivon<span className="text-brand">.</span>Tech
                    </div>
                    <p className="text-white/40 text-sm mt-3 max-w-xs">
                        Engineer-led software studio.
                    </p>
                </div>

                <div>
                    <h4 className="font-display text-white text-sm font-medium mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-white/50">
                        <li><a href="#about" className="hover:text-brand">Services</a></li>
                        <li><a href="#work" className="hover:text-brand">Work</a></li>
                        <li><a href="#testimonials" className="hover:text-brand">Testimonials</a></li>
                        <li><a href="#contact" className="hover:text-brand">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-display text-white text-sm font-medium mb-4">Get in Touch</h4>
                    <ul className="space-y-2 text-sm text-white/50">
                        <li>
                            <a href="mailto:logivontech07@gmail.com" className="hover:text-brand break-all">
                                logivontech07@gmail.com
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://wa.me/919663711206"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-brand"
                            >
                                +91 96637 11206
                            </a>
                        </li>
                    </ul>
                    <div className="flex items-center gap-3 mt-5">
                        <a
                            href="https://github.com/logivontech-Dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:border-brand hover:text-brand transition-colors"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                        <a
                            href="https://instagram.com/logivon_tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:border-brand hover:text-brand transition-colors"
                        >
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/logivon-tech-1661a9422/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:border-brand hover:text-brand transition-colors"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/30">
                © {new Date().getFullYear()} Logivon Tech. All rights reserved.
            </div>
        </footer>
    );
}

