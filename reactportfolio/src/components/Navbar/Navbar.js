import React from "react";
import styled from "styled-components";

const Nav = styled.div`
    display: flex;
    background-color: black;
`;

const NavTitle = styled.h3`
    font-family: 'VT323', monospace;
    color: white;
    text-align: center;
    margin-left: 100px;
    margin-right: 750px;
    letter-spacing: 2px;
`;

const Links = styled.a`
    font-family: 'VT323', monospace;
    text-decoration: none;
    color: white;
    font-size: 18px;
    padding-left: 40px;
    padding-top: 20px;
`

const Navbar = () => (
    <Nav>
        <NavTitle>Brendan Kim</NavTitle>
        <Links>About Me</Links>
        <Links>Projects</Links>
        <Links>Experience</Links>
        <Links>Contact</Links>        
    </Nav>
);

export default Navbar;