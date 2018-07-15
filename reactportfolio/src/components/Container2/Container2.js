import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

class Container2 extends React.Component {
    render() {
        const Container = styled.div`
        background: #f3ffcc;
        padding 7em;
        `;

        const ExperienceTitle = styled.h1`
        font-family: 'VT323', monospace;
        font-size: 30px;
        color: black;
        text-align: center;
        border-style: solid;
        border-width: 0px 0px 1px 0px;
        padding-bottom: 15px;
        width: 20%;
        margin-left: 470px;
        margin-bottom: 30px;
        margin-top: 10px;
        `;

        const ResumeImage = styled.img`
        margin-left: auto;
        margin-right: auto;
        display: block;
        `;

        const ImageText = styled.p`
        font-family: 'Marvel', sans-serif;
        font-size: 16px;
        text-align: center;
        font-weight: bold;
        word-spacing: 3px;
        margin-bottom: 30px;
        `
    

    return (
        <Container>
            <Fade left duration={1000}>
            <ExperienceTitle>
                My Experience
            </ExperienceTitle>
            </Fade>
            <Fade left duration={1000}>
            <ImageText>
            <i className="fa fa-image"></i> Click the image to view the full resume!
            </ImageText>
            </Fade>
            <a href="https://drive.google.com/file/d/1uEMFfwetWnfg1hr3H28zr_1na2hE11Eh/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <ResumeImage src={require("../../assets/ResumeScreenshot.png")} alt="Resume" />
            </a>
        </Container>
    );
  }
};

export default Container2;