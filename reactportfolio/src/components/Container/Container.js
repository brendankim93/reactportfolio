import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

class Container extends React.Component {
    render () {
    const Container = styled.div`
        background: linear-gradient(LightCyan, white);
        padding 7em;
        margin-bottom: 80px;  
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
        margin-left: 470px;
        margin-bottom: 50px;
        margin-top: 40px;
    `;

    const AboutImage = styled.img`
        width: 10%;
        border-radius: 90%;
        margin-left: 50px;
        border: solid 3px white;
        float: left;
        margin-right: 40px;
        margin-bottom: 10px;
    `;

    const AboutText = styled.p`
        font-family: 'Marvel', sans-serif;
        font-size: 18px;
        text-indent: 50px;
        line-height: 1.6;
        margin-left: 270px;
        margin-right: 200px;
        margin-bottom: 80px;
    `;

    const SkillsImages = styled.img`
        width: 10%;
        float: left;
    `;

        return (
            <Container>
                <Fade left duration={1000}>
                <AboutTitle>
                    Who Is He?
                </AboutTitle>
                </Fade>
                <AboutImage src={require("../../assets/profilepic.jpeg")} alt="Profile Pic">
                </AboutImage>
                <Fade left duration={1000}>
                <AboutText>
                        Bacon ipsum dolor amet venison leberkas buffalo pork picanha beef ribs swine tail tenderloin t-bone flank biltong landjaeger. Pancetta beef buffalo jerky burgdoggen short ribs shoulder porchetta drumstick landjaeger hamburger. Doner turkey beef tail sausage flank pork chop pork loin boudin turducken cupim. Porchetta sirloin tenderloin chuck kielbasa shoulder tongue ribeye chicken shankle salami. 
                    Pancetta fatback chicken frankfurter, brisket ham hock pork doner short loin strip steak sausage tenderloin salami pig.
                </AboutText>
                </Fade>
                <Fade left duration={1000}>
                <AboutText>
                        Strip steak shankle shoulder, bacon jowl porchetta salami chicken capicola turducken meatloaf andouille beef. Pig fatback tri-tip boudin, beef ribs spare ribs turkey t-bone filet mignon rump jowl. Flank t-bone beef cow jowl, shank frankfurter porchetta pork loin leberkas meatball ham. Meatball drumstick prosciutto picanha cupim, short ribs buffalo bacon ham capicola sausage brisket. 
                    Andouille ground round doner meatball leberkas drumstick biltong pork, frankfurter short loin ham hock. Chuck chicken cupim, drumstick porchetta pancetta buffalo. Jowl corned beef picanha kevin, hamburger pork loin alcatra doner filet mignon andouille ham.
                </AboutText>
                </Fade>
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
            </Container>
        );
    }
}

export default Container;