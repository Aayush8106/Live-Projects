import React from 'react';

const profile = {
    name: 'Aayush Patel',
    headline: 'Web Developer | MERN Stack',
    location: 'India',
    about:
        "I'm a web developer and fresher focused on building web applications with the MERN stack. I'm completing a Bachelor of Computer Applications at Smt. K. G. Mittal College, expected in May 2027.",
    education: 'Smt. K. G. Mittal College',
    degree: 'Bachelor of Computer Applications',
    graduation: 'Expected May 2027',
    skills: [
        'JavaScript',
        'TypeScript',
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'HTML',
        'CSS',
    ],
};

const LINKEDIN_URL = 'https://www.linkedin.com/in/aayushpatel81/';

const LinkedInPreview: React.FC = () => {
    return (
        <div style={styles.page}>
            <div style={styles.topBar}>
                <strong>LinkedIn</strong>
                <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.link}
                >
                    Open LinkedIn profile
                </a>
            </div>

            <div style={styles.content}>
                <div style={styles.profileCard}>
                    <div style={styles.banner} />

                    <div style={styles.profileHeader}>
                        <div style={styles.avatar}>AP</div>

                        <div style={styles.identity}>
                            <h1 style={styles.name}>{profile.name}</h1>
                            <p style={styles.headline}>{profile.headline}</p>
                            <p style={styles.location}>{profile.location}</p>
                        </div>
                    </div>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>About</h2>
                    <p style={styles.sectionText}>{profile.about}</p>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>Education</h2>
                    <div style={styles.educationItem}>
                        <div style={styles.educationMark}>KG</div>
                        <div style={styles.educationDetails}>
                            <h3 style={styles.itemTitle}>{profile.education}</h3>
                            <p style={styles.itemText}>{profile.degree}</p>
                            <p style={styles.mutedText}>{profile.graduation}</p>
                        </div>
                    </div>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>Skills</h2>
                    <div style={styles.skills}>
                        {profile.skills.map((skill) => (
                            <span key={skill} style={styles.skill}>
                                {skill}
                            </span>
                        ))}
                    </div>
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
        padding: 16,
        gap: 16,
        backgroundColor: '#f3f2ef',
        color: '#191919',
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
        borderBottom: '1px solid #d8d8d8',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 900,
        minWidth: 0,
        margin: '0 auto',
        gap: 16,
    },
    profileCard: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minWidth: 0,
        overflow: 'hidden',
        border: '1px solid #d8d8d8',
        borderRadius: 8,
        backgroundColor: '#ffffff',
    },
    banner: {
        width: '100%',
        height: 120,
        backgroundColor: '#dce6f1',
    },
    profileHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        minWidth: 0,
        padding: '0 24px 24px',
        gap: 16,
    },
    avatar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 96,
        height: 96,
        flex: '0 0 96px',
        marginTop: -42,
        border: '4px solid #ffffff',
        borderRadius: '50%',
        backgroundColor: '#0a66c2',
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 700,
    },
    identity: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 220px',
        minWidth: 0,
        paddingTop: 12,
        gap: 5,
    },
    name: {
        margin: 0,
        fontSize: 26,
        lineHeight: 1.25,
        overflowWrap: 'anywhere',
    },
    headline: {
        margin: 0,
        fontSize: 16,
        lineHeight: 1.5,
        overflowWrap: 'anywhere',
    },
    location: {
        margin: 0,
        color: '#666666',
        fontSize: 14,
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minWidth: 0,
        boxSizing: 'border-box',
        padding: 24,
        gap: 14,
        border: '1px solid #d8d8d8',
        borderRadius: 8,
        backgroundColor: '#ffffff',
    },
    sectionTitle: {
        margin: 0,
        fontSize: 20,
        lineHeight: 1.3,
    },
    sectionText: {
        margin: 0,
        fontSize: 15,
        lineHeight: 1.6,
        whiteSpace: 'pre-wrap',
        overflowWrap: 'anywhere',
    },
    educationItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        minWidth: 0,
        gap: 14,
    },
    educationMark: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        flex: '0 0 48px',
        backgroundColor: '#e9eef3',
        fontWeight: 700,
    },
    educationDetails: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 200px',
        minWidth: 0,
        gap: 4,
    },
    itemTitle: {
        margin: 0,
        fontSize: 16,
        overflowWrap: 'anywhere',
    },
    itemText: {
        margin: 0,
        fontSize: 14,
        overflowWrap: 'anywhere',
    },
    mutedText: {
        margin: 0,
        color: '#666666',
        fontSize: 14,
    },
    skills: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        minWidth: 0,
        gap: 8,
    },
    skill: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '100%',
        boxSizing: 'border-box',
        padding: '7px 12px',
        border: '1px solid #b0b0b0',
        borderRadius: 18,
        fontSize: 14,
        overflowWrap: 'anywhere',
    },
    link: {
        color: '#0a66c2',
    },
};

export default LinkedInPreview;