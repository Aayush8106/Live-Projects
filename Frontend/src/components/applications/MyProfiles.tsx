import React from 'react';
import { IconName } from '../../assets/icons';
import Window from '../os/Window';

interface MyProfilesAppProps extends WindowAppProps {
    windowTitle: string;
    windowBarIcon: IconName;
}

const profiles = [
    {
        name: 'GitHub',
        href: 'https://github.com/aayush8106',
        icon: 'https://cdn.simpleicons.org/github/181717',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/aayushPatel81',
        icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/linkedin.svg',
    },
    {
        name: 'npm',
        href: 'https://www.npmjs.com/package/create-bbp-node',
        icon: 'https://cdn.simpleicons.org/npm/CB3837',
    },
];

const MyProfilesApp: React.FC<MyProfilesAppProps> = ({
    onClose,
    onInteract,
    onMinimize,
    windowTitle,
    windowBarIcon,
}) => (
    <Window
        top={40}
        left={60}
        width={640}
        height={420}
        windowTitle={windowTitle}
        windowBarIcon={windowBarIcon}
        bottomLeftText="My Profiles"
        closeWindow={onClose}
        minimizeWindow={onMinimize}
        onInteract={onInteract}
    >
        <div style={styles.page}>
            <div style={styles.content}>
                <h1 style={styles.title}>My Profiles</h1>

                <div style={styles.profiles}>
                    {profiles.map((profile) => (
                        <a
                            key={profile.name}
                            href={profile.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${profile.name}`}
                            style={styles.profileLink}
                        >
                            <img
                                src={profile.icon}
                                alt={profile.name}
                                style={styles.profileImage}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </Window>
);

const styles: StyleSheetCSS = {
    page: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: 24,
        boxSizing: 'border-box',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: 'max-content',
        maxWidth: '100%',
    },
    title: {
        fontSize: 'clamp(40px, 10vw, 72px)',
        lineHeight: 1,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        margin: 0,
    },
    profiles: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 32,
    },
    profileLink: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
        height: 64,
        boxSizing: 'border-box',
        border: '1px solid #777777',
        backgroundColor: '#ffffff',
        cursor: 'pointer',
    },
    profileImage: {
        display: 'block',
        width: 48,
        height: 48,
        objectFit: 'contain',
    },
};

export default MyProfilesApp;