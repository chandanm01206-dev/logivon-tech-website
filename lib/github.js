// Server-side fetch of user's public repos.
// Revalidates every hour so the Work section stays fresh without hammering GitHub.
export async function getRepos() {
    try {
        const res = await fetch(
            'https://api.github.com/users/chandanm01206-dev/repos?sort=updated&per_page=6',
            {
                headers: { Accept: 'application/vnd.github+json' },
                next: { revalidate: 3600 },
                signal: AbortSignal.timeout(4000),
            }
        );
        if (!res.ok) return { repos: [], error: `GitHub ${res.status}` };
        const data = await res.json();
        if (!Array.isArray(data)) return { repos: [], error: 'invalid response' };
        
        // Filter out forks if desired, or return public repos
        return {
            repos: data.map((r) => ({
                name: r.name,
                description: r.description || 'Public repository on GitHub.',
                html_url: r.html_url,
                language: r.language || 'Code',
                stargazers_count: r.stargazers_count ?? 0,
                updated_at: r.updated_at,
            })),
            error: null,
        };
    } catch (err) {
        return { repos: [], error: String(err?.message || err) };
    }
}

export const fallbackRepos = [];

