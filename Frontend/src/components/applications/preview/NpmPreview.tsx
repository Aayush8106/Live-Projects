import React, { useEffect, useState } from 'react';

interface NpmPackageInfo {
    name: string;
    description?: string;
    readme?: string;
    homepage?: string;
    license?: string;
    keywords?: string[];
    version?: string;
    date?: string;
    links?: {
        npm?: string;
    };
    'dist-tags'?: {
        latest?: string;
    };
    repository?: string | {
        url?: string;
    };
}

interface NpmSearchResponse {
    total: number;
    objects: Array<{
        package: NpmPackageInfo;
    }>;
}

const NPM_USERNAME = 'aayush911';

const loadPackages = async (): Promise<NpmPackageInfo[]> => {
    const summaries: NpmPackageInfo[] = [];
    let from = 0;
    let total = Infinity;

    while (from < total) {
        const query = encodeURIComponent(`maintainer:${NPM_USERNAME}`);
        const url =
            `https://registry.npmjs.org/-/v1/search?text=${query}` +
            `&size=250&from=${from}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Could not load your npm packages.');
        }

        const data = (await response.json()) as NpmSearchResponse;
        const page = data.objects.map((result) => result.package);

        summaries.push(...page);
        total = data.total;
        from += page.length;

        if (page.length === 0) break;
    }

    const fullPackages = await Promise.all(
        summaries.map(async (summary) => {
            try {
                const url = `https://registry.npmjs.org/${encodeURIComponent(
                    summary.name
                )}`;
                const response = await fetch(url);

                if (!response.ok) return summary;

                const details =
                    (await response.json()) as NpmPackageInfo;

                return { ...summary, ...details };
            } catch {
                return summary;
            }
        })
    );

    return fullPackages.sort((a, b) => a.name.localeCompare(b.name));
};

const NpmPreview: React.FC = () => {
    const [packages, setPackages] = useState<NpmPackageInfo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        let cancelled = false;

        const load = async () => {
            try {
                setError('');
                const result = await loadPackages();

                if (!cancelled) setPackages(result);
            } catch (err) {
                if (!cancelled) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : 'Something went wrong while loading the packages.'
                    );
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        void load();

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <div style={styles.page}>
            <div style={styles.topBar}>
                <strong>npm</strong>
                <a
                    href={`https://www.npmjs.com/~${NPM_USERNAME}`}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.link}
                >
                    Open npm profile
                </a>
            </div>

            {loading && (
                <div style={styles.message}>Loading your packages…</div>
            )}

            {!loading && error && (
                <div style={styles.message}>
                    <p style={styles.error}>{error}</p>
                    <a
                        href={`https://www.npmjs.com/~${NPM_USERNAME}`}
                        target="_blank"
                        rel="noreferrer"
                        style={styles.link}
                    >
                        View your npm profile
                    </a>
                </div>
            )}

            {!loading && !error && packages.length === 0 && (
                <div style={styles.message}>
                    No public packages were found for @{NPM_USERNAME}.
                </div>
            )}

            {!loading && !error && packages.length > 0 && (
                <div style={styles.packageList}>
                    {packages.map((packageInfo) => {
                        const repositoryUrl =
                            typeof packageInfo.repository === 'string'
                                ? packageInfo.repository
                                : packageInfo.repository?.url;

                        const cleanRepositoryUrl = repositoryUrl
                            ?.replace(/^git\+/, '')
                            .replace(/\.git$/, '');

                        const npmPageUrl =
                            packageInfo.links?.npm ||
                            `https://www.npmjs.com/package/${encodeURIComponent(
                                packageInfo.name
                            )}`;

                        return (
                            <div
                                key={packageInfo.name}
                                style={styles.packageGroup}
                            >
                                <div style={styles.packageCard}>
                                    <div style={styles.packageHeader}>
                                        <div style={styles.npmMark}>npm</div>

                                        <div style={styles.packageIdentity}>
                                            <h1 style={styles.packageName}>
                                                {packageInfo.name}
                                            </h1>
                                            <p style={styles.description}>
                                                {packageInfo.description ||
                                                    'No short description is set for this package.'}
                                            </p>
                                        </div>
                                    </div>

                                    <div style={styles.details}>
                                        <div style={styles.detail}>
                                            <span style={styles.detailLabel}>
                                                Version
                                            </span>
                                            <span>
                                                {packageInfo['dist-tags']
                                                    ?.latest ||
                                                    packageInfo.version ||
                                                    '—'}
                                            </span>
                                        </div>

                                        <div style={styles.detail}>
                                            <span style={styles.detailLabel}>
                                                License
                                            </span>
                                            <span>
                                                {packageInfo.license ||
                                                    'Not specified'}
                                            </span>
                                        </div>

                                        {packageInfo.homepage && (
                                            <div style={styles.detail}>
                                                <span
                                                    style={styles.detailLabel}
                                                >
                                                    Homepage
                                                </span>
                                                <a
                                                    href={packageInfo.homepage}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    style={styles.link}
                                                >
                                                    Open homepage
                                                </a>
                                            </div>
                                        )}

                                        {cleanRepositoryUrl && (
                                            <div style={styles.detail}>
                                                <span
                                                    style={styles.detailLabel}
                                                >
                                                    Repository
                                                </span>
                                                <a
                                                    href={cleanRepositoryUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    style={styles.link}
                                                >
                                                    View source code
                                                </a>
                                            </div>
                                        )}

                                        <div style={styles.detail}>
                                            <span style={styles.detailLabel}>
                                                npm page
                                            </span>
                                            <a
                                                href={npmPageUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                style={styles.link}
                                            >
                                                Open package on npm
                                            </a>
                                        </div>
                                    </div>

                                    {packageInfo.keywords &&
                                        packageInfo.keywords.length > 0 && (
                                            <div style={styles.keywords}>
                                                {packageInfo.keywords.map(
                                                    (keyword) => (
                                                        <span
                                                            key={keyword}
                                                            style={styles.keyword}
                                                        >
                                                            {keyword}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        )}
                                </div>

                                <div style={styles.readmeCard}>
                                    <h2 style={styles.readmeTitle}>
                                        {packageInfo.name} README
                                    </h2>

                                    {packageInfo.readme ? (
                                        <details style={styles.readmeDetails}>
                                            <summary
                                                style={styles.readmeSummary}
                                            >
                                                Show full README
                                            </summary>
                                            <pre style={styles.readmeText}>
                                                {packageInfo.readme}
                                            </pre>
                                        </details>
                                    ) : (
                                        <p style={styles.description}>
                                            This package does not have a README
                                            available.
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
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
        padding: 16,
        gap: 16,
        backgroundColor: '#f6f6f6',
        color: '#24292f',
    },
    topBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 10,
        width: '100%',
        minWidth: 0,
        paddingBottom: 12,
        borderBottom: '1px solid #dedede',
    },
    packageList: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 900,
        minWidth: 0,
        margin: '0 auto',
        gap: 20,
    },
    packageGroup: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        gap: 12,
    },
    packageCard: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minWidth: 0,
        boxSizing: 'border-box',
        padding: 24,
        gap: 20,
        border: '1px solid #dedede',
        borderRadius: 8,
        backgroundColor: '#ffffff',
    },
    packageHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        minWidth: 0,
        gap: 16,
    },
    npmMark: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
        height: 48,
        flex: '0 0 64px',
        borderRadius: 6,
        backgroundColor: '#cb3837',
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 700,
    },
    packageIdentity: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 220px',
        minWidth: 0,
        gap: 8,
    },
    packageName: {
        margin: 0,
        fontSize: 26,
        overflowWrap: 'anywhere',
    },
    description: {
        margin: 0,
        fontSize: 15,
        lineHeight: 1.6,
        overflowWrap: 'anywhere',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        gap: 12,
        paddingTop: 16,
        borderTop: '1px solid #e5e5e5',
    },
    detail: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        minWidth: 0,
        gap: 8,
        fontSize: 14,
        overflowWrap: 'anywhere',
    },
    detailLabel: {
        minWidth: 90,
        color: '#666666',
        fontWeight: 700,
    },
    keywords: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        minWidth: 0,
        gap: 8,
    },
    keyword: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '100%',
        padding: '6px 10px',
        borderRadius: 16,
        backgroundColor: '#f0f0f0',
        fontSize: 13,
        overflowWrap: 'anywhere',
    },
    readmeCard: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minWidth: 0,
        boxSizing: 'border-box',
        padding: 24,
        gap: 14,
        border: '1px solid #dedede',
        borderRadius: 8,
        backgroundColor: '#ffffff',
    },
    readmeTitle: {
        margin: 0,
        fontSize: 20,
        overflowWrap: 'anywhere',
    },
    readmeDetails: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        gap: 12,
    },
    readmeSummary: {
        cursor: 'pointer',
        color: '#cb3837',
        fontWeight: 700,
    },
    readmeText: {
        maxWidth: '100%',
        margin: 0,
        padding: 16,
        overflowX: 'auto',
        whiteSpace: 'pre-wrap',
        overflowWrap: 'anywhere',
        backgroundColor: '#f6f6f6',
        fontFamily: 'monospace',
        fontSize: 13,
        lineHeight: 1.6,
    },
    message: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        padding: 20,
    },
    error: {
        margin: 0,
        color: '#b42318',
    },
    link: {
        color: '#0969da',
        overflowWrap: 'anywhere',
    },
};

export default NpmPreview;
