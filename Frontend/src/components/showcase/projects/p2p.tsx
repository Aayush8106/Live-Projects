import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface P2PProjectsProps {}

const P2PProjects: React.FC<P2PProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>P2P File Share</h1>
            <h3>Project</h3>
            <br />
            <p>
                Below are some of my p2p File sharing software projects I have worked on
                over the last few months.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">

            <h2>p2p File sharing</h2><br/>

                <p>P2P File Share is a web-based peer-to-peer file sharing application that allows users to transfer files directly between devices without relying on a traditional cloud storage service. The project was built to explore how files can be shared between connected devices through a web interface while working with peer-to-peer communication and browser-based file handling.</p>

            <br/>

              <p>The project focuses on creating a simple and convenient file-sharing environment where users can connect with another device and transfer files directly. Building this project helped me strengthen my understanding of web development, JavaScript, networking concepts, peer-to-peer communication, file handling, and client-side interactions.</p>
                <br />
                <h3>Base Version:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://p2p-file-sharing-rf0q.onrender.com"
                        >
                            <p>
                                <b>[Live Demo]</b> - p2p-file-sharing-rf0q.onrender.com
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/Aayush8106/P2P-File-Sharing"
                        >
                            <p>
                                <b>[GitHub]</b> - Source Code
                            </p>
                        </a>
                    </li>
                </ul>
                <br />
                <h3>Upgrade Version:</h3>
                <ul>
                    <li>
                        <p>
                            <b>[Working]</b> - Work is under progress...
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default P2PProjects;