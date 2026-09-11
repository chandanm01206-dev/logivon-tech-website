import { getRepos } from '@/lib/github';
import ProjectCard from './ProjectCard';
import { ArrowUpRight } from 'lucide-react';

export default async function Work() {
    const { repos } = await getRepos();
    const list = Array.isArray(repos) ? repos : [];

    return (
        <section id="work" className="bg-bg-dark py-24 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs text-white/50">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand" /> Portfolio
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mt-3">
                            Explore Our Work
                        </h2>
                        <p className="text-white/50 mt-3 max-w-lg">
                            Live, open-source projects — pulled directly from GitHub.
                        </p>
                    </div>
                    {list.length > 0 && (
                        <span className="text-xs text-white/40 inline-flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Live from GitHub
                        </span>
                    )}
                </div>

                {list.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {list.map((r) => (
                            <ProjectCard key={r.name} repo={r} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 border border-white/10 rounded-2xl bg-white/[0.02]">
                        <p className="text-white/60 text-sm">
                            Public repositories will appear here once published to GitHub.
                        </p>
                    </div>
                )}

                <div className="flex justify-center mt-12">
                    <a
                        href="https://github.com/logivontech-Dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-white/20 text-white bg-transparent hover:bg-white/5 rounded-pill px-6 py-3 text-sm font-medium transition-colors"
                    >
                        View All Projects on GitHub
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}

