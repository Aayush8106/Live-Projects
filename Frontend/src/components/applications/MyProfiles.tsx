import React, { useState } from 'react';
import { IconName } from '../../assets/icons';
import useViewport from '../../hooks/useViewport';
import Window from '../os/Window';
import GitHubPreview from './preview/GitHubPreview';
import LinkedInPreview from './preview/LinkedInPreview';
import NpmPreview from './preview/NpmPreview';

interface MyProfilesAppProps extends WindowAppProps {
    windowTitle: string;
    windowBarIcon: IconName;
}

const profiles = [
    {
        name: 'GitHub',
        href: 'https://github.com/aayush8106',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/aayushPatel81',
    },
    {
        name: 'npm',
        href: 'https://www.npmjs.com/package/create-bbp-node',
    },
];

const MyProfilesApp: React.FC<MyProfilesAppProps> = ({
    onClose,
    onInteract,
    onMinimize,
    windowTitle,
    windowBarIcon,
}) => {
    const [activeProfile, setActiveProfile] = useState(profiles[0]);
    const { isMobile } = useViewport();

    return (
        <Window
            top={40}
            left={60}
            width={900}
            height={560}
            windowTitle={windowTitle}
            windowBarIcon={windowBarIcon}
            bottomLeftText="My Profiles"
            closeWindow={onClose}
            minimizeWindow={onMinimize}
            onInteract={onInteract}
        >
            <div
                style={Object.assign(
                    {},
                    styles.page,
                    isMobile ? styles.pageMobile : {}
                )}
            >
                <aside
                    style={Object.assign(
                        {},
                        styles.sidebar,
                        isMobile ? styles.sidebarMobile : {}
                    )}
                >
                    <h2
                        style={Object.assign(
                            {},
                            styles.sidebarTitle,
                            isMobile ? styles.sidebarTitleMobile : {}
                        )}
                    >
                        Profiles
                    </h2>

                    {profiles.map((profile) => (
                        <button
                            key={profile.name}
                            type="button"
                            onClick={() => setActiveProfile(profile)}
                            style={Object.assign(
                                {},
                                styles.option,
                                isMobile ? styles.optionMobile : {},
                                activeProfile.name === profile.name
                                    ? styles.activeOption
                                    : {}
                            )}
                        >
                            {profile.name}
                        </button>
                    ))}
                </aside>

                <main
                    style={Object.assign(
                        {},
                        styles.main,
                        isMobile ? styles.mainMobile : {}
                    )}
                >
                    <div
                        style={Object.assign(
                            {},
                            styles.toolbar,
                            isMobile ? styles.toolbarMobile : {}
                        )}
                    >
                        <span>{activeProfile.name}</span>
                        <a
                            href={activeProfile.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Open in new tab
                        </a>
                    </div>

                    {activeProfile.name === 'GitHub' ? (
                        <GitHubPreview />
                    ) : activeProfile.name === 'LinkedIn' ? (
                        <LinkedInPreview />
                    ) : activeProfile.name === 'npm' ? (
                        <NpmPreview />
                    ) : (
                        <div style={styles.comingSoon}>
                            <h2>{activeProfile.name} preview is next</h2>
                            <p>Use “Open in new tab” above to visit the original profile.</p>
                        </div>
                    )}
                </main>
            </div>
        </Window>
    );
};

const styles: StyleSheetCSS = {
    page: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
    },
    pageMobile: {
        flexDirection: 'column',
    },
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        width: 160,
        padding: 12,
        gap: 8,
        boxSizing: 'border-box',
        borderRight: '1px solid #808080',
        backgroundColor: '#f0f0f0',
    },
    sidebarMobile: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: 8,
        gap: 6,
        borderRight: 'none',
        borderBottom: '1px solid #808080',
    },
    sidebarTitle: {
        margin: '4px 0 12px',
        fontSize: 18,
    },
    sidebarTitleMobile: {
        width: '100%',
        margin: '0 0 4px',
        fontSize: 16,
    },
    option: {
        width: '100%',
        padding: '10px 8px',
        border: '1px solid #808080',
        textAlign: 'left',
        cursor: 'pointer',
    },
    optionMobile: {
        flex: '1 1 70px',
        minWidth: 60,
        width: 'auto',
        padding: '8px 4px',
        textAlign: 'center',
    },
    activeOption: {
        backgroundColor: '#000080',
        color: '#ffffff',
    },
    main: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        minWidth: 0,
    },
    mainMobile: {
        minHeight: 0,
    },
    toolbar: {
        display: 'flex',
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 12px',
        height: 38,
        borderBottom: '1px solid #808080',
        backgroundColor: '#f0f0f0',
    },
    toolbarMobile: {
        height: 32,
        padding: '0 8px',
        fontSize: 12,
    },
    iframe: {
        flex: 1,
        width: '100%',
        minHeight: 0,
        border: 'none',
        backgroundColor: '#ffffff',  
    },comingSoon: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        textAlign: 'center',
    },
};

export default MyProfilesApp;