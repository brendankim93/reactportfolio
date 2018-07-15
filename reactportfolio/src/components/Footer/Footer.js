import React from "react";
import styled from "styled-components";

const Ft = styled.div`
    background: black;
    display: flex;
    padding: 30px;
    clear: left;
`;

const FtText = styled.h3`
    font-family: Arial;
    color: white;
    font-size: 12px;
    margin-left: 630px;
`;

const Footer = () => (
    <Ft>
        <FtText>Brendan Kim 2018 &copy;</FtText>
    </Ft>
);

export default Footer;
