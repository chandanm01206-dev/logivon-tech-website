'use client';

import { useEffect, useState } from 'react';
import { Star, Send, Loader2, Quote } from 'lucide-react';

function Stars({ value, onChange, size = 'w-5 h-5' }) {
    const interactive = typeof onChange === 'function';
    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
                <button
                    key={n}
                    type={interactive ? 'button' : undefined}
                    disabled={!interactive}
                    onClick={interactive ? () => onChange(n) : undefined}
                    className={interactive ? 'transition-transform hover:scale-110' : 'cursor-default'}
                    aria-label={`${n} star${n > 1 ? 's' : ''}`}
                >
                    <Star
                        className={`${size} ${n <= value ? 'fill-brand text-brand' : 'text-black/20'
                            }`}
                    />
                </button>
            ))}
        </div>
    );
}

export default function Feedback() {
    const [items, setItems] = useState([]);
    const [form, setForm] = useState({ name: '', role: '', message: '', rating: 5 });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [error, setError] = useState('');

    const loadFeedback = async () => {
        try {
            const res = await fetch('/api/feedback', { cache: 'no-store' });
            if (!res.ok) return;
            const data = await res.json();
            if (Array.isArray(data)) {
                setItems(data);
            }
        } catch (_) {
            /* keep existing data */
        }
    };

    useEffect(() => {
        loadFeedback();
    }, []);

    const submit = async (e) => {
        e.preventDefault();
        setError('');
        if (!form.name.trim() || !form.message.trim()) {
            setError('Please add your name and a short message.');
            return;
        }
        setStatus('loading');
        try {
            const res = await fetch('/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error('Failed');
            const saved = await res.json();
            setItems((prev) => [saved, ...prev]);
            setForm({ name: '', role: '', message: '', rating: 5 });
            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
        } catch (_) {
            setStatus('error');
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <section id="testimonials" className="bg-bg-light py-24 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="inline-flex items-center gap-2 text-xs text-ink-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand" /> Testimonials & Feedback
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-primary mt-3">
                        What people say about us
                    </h2>
                    <p className="text-ink-muted mt-4">
                        Worked with us? Leave a note below — it shows up on the wall instantly.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 mt-12 items-start">
                    {/* Feedback form */}
                    <form
                        onSubmit={submit}
                        className="lg:col-span-2 bg-white border border-black/5 rounded-2xl p-6 shadow-sm"
                    >
                        <h3 className="font-display font-semibold text-ink-primary text-lg">Leave feedback</h3>

                        <div className="mt-5 space-y-4">
                            <div>
                                <label className="text-xs font-medium text-ink-muted">Your rating</label>
                                <div className="mt-2">
                                    <Stars value={form.rating} onChange={(r) => setForm((f) => ({ ...f, rating: r }))} size="w-7 h-7" />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-medium text-ink-muted" htmlFor="fb-name">
                                    Name <span className="text-brand">*</span>
                                </label>
                                <input
                                    id="fb-name"
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                                    placeholder="Jane Doe"
                                    className="mt-1 w-full rounded-lg border border-black/10 bg-bg-light px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-medium text-ink-muted" htmlFor="fb-role">
                                    Company / role <span className="text-ink-muted/50">(optional)</span>
                                </label>
                                <input
                                    id="fb-role"
                                    type="text"
                                    value={form.role}
                                    onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
                                    placeholder="Founder, Acme Inc."
                                    className="mt-1 w-full rounded-lg border border-black/10 bg-bg-light px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-medium text-ink-muted" htmlFor="fb-message">
                                    Message <span className="text-brand">*</span>
                                </label>
                                <textarea
                                    id="fb-message"
                                    rows={4}
                                    value={form.message}
                                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                                    placeholder="Tell us about your experience working with Logivon Tech…"
                                    className="mt-1 w-full rounded-lg border border-black/10 bg-bg-light px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent resize-none"
                                />
                            </div>

                            {error ? <p className="text-sm text-red-500">{error}</p> : null}
                            {status === 'success' ? (
                                <p className="text-sm text-green-600">Thanks! Your feedback is now on the wall.</p>
                            ) : null}

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover disabled:opacity-60 text-white rounded-pill px-6 py-3 text-sm font-medium transition-colors"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" /> Submitting…
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" /> Submit feedback
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Feedback wall */}
                    <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
                        {items.map((f) => (
                            <div
                                key={f.id}
                                className="bg-white border border-black/5 rounded-2xl p-5 flex flex-col shadow-sm"
                            >
                                <Quote className="w-6 h-6 text-brand/30" />
                                <p className="text-sm text-ink-primary/90 mt-2 leading-relaxed flex-1">{f.message}</p>
                                <div className="mt-4">
                                    <Stars value={f.rating} />
                                    <div className="mt-2">
                                        <div className="font-display font-medium text-ink-primary text-sm">{f.name}</div>
                                        {f.role ? <div className="text-xs text-ink-muted">{f.role}</div> : null}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
