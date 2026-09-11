import { Star, ArrowUpRight } from 'lucide-react';

const truncate = (str, n) => (str && str.length > n ? str.slice(0, n - 1).trimEnd() + '…' : str || 'No description provided.');

export default function ProjectCard({ repo }) {
    return (
        <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
            <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-white font-medium text-lg break-words">
                    {repo.name}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </div>
            <p className="text-white/50 text-sm mt-2 leading-relaxed">
                {truncate(repo.description, 90)}
            </p>
            <div className="flex items-center gap-3 mt-5">
                {repo.language && (
                    <span className="bg-white/10 text-white/70 text-xs px-2 py-1 rounded-pill">
                        {repo.language}
                    </span>
                )}
                <span className="inline-flex items-center gap-1 text-xs text-white/50">
                    <Star className="w-3.5 h-3.5" />
                    {repo.stargazers_count}
                </span>
            </div>
        </a>
    );
}
