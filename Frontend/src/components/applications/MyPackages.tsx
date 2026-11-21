import React, { useState } from 'react';
import { IconName } from '../../assets/icons';
import npmImage from '../../assets/icons/npmImg.png';
import NpmPreview from './preview/NpmPreview';
import Window from '../os/Window';

interface MyPackagesAppProps extends WindowAppProps {
    windowTitle: string;
    windowBarIcon: IconName;
}

const MyPackages: React.FC<MyPackagesAppProps> = ({
    windowTitle = 'My Packages',
    windowBarIcon = 'myPackages',
    onClose,
    onMinimize,
    onInteract,
}) => {
    const [showNpm, setShowNpm] = useState(false);

    return (
        <Window
            top={40}
            left={60}
            width={900}
            height={560}
            windowTitle={windowTitle}
            windowBarIcon={windowBarIcon}
            bottomLeftText="My Packages"
            closeWindow={onClose}
            minimizeWindow={onMinimize}
            onInteract={onInteract}
        >
            <div style={styles.layout}>
                {!showNpm ? (
                    <div style={styles.frontPage}>
                        <h1 style={styles.heading}>Packages</h1>

                        <button
                            type="button"
                            style={styles.packageTile}
                            onClick={() => setShowNpm(true)}
                        >
                            <img
                            src="https://cdn.simpleicons.org/npm/CB3837"
                            alt="npm logo"
                            style={styles.npmImage}
                        />
                            <strong style={styles.packageName}>npm</strong>
                        </button>
                    </div>
                ) : (
                    <div style={styles.openPackage}>
                        <button
                            type="button"
                            style={styles.backButton}
                            onClick={() => setShowNpm(false)}
                        >
                            ← Back to Packages
                        </button>

                        <div style={styles.previewArea}>
                            <NpmPreview />
                        </div>
                    </div>
                )}
            </div>
        </Window>
    );
};

const styles: StyleSheetCSS = {
    layout: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        minWidth: 0,
        minHeight: 0,
        overflow: 'hidden',
        backgroundColor: '#ffffff',
    },
    frontPage: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minWidth: 0,
        padding: 24,
        gap: 20,
        overflowY: 'auto',
    },
    heading: {
        margin: 0,
        fontSize: 24,
    },
        packageTile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        minHeight: 150,
        boxSizing: 'border-box',
        padding: 16,
        gap: 8,
        border: '1px solid #aaaaaa',
        borderRadius: 4,
        backgroundColor: '#f7f7f7',
        color: '#222222',
        cursor: 'pointer',
    },
    npmImage: {
        width: 80,
        height: 56,
        objectFit: 'contain',
    },
    packageName: {
        fontSize: 16,
    },
    packageDetails: {
        color: '#666666',
        fontSize: 13,
        textAlign: 'center',
        overflowWrap: 'anywhere',
    },
    openPackage: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        overflow: 'hidden',
    },
    backButton: {
        alignSelf: 'flex-start',
        margin: 10,
        padding: '8px 12px',
        cursor: 'pointer',
    },
    previewArea: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        overflow: 'hidden',
    },
};

export default MyPackages;