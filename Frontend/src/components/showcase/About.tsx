import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Aayush Patel</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a Web Developer(Fresher) currently i am having no Experience! and i am using MERN as my techStack, In May
                    of 2027 I will be completing my Graduation from Smt. K. G. Mittal College
                    with my Bachelors in Computer Applications.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or Mail me an email at{' '}
                    <a href="mailto:aayushp8106@gmail.com">
                        aayushp8106@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    Hi, I'm Aayush, a passionate and curious learner interested in web development, programming, Linux, and networking. I enjoy understanding how things work rather than simply memorizing them.

                    I have been exploring technologies such as HTML, CSS, JavaScript, TypeScript, jQuery, and React, while also learning about Linux system administration, networking, DNS, DHCP, NFS, and other server technologies.

                    I particularly enjoy building projects and experimenting with ideas on my own along with exploring templates(like this current template). I like solving problems practically and learning through hands-on experience. When I come across something I don't understand, I keep exploring it until the concept becomes clear.

                    I'm continuously working on improving my programming and development skills, with the goal of becoming a better software and web developer and building useful, creative projects.
                </p>
                <br />

                <p>
                    I started programming more seriously in 2025 in my collage 2nd year,
                    initially learning how to scrape and interact with websites.
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to have a look at
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or Mail me an email
                    at{' '}
                    <a href="mailto:aayushp8106@gmail.com">
                        aayushp8106@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};


export default About;
