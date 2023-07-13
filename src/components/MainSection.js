import React from "react";
import sand from "../images/sand.png"
import image1 from "../images/image1.avif"
import image2 from "../images/image2.png"
import image3 from "../images/image3.jpeg"
import image4 from "../images/image4.jpeg"
import image5 from "../images/image5.webp"
import style from "./style/style.css";

function MainSection() {
    return (
     <div>
        <section>
            <a href="#">
                <h3 className="float">Software Engineer</h3>
                    <div className="image">
                        <img src={sand} alt="sand"/>
                    </div>
            </a>
        </section>
        <section id="about">
                <div className="about-title">
                    <h2>About Me</h2>
                </div>
                <div id="mypara">
                    <p>Hi I'm Vita Fomin, I am currently studying to be fullstack software engineer. I have been working in the medical field for about 3 years now, and looking to make a career change to coding. I have been thinking about a career change for quite some time now.
                    </p>
                    <p>
                     I worked quite a bit throughout the pandemic, and it wasn't until I realized that my job was taking a huge toll on my health. I started to get horrible headaches and experience dizziness. I knew then that I had been burnt out and over worked. Working in the medical field has been very rewarding, and I honestly loved every part of it. I just know now that it is time for me to take a big step and make that switch. Not beccaue I don't love it, but because I need prioratize my health over all.   
                    </p>
                    <p>
                     I am very excited to start this new journey in my life, and can't wait to see where my coding takes me.   
                    </p>
                </div>
        </section>
        <section id="work">
            <div className="work-title">
                <h2>Work</h2>
            </div>
            <div id="mywork">
                <div className="big">
                    <a href="#">
                        <h4 id="float-img-1">Abstract
                            <p>HTML, CSS</p>
                        </h4>
                        <img src={image1} alt="abstract white"/>
                    </a>
                </div>
                <div className="small">
                    <div>
                        <a href="#">
                            <h4 id="float-img-2">Building Blocks
                            <p>HTML</p>
                            </h4>
                            <img src={image2}/>
                        </a>
                    </div>
                    <a href="#">
                        <h4 id="float-img-3">Wave
                            <p>HTML, CSS</p>
                        </h4>
                        <img src={image3}/>
                    </a>
                    <a href="#">
                        <h4 id="float-img-4">Perspective
                            <p>HTML, JavaScript</p>
                        </h4>
                        <img src={image4} alt="abstract phone"/>
                    </a>
                    <a href="#">
                        <h4 id="float-img-5">Illusion
                            <p>HTML, CSS, JavaScript</p>
                        </h4>
                        <img src={image5} alt="abstract"/>
                    </a>                    
                </div>
            </div>
        </section>  
     </div>
    )
};

export default MainSection;