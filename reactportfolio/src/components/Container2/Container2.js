import React from "react";
import styled from "styled-components";

class Container2 extends React.Component {
    render() {
        const Container = styled.div`
        background: grey;
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
        margin-bottom: 50px;
        margin-top: 40px;
        `
    

    return (
        <Container>
            <ExperienceTitle>
                My Experience
            </ExperienceTitle>
        </Container>
    );
  }
};

export default Container2;