import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

class Container3 extends React.Component {
    render() {
        const Container = styled.div`
        background: #ffbb99;
        padding 5em;
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
        `;

        const ContactDiv = styled.div`
        margin-left: 480px;
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