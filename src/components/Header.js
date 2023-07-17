import React from "react";
import Resume20 from "../images/Resume20.pdf"

function Header() {
    return (
    <header className="head">
        <h1 id="name">Vita Fomin</h1>
        <nav>
            <ul>
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#work">Work</a>
                </li>
                <li>
                    <a href="#contact">Contact Me</a>
                </li>
                <li>
                    <a href="https://docs.google.com/document/d/1jtRzZWAGF81lA6T1tq5ylLSOFa1es8mveDIBXrbI6Vo/edit?usp=sharing">Resume</a>
                </li>
            </ul>
        </nav>
    </header>
    );
};

export default Header;