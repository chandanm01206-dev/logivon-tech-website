// Server-side fetch of Logivon Tech's public repos.
// Revalidates every hour so the Work section stays fresh without hammering GitHub.
export async function getRepos() {
    try {
        const res = await fetch(
            'https://api.github.com/users/logivontech-Dev/repos?sort=updated&per_page=6',
            {
                headers: { Accept: 'application/vnd.github+json' },
                next: { revalidate: 3600 },
                signal: AbortSignal.timeout(3000),
            }
        );
        if (!res.ok) return { repos: null, error: `GitHub ${res.status}` };
        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) return { repos: null, error: 'empty' };
        return {
            repos: data.map((r) => ({
                name: r.name,
                description: r.description,
                html_url: r.html_url,
                language: r.language,
                stargazers_count: r.stargazers_count ?? 0,
                updated_at: r.updated_at,
            })),
            error: null,
        };
    } catch (err) {
        return { repos: null, error: String(err?.message || err) };
    }
}

// Fallback projects shown if the GitHub API is unreachable or the org is empty.
// FALLBACK — replace with real repos once logivontech-Dev has public projects.
export const fallbackRepos = [
    {
        name: 'ai-doc-intelligence',
        description: 'LLM-powered document ingestion pipeline with vector search and structured extraction.',
        html_url: 'https://github.com/logivontech-Dev',
        language: 'Python',
        stargazers_count: 0,
        updated_at: new Date().toISOString(),
    },
    {
        name: 'secure-iot-gateway',
        description: 'Hardened MQTT gateway for industrial IoT with device attestation and OTA updates.',
        html_url: 'https://github.com/logivontech-Dev',
        language: 'Go',
        stargazers_count: 0,
        updated_at: new Date().toISOString(),
    },
    {
        name: 'commerce-next-starter',
        description: 'Production Next.js commerce starter — auth, payments, admin, and observability baked in.',
        html_url: 'https://github.com/logivontech-Dev',
        language: 'TypeScript',
        stargazers_count: 0,
        updated_at: new Date().toISOString(),
    },
];
