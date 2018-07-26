import React from "react";
import styled from "styled-components";
import { device } from "../../media.js";

const Ft = styled.div`
    background: black;
    display: flex;
    padding: 30px;
    clear: left;

    @media ${device.iphone} {
        max-width: 375px;
        padding: 5px;
        }
`;

const FtText = styled.h3`
    font-family: Arial;
    color: white;
    font-size: 12px;
    margin-left: 630px;

    @media ${device.iphone} {
        display: block;
        margin-left: auto;
        margin-right: auto;
        font-size: 8px;
        }
`;

const Footer = () => (
    <Ft>
        <FtText>Brendan Kim 2018 &copy;</FtText>
    </Ft>
);

export default Footer;
