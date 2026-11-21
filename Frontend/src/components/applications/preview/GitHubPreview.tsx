import React, { useEffect, useState } from 'react';

interface GitHubUser {
    login: string;
    name: string | null;
    avatar_url: string;
    bio: string | null;
    location: string | null;
    followers: number;
    following: number;
    public_repos: number;
    html_url: string;
}

interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    language: string | null;
}

const GitHubPreview: React.FC = () => {
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        let cancelled = false;

        const loadProfile = async () => {
            try {
                const [userResponse, reposResponse] = await Promise.all([
                    fetch('https://api.github.com/users/aayush8106'),
                    fetch(
                        'https://api.github.com/users/aayush8106/repos?sort=updated&per_page=6'
                    ),
                ]);

                if (!userResponse.ok || !reposResponse.ok) {
                    throw new Error('GitHub data could not be loaded.');
                }

                const userData: GitHubUser = await userResponse.json();
                const repoData: GitHubRepo[] = await reposResponse.json();

                if (!cancelled) {
                    setUser(userData);
                    setRepos(repoData);
                }
            } catch {
                if (!cancelled) {
                    setError('Could not load GitHub data. Please try again later.');
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        loadProfile();

        return () => {
            cancelled = true;
        };
    }, []);

    if (loading) {
        return <div style={styles.message}>Loading GitHub profile...</div>;
    }

    if (error || !user) {
        return <div style={styles.message}>{error || 'Profile not found.'}</div>;
    }

    return (
        <div style={styles.page}>
            <div style={styles.topBar}>
                <strong>GitHub</strong>
                <span>/ {user.login}</span>
            </div>

            <div style={styles.profile}>
                <div style={styles.profileHeader}>
                    <img
                        src={user.avatar_url}
                        alt={`${user.login}'s profile`}
                        style={styles.avatar}
                    />

                    <div style={styles.identity}>
                        <h2 style={styles.name}>{user.name || user.login}</h2>
                        <a
                            href={user.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.username}
                        >
                            @{user.login}
                        </a>

                        {user.bio && <p style={styles.bio}>{user.bio}</p>}
                        {user.location && (
                            <p style={styles.location}>{user.location}</p>
                        )}

                        <p style={styles.stats}>
                            {user.followers} followers · {user.following} following
                            · {user.public_repos} repositories
                        </p>
                    </div>
                </div>

                <h3 style={styles.sectionTitle}>Recent repositories</h3>

                <div style={styles.repoGrid}>
                    {repos.map((repo) => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.repoCard}
                        >
                            <strong style={styles.repoName}>{repo.name}</strong>
                            <p style={styles.repoDescription}>
                                {repo.description || 'No description provided.'}
                            </p>
                            <span style={styles.repoDetails}>
                                {repo.language || 'Other'} · ★ {repo.stargazers_count}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        minWidth: 0,
        minHeight: 0,
        boxSizing: 'border-box',
        overflowY: 'auto',
        padding: 20,
        gap: 24,
        backgroundColor: '#ffffff',
        color: '#24292f',
    },

    topBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
        width: '100%',
        minWidth: 0,
        paddingBottom: 12,
        borderBottom: '1px solid #d8dee4',
    },

    profile: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minWidth: 0,
        gap: 20,
    },

    profileHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%',
        minWidth: 0,
        gap: 20,
    },

    avatar: {
        width: 96,
        height: 96,
        flex: '0 0 96px',
        borderRadius: '50%',
        objectFit: 'cover',
    },

    identity: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 220px',
        minWidth: 0,
        gap: 6,
    },

    repositories: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minWidth: 0,
        gap: 14,
    },

    repoGrid: {
        display: 'grid',
        gridTemplateColumns:
            'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
        width: '100%',
        minWidth: 0,
        gap: 16,
    },

    repoCard: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        minHeight: 180,
        boxSizing: 'border-box',
        padding: 16,
        gap: 12,
        border: '1px solid #d0d7de',
        borderRadius: 8,
        backgroundColor: '#ffffff',
        overflowWrap: 'anywhere',
    },

    repoDescription: {
        flex: 1,
        minWidth: 0,
        lineHeight: 1.5,
        overflowWrap: 'anywhere',
    },

    repoFooter: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginTop: 'auto',
        color: '#57606a',
        fontSize: 13,
    },

    message: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minWidth: 0,
        padding: 20,
        lineHeight: 1.5,
    },
};

export default GitHubPreview;