import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface ChatProjectsProps {}

const ChatProjects: React.FC<ChatProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Chat Room</h1>
            <h3>Project</h3>
            <br />
            <p>
                Below are some of my Public Chat Room software projects I have worked on
                over the last few months.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">

            <h2>Public Chat Room</h2><br/>

                <p>Public Chat Room is a web-based real-time communication application that allows multiple users to join a shared chat space and exchange messages. The project was built to explore how users can communicate through a web interface while working with client-side interactions, message handling, and a responsive chat experience.</p>

            <br/>

             <p>The project focuses on creating a simple and accessible chat environment where users can enter the room, send messages, and interact with other connected users. Building this project helped me strengthen my understanding of web development, JavaScript, DOM manipulation, event handling, and client-server communication.</p>
                <br />
                <h3>Base Version:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://chat-room-aa1w.onrender.com"
                        >
                            <p>
                                <b>[Live Demo]</b> - chat-room-aa1w.onrender.com
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/Aayush8106/Chat-Room"
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

export default ChatProjects;