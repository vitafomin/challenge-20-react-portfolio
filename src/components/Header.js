import React from "react";
import style from "./style/style.css";

function Header() {
    return (
    <header className="head">
        <h1 id="name">Vita Fomin</h1>
        <nav>
            <ul>
                {/* <li><a href="#about">About Me</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact Me</a><li>
                <li><a href="#4">Resume</a></li> */}
            </ul>
        </nav>
    </header>
    );
};

export default Header;