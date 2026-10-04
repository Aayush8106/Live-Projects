import React, { useState } from 'react';
import Window from '../os/Window';

export interface FiringDinoAppProps extends WindowAppProps {}

// Edit these to change what the window says.
const TITLE = 'Game is under Development:';
const LABEL = 'Working...';
const MESSAGE = 'Our Developer friend is working for this game';
const STACK = (
    <>
        {'    you can check the progress on ('}
        <a
            href="https://github.com/Nikhil-P-C/C-PLUS-PLUS_Android-Project"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#6cb6ff', cursor: 'pointer' }}
        >
            https://github.com/Nikhil-P-C/C-PLUS-PLUS_Android-Project
        </a>
        {')'}
    </>
);

const FiringDinoApp: React.FC<FiringDinoAppProps> = (props) => {
    // Starting size on desktop: never bigger than the screen.
    // (On phones the Window component makes it full screen by itself.)
    const [width, setWidth] = useState(
        Math.min(920, window.innerWidth - 40)
    );
    const [height, setHeight] = useState(
        Math.min(750, window.innerHeight - 80)
    );

    return (
        <Window
            top={10}
            left={10}
            width={width}
            height={height}
            windowTitle="Firing Dino"
            windowBarIcon="windowGameIcon"
            windowBarColor="#941d13"
            bottomLeftText={'Firing Dino'}
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
            minimizeWindow={props.onMinimize}
        >
            <div style={styles.page}>
                <div style={styles.title}>{TITLE}</div>
                <div style={styles.errorBox}>
                    <div style={styles.label}>{LABEL}</div>
                    <pre style={styles.message}>
                        {MESSAGE}
                        {'\n'}
                        {STACK}
                    </pre>
                </div>
            </div>
        </Window>
    );
};

const styles: StyleSheetCSS = {
    page: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'column',
        boxSizing: 'border-box',
        backgroundColor: '#000',
        padding: 'clamp(12px, 3vw, 20px)',
        overflowY: 'auto',
        fontFamily: 'Helvetica, Arial, sans-serif',
    },
    title: {
        color: '#ff5555',
        fontSize: 'clamp(24px, 6vw, 40px)',
        lineHeight: 1.2,
        marginBottom: 'clamp(20px, 5vw, 40px)',
        overflowWrap: 'anywhere',
    },
    errorBox: {
        flexDirection: 'column',
        backgroundColor: '#190505',
        padding: 'clamp(12px, 3vw, 20px)',
    },
    label: {
        color: '#ff5555',
        fontSize: 'clamp(20px, 4.5vw, 28px)',
        marginBottom: 16,
    },
    message: {
        margin: 0,
        color: '#fff',
        fontSize: 'clamp(13px, 3.4vw, 16px)',
        lineHeight: 1.4,
        fontFamily: 'Menlo, Consolas, Monaco, "Courier New", monospace',
        whiteSpace: 'pre-wrap',
        overflowWrap: 'anywhere',
        userSelect: 'text',
    },
};

export default FiringDinoApp;
