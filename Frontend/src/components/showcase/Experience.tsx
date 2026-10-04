import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Open to Work</h1>
                        <h4>Mumbai, India</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Jobs & Internships</h3>
                        <b>
                            <p>Available Anywhere in Mumbai</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    I'm just starting my career, so I don't have professional
                    work experience to show yet, but I'm eager to learn, build
                    and contribute to a real team. I'm currently looking for
                    my first opportunity and I'm open to both full-time jobs
                    and internships.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            <b>Looking for:</b> full-time jobs as well as
                            internships.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Location:</b> available to work anywhere in
                            Mumbai, India.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Attitude:</b> quick to learn, happy to take on
                            new challenges and ready to grow with the team.
                        </p>
                    </li>
                </ul>
                <br />
                <p>
                    If you have an opening or just want to chat, please reach
                    out through the <Link to="/contact">contact page</Link> or
                    email me at{' '}
                    <a href="mailto:aayushp8106@gmail.com">
                        aayushp8106@gmail.com
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        columnGap: 16,
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
