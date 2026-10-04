import React, { useEffect, useState } from 'react';
import { Link } from '../general';
import { useLocation } from 'react-router-dom';
import useViewport from '../../hooks/useViewport';

export interface VerticalNavbarProps {}

const VerticalNavbar: React.FC<VerticalNavbarProps> = (props) => {
    const location = useLocation();
    const [projectsExpanded, setProjectsExpanded] = useState(false);
    const [isHome, setIsHome] = useState(false);

    const { isMobile } = useViewport();

    useEffect(() => {
        if (location.pathname.includes('/projects')) {
            setProjectsExpanded(true);
        } else {
            setProjectsExpanded(false);
        }
        if (location.pathname === '/') {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
        return () => {};
    }, [location.pathname]);

    const m = isMobile;

    return !isHome ? (
        <div style={m ? styles.navbarMobile : styles.navbar}>
            <div style={m ? styles.headerMobile : styles.header}>
                <h1 style={m ? styles.headerTextMobile : styles.headerText}>
                    Aayush
                </h1>
                <h1 style={m ? styles.headerTextMobile : styles.headerText}>
                    Patel
                </h1>
                <h3 style={m ? styles.headerShowcaseMobile : styles.headerShowcase}>
                    Showcase '26
                </h3>
            </div>
            <div style={m ? styles.linksMobile : styles.links}>
                <Link
                    containerStyle={m ? styles.linkMobile : styles.link}
                    to=""
                    text="HOME"
                />
                <Link
                    containerStyle={m ? styles.linkMobile : styles.link}
                    to="about"
                    text="ABOUT"
                />
                <Link
                    containerStyle={m ? styles.linkMobile : styles.link}
                    to="experience"
                    text="EXPERIENCE"
                />
                <Link
                    containerStyle={Object.assign(
                        {},
                        m ? styles.linkMobile : styles.link,
                        !m && projectsExpanded && styles.expandedLink
                    )}
                    to="projects"
                    text="PROJECTS"
                />
                {
                    // if current path contains projects
                    projectsExpanded && (
                        <div style={m ? styles.insetLinksMobile : styles.insetLinks}>
                            <Link
                                containerStyle={
                                    m ? styles.linkMobile : styles.insetLink
                                }
                                to="projects/chat"
                                text="Chat Room"
                            />
                            <Link
                                containerStyle={
                                    m ? styles.linkMobile : styles.insetLink
                                }
                                to="projects/p2p"
                                text="p2p File Share"
                            />
                        </div>
                    )
                }
                <Link
                    containerStyle={m ? styles.linkMobile : styles.link}
                    to="contact"
                    text="CONTACT"
                />
            </div>
        </div>
    ) : (
        <></>
    );
};

const styles: StyleSheetCSS = {
    navbar: {
        width: 300,
        height: '100%',
        flexDirection: 'column',
        padding: 48,
        boxSizing: 'border-box',
        position: 'fixed',
        overflow: 'hidden',
    },
    header: {
        flexDirection: 'column',
        marginBottom: 64,
    },
    headerText: {
        fontSize: 38,
        lineHeight: 1,
    },
    headerShowcase: {
        marginTop: 12,
    },
    navbarMobile: {
        width: '100%',
        flexDirection: 'column',
        flexShrink: 0,
        padding: '12px 16px',
        boxSizing: 'border-box',
        borderBottom: '2px solid black',
        backgroundColor: 'white',
    },
    headerMobile: {
        alignItems: 'baseline',
        flexWrap: 'wrap',
        columnGap: 8,
        marginBottom: 8,
    },
    headerTextMobile: {
        fontSize: 26,
        lineHeight: 1,
    },
    headerShowcaseMobile: {
        fontSize: 16,
    },
    linksMobile: {
        flexWrap: 'wrap',
        alignItems: 'center',
        columnGap: 16,
        rowGap: 6,
    },
    linkMobile: {
        padding: '2px 0',
    },
    insetLinksMobile: {
        flexWrap: 'wrap',
        columnGap: 16,
    },
    link: {
        marginBottom: 32,
    },
    expandedLink: {
        marginBottom: 16,
    },
    insetLinks: {
        flexDirection: 'column',
        marginLeft: 32,
        marginBottom: 16,
    },
    insetLink: {
        marginBottom: 8,
    },
    links: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    },
};

export default VerticalNavbar;
