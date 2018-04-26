import React from "react";
import styled from "styled-components";

const Nav = styled.div`
    display: flex;
    background-color: #1a1a1a;
  
`;

const NavTitle = styled.h3`
    font-family: 'VT323', monospace;
    color: white;
    text-align: center;
    margin-left: 90px;
    margin-right: 775px;
    letter-spacing: 2px;
    font-size: 22px;
`;

const Links = styled.a`
    font-family: 'VT323', monospace;
    text-decoration: none;
    color: white;
    font-size: 16px;
    padding-left: 30px;
    padding-top: 25px;
`

const Navbar = () => (
    <Nav>
        <NavTitle><i className="fa fa-code"></i> Brendan Kim</NavTitle>
        <Links>About Me</Links>
        <Links>Projects</Links>
        <Links>Experience</Links>
        <Links>Contact</Links>        
    </Nav>
);

export default Navbar;