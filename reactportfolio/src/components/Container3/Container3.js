import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { device } from "../../media.js";

class Container3 extends React.Component {
    render() {
        const Container = styled.div`
        background: #ffbb99;
        padding 5em;
        
        @media ${device.iphone} {
            max-width: 375px;
            max-height: 500px;
            padding: 2em;
          }
        `;
        
        const ContactTitle = styled.h1`
        font-family: 'VT323', monospace;
        font-size: 30px;
        color: black;
        text-align: center;
        border-style: solid;
        border-width: 0px 0px 1px 0px;
        padding-bottom: 15px;
        width: 20%;
        margin-left: 520px;
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

        const ContactLinks = styled.a`
        font-size: 35px;
        color: black;
        text-align: center;
        font-family: 'Marvel', sans-serif;
        font-weight: bold;
        text-decoration: none;
        float: left;
        margin-left: 30px;

        &:hover {
        font-weight: bold;
        color: white;
        }

        @media ${device.iphone} {
            display: block;
            margin-left: auto;
            margin-right: auto;
            font-size: 24px;
            padding-left: 20px;
            }
        `;

        const ContactDiv = styled.div`
        margin-left: 480px;

        @media ${device.iphone} {
            max-width: 375px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            padding-left: 35px;
            padding-bottom: 40px;
            }
        `;


        return (
            <Container>
                <Fade left duration={1000}>
                <ContactTitle>Connect With Me</ContactTitle>
                </Fade>
                <Fade left duration={1000}>
                <ContactDiv>
                <ContactLinks href="https://www.linkedin.com/in/brendan-kim/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i>  LinkedIn</ContactLinks>
                <ContactLinks href="https://github.com/brendankim93/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i>  GitHub</ContactLinks>
                </ContactDiv>
                </Fade>
            </Container>
        );
    }
};

export default Container3;