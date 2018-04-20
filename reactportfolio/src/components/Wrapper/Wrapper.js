import React from "react";
import styled from "styled-components";

const Header = styled.div`
    background: #E0FFFF;
    padding: 8em;
`;

const HeaderText = styled.h1`
    font-family: 'Permanent Marker', cursive;
    text-align: center;
    color: black;
    font-size: 4em;
    margin-bottom: 1em;
`;

const Wrapper = () => (
    <Header>
        <HeaderText>
            Brendan Kim
        </HeaderText>
        <HeaderText>
            "Web Developer"
        </HeaderText>
    </Header>
);

export default Wrapper;