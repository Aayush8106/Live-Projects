import React, { useEffect, useState } from 'react';
import { IconName } from '../../assets/icons';
import Window from '../os/Window';

interface MyProjectsAppProps extends WindowAppProps {
    windowTitle: string;
    windowBarIcon: IconName;
}

const projects = [
    {
        name: 'Chat Room',
        url: 'https://chat-room-aa1w.onrender.com/',
    },
    {
        name: 'P2P File Sharing',
        url: 'https://p2p-file-sharing-rf0q.onrender.com/',
    },
];

const MyProjects: React.FC<MyProjectsAppProps> = ({
    windowTitle = 'My Projects',
    windowBarIcon = 'myProjects',
    onClose,
    onMinimize,
    onInteract,
}) => {
    const [activeProject, setActiveProject] = useState(projects[0]);
    const [isMobile, setIsMobile] = useState(
        () => typeof window !== 'undefined' && window.innerWidth <= 640
    );

    useEffect(() => {
        const updateLayout = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        window.addEventListener('resize', updateLayout);
        return () => window.removeEventListener('resize', updateLayout);
    }, []);

    return (
        <Window
            top={40}
            left={60}
            width={900}
            height={560}
            windowTitle={windowTitle}
            windowBarIcon={windowBarIcon}
            bottomLeftText="My Projects"
            closeWindow={onClose}
            minimizeWindow={onMinimize}
            onInteract={onInteract}
        >
            <div
                style={{
                    ...styles.layout,
                    flexDirection: isMobile ? 'column' : 'row',
                }}
            >
                <aside
                    style={{
                        ...styles.sidebar,
                        width: isMobile ? '100%' : 200,
                        flex: isMobile ? '0 0 auto' : '0 0 200px',
                    }}
                >
                    <h2 style={styles.sidebarTitle}>Projects</h2>

                    <div
                        style={{
                            ...styles.projectList,
                            flexDirection: isMobile ? 'row' : 'column',
                        }}
                    >
                        {projects.map((project) => {
                            const isActive =
                                activeProject.name === project.name;

                            return (
                                <button
                                    key={project.name}
                                    type="button"
                                    aria-pressed={isActive}
                                    onClick={() => setActiveProject(project)}
                                    style={{
                                        ...styles.projectButton,
                                        ...(isActive
                                            ? styles.activeProjectButton
                                            : {}),
                                    }}
                                >
                                    {project.name}
                                </button>
                            );
                        })}
                    </div>
                </aside>

                <main style={styles.main}>
                    <div style={styles.previewHeader}>
                        <strong style={styles.projectName}>
                            {activeProject.name}
                        </strong>

                        <a
                            href={activeProject.url}
                            target="_blank"
                            rel="noreferrer"
                            style={styles.openLink}
                        >
                            Open in new tab
                        </a>
                    </div>

                    <iframe
                        key={activeProject.url}
                        title={`${activeProject.name} preview`}
                        src={activeProject.url}
                        style={styles.iframe}
                        loading="lazy"
                        allow="fullscreen"
                    />
                </main>
            </div>
        </Window>
    );
};

const styles: StyleSheetCSS = {
    layout: {
        display: 'flex',
        flex: 1,
        width: '100%',
        minWidth: 0,
        minHeight: 0,
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        color: '#222222',
    },
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        minWidth: 0,
        padding: 16,
        gap: 14,
        borderRight: '1px solid #aaaaaa',
        backgroundColor: '#f1f1f1',
    },
    sidebarTitle: {
        margin: '4px 0 8px',
        fontSize: 20,
    },
    projectList: {
        display: 'flex',
        minWidth: 0,
        gap: 8,
        overflowX: 'auto',
    },
    projectButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: '0 0 auto',
        minHeight: 44,
        boxSizing: 'border-box',
        padding: '10px 12px',
        border: '1px solid #888888',
        borderRadius: 3,
        backgroundColor: '#ffffff',
        color: '#222222',
        textAlign: 'left',
        cursor: 'pointer',
    },
    activeProjectButton: {
        borderColor: '#000080',
        backgroundColor: '#000080',
        color: '#ffffff',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        overflow: 'hidden',
    },
    previewHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        minWidth: 0,
        minHeight: 44,
        boxSizing: 'border-box',
        padding: '8px 14px',
        gap: 8,
        borderBottom: '1px solid #aaaaaa',
        backgroundColor: '#f5f5f5',
    },
    projectName: {
        minWidth: 0,
        overflowWrap: 'anywhere',
    },
    openLink: {
        color: '#0000ee',
        overflowWrap: 'anywhere',
    },
    iframe: {
        display: 'block',
        flex: 1,
        width: '100%',
        minWidth: 0,
        minHeight: 0,
        border: 0,
        backgroundColor: '#ffffff',
    },
};

export default MyProjects;