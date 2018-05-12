import React from "react";
import styled from "styled-components";

const Ft = styled.div`
    background: black;
    display: flex;
    padding: 10px;
    clear: left;
`;

const FtText = styled.h3`
    font-family: Arial;
    color: white;
    font-size: 12px;
    margin-left: 650px;
`;

const Footer = () => (
    <Ft>
        <FtText>&copy; Brendan Kim</FtText>
    </Ft>
);

export default Footer;
