import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { device } from "../../media.js";

class Container2 extends React.Component {
    render() {
        const Container = styled.div`
        background: #f3ffcc;
        padding: 7em;
        
        @media ${device.iphone} {
            max-width: 375px;
            max-height: 920px;
            padding: 1em;
          }
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

        @media ${device.iphone} {
        display: block;
        margin-left: auto;
        margin-right: auto;
        font-size: 24px;
        width: 30%;
        }
        `;

        const ResumeImage = styled.img`
        margin-left: auto;
        margin-right: auto;
        display: block;

        @media ${device.iphone} {
            width: 300px;
            height: 350px;
            margin-bottom: 30px;
          }
        `;

        const ImageText = styled.p`
        font-family: 'Marvel', sans-serif;
        font-size: 16px;
        text-align: center;
        font-weight: bold;
        word-spacing: 3px;
        margin-bottom: 30px;
        
        @media ${device.iphone} {
            font-size: 13px;
          }
        `;
    

    return (
        <Container>
            <Fade left duration={1000}>
            <ExperienceTitle>
                Experience
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