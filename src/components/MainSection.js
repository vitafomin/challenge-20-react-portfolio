import React from "react";
import sand from "../images/sand.jpeg"
import image1 from "../images/image1.avif"
import image4 from "../images/image4.jpeg"
import image5 from "../images/image5.webp"
import profilePic from "../images/profilePic.jpg"
import RoamReady from "../images/RoamReady.jpeg"
import WeatherDash from "../images/WeatherDash.jpeg"

function MainSection() {
    return (
     <div>
        <section className="background-image">
            <a href="https://www.linkedin.com/in/vita-fomin-a419a7214/">
                <h3 className="float">Software Engineer</h3>
            </a>
            <div>
                <img className="myImage" src={profilePic} alt="profile"/>
            </div>
        </section>
        <section id="about">
                <div className="about-title">
                    <h2>About Me</h2>
                </div>
                <div id="mypara">
                    <p>Hi I'm Vita Fomin, I am currently studying to be fullstack software engineer. I have been working in the medical field for about 3 years now, and looking to make a career change to coding. I have been thinking about a career change for quite some time now.
                    </p>
                    <p>
                     I worked quite a bit throughout the pandemic, and it wasn't until I realized that my job was taking a huge toll on my health. I started to get horrible headaches and experience dizziness. I knew then that I had been burnt out and over worked. Working in the medical field has been very rewarding, and I honestly loved every part of it. I just know now that it is time for me to take a big step and make that switch. Not because I don't love it, but because I need prioratize my health over all.   
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
                    <a href="https://limitless-badlands-70129.herokuapp.com/">
                        <h4 id="float-img-1">Roam Ready
                            <p>JavaScript, Handlebars, CSS</p>
                        </h4>
                        <img src={RoamReady} alt="abstract white"/>
                    </a>
                </div>
                <div className="small">
                    <div>
                        <a href="https://vitafomin.github.io/challenge-6-weather-dashboard/">
                            <h4 id="float-img-2">Weather Dashboard
                            <p>HTML, CSS, JavaScript</p>
                            </h4>
                            <img src={WeatherDash}/>
                        </a>
                    </div>
                    <a href="https://vitafomin.github.io/nutrition-is-the-mission/">
                        <h4 id="float-img-3">Nutrition is the Mission
                            <p>HTML, CSS, JavaScript</p>
                        </h4>
                        <img src={image1}/>
                    </a>
                    <a href="https://github.com/vitafomin/challenge-18-social-network-api">
                        <h4 id="float-img-4">Social Network API
                            <p>JavaScript</p>
                        </h4>
                        <img src={image4} alt="abstract phone"/>
                    </a>
                    <a href="https://github.com/vitafomin/challenge-10-svg-logo-maker">
                        <h4 id="float-img-5">SVG Logo Maker
                            <p>JavaScript</p>
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