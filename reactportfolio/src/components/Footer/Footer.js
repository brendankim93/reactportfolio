import React from "react";
import styled from "styled-components";

const Ft = styled.div`
    background: #1a1a1a;
    display: flex;
    padding: 10px;
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
