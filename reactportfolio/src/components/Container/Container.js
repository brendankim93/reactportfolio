import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import { device } from '../../media.js';

class Container extends React.Component {
    render () {
    const Container = styled.div`
        background: linear-gradient(LightCyan, white);
        padding: 2em;  

        @media ${device.iphone} {
            max-width: 375px;
            max-height: 900px;
          }
    `;

    const SkillsContainer = styled.div`
        background: white;
        padding: 2em;
        margin-bottom: 150px;

        @media ${device.iphone} {
            padding: 2em;
            margin-bottom: 50px;
            max-width: 375px;
            max-height: 900px;
          }
    `;

    const AboutTitle = styled.h1`
        color: black;
        font-size: 30px;
        font-family: 'VT323', monospace;
        font-weight: strong;
        text-align: center;
        border-style: solid;
        border-width: 0px 0px 1px 0px;
        padding-bottom: 15px;
        width: 20%;
        margin-left: 540px;
        margin-bottom: 60px;
        margin-top: 60px;

        @media ${device.iphone} {
            display: block;
            margin-left: auto;
            margin-right: auto;
            font-size: 24px;
            width: 30%;
            margin-bottom: 30px;
          }
    `;

    const AboutImage = styled.img`
        width: 10%;
        border-radius: 90%;
        margin-left: 50px;
        border: solid 3px white;
        float: left;
        margin-right: 40px;
        margin-bottom: 10px;

        @media ${device.iphone} {
            float: none;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 30%;
          }
    `;

    const AboutText = styled.p`
        font-family: 'Marvel', sans-serif;
        font-size: 18px;
        text-indent: 50px;
        line-height: 1.6;
        margin-left: 270px;
        margin-right: 200px;
        margin-bottom: 30px;

        @media ${device.iphone} {
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 50px;
            font-size: 13px;
            text-align: center;
          }
    `;

    const SkillsImages = styled.img`
        width: 10%;
        float: left;
        position: relative;
        z-index: -1;
    `;

        return (
            <div>
                <Container>
                <Fade left duration={1000}>
                <AboutTitle>
                    About Me
                </AboutTitle>
                </Fade>
                <AboutImage src={require("../../assets/profilepic.jpeg")} alt="Profile Pic">
                </AboutImage>
                <Fade left duration={1000}>
                <AboutText>
                        Hi, I'm Brendan Kim. I am a Full-Stack Web Developer, but I prefer to work on Front-End Development. I like to mainly use React.js because I feel like it makes the coding process very efficient and there is so much you can do with it. I hope to specialize in React when working for a company. 
                        HTML and CSS are my best friends, but I do occasionally use Boostrap and other CSS Frameworks when it is necessary. There is nothing like the feeling of accomplishment after you've finished creating a clean and visually appealing web page. That's what makes Web Development worth it for me! As a man of many talents, I like to use coding as a way to utilize my creativity and ingenuity.  
                </AboutText>
                </Fade>
                <Fade left duration={1000}>
                <AboutText>
                        Now let's talk about my background. I graduated from the University of California, Riverside with a degree in Media and Cultural Studies. After many years of studying how much media and technology affect society, I always knew that I would somehow end up in the tech industry. After slaving away at my sales job for a few months, I was fortunate enough to discover the world of coding. 
                        I did my research on various languages and taught myself the basics of HTML and CSS. It wasn't completely foreign to me because prior to this I used to tinker with custom MySpace and Tumblr layouts back in the day. From there, I wanted to further my knowledge to become a Full-Stack Developer so I decided to sign with the UCI Coding Bootcamp where I gained the skills to build a complete
                        web application from scratch. Upon receiving my certification, I have worked on passion projects and finished up this portfolio site! I am currently seeking a position as a Junior Web Developer where I can contribute to a growing business while gaining the skills of a professional coder. With a background in sales, my communication skills will allow me to become a great addition to a team of developers.
                        Thanks for stopping by!
                </AboutText>
                </Fade>
                </Container>
                <SkillsContainer>
                <Fade left duration={1000}>
                <AboutTitle>
                    Skill Set
                </AboutTitle>
                </Fade>
                <Pulse>
                <SkillsImages src={require("../../assets/html5.png")} alt="HTML5" />
                <SkillsImages src={require("../../assets/css3.png")} alt="CSS3" />
                <SkillsImages src={require("../../assets/bootstrap.png")} alt="Bootstrap" />
                <SkillsImages src={require("../../assets/jquery.png")} alt="JQuery" />
                <SkillsImages src={require("../../assets/mongodb.png")} alt="MongoDB" />
                <SkillsImages src={require("../../assets/reactjs.png")} alt="ReactJS" />
                <SkillsImages src={require("../../assets/javascript.png")} alt="Javascript" />
                <SkillsImages src={require("../../assets/git.png")} alt="Git" />
                <SkillsImages src={require("../../assets/github.png")} alt="GitHub" />
                <SkillsImages src={require("../../assets/mysql.png")} alt="MySQL" />
                <SkillsImages src={require("../../assets/nodejs.png")} alt="NodeJS" />
                <SkillsImages src={require("../../assets/express.png")} alt="Express" />
                </Pulse>
                </SkillsContainer>
            </div>
        );
    }
}

export default Container;