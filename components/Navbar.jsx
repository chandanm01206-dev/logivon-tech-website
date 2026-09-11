'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
    { label: 'Services', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[#0B0B0C]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 py-3.5'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-16 flex items-center justify-between">
                {/* Brand Logo */}
                <a href="#home" className="flex items-center gap-3 group">
                    <img
                        src="/logivon-logo.png"
                        alt="Logivon Tech logo"
                        className="w-8 h-8 rounded-lg object-contain bg-white/10 p-1 border border-white/15 group-hover:border-brand transition-colors"
                    />
                    <div className="font-display font-bold text-white text-lg tracking-tight">
                        Logivon<span className="text-brand">.</span>Tech
                    </div>
                </a>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-sm text-white/70 hover:text-white hover:text-brand transition-colors font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, '#contact')}
                        className="group inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white rounded-pill px-4 py-2 text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow-brand/20 hover:shadow-lg"
                    >
                        Start a Project
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    type="button"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation menu"
                    className="md:hidden text-white/80 hover:text-white p-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-[#0B0B0C]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-base text-white/80 hover:text-white font-medium py-1"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, '#contact')}
                            className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-white rounded-pill py-3 text-sm font-semibold transition-all mt-2"
                        >
                            Start a Project
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}