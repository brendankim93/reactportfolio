import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Container from "./components/Container";
import SimpleSlider from "./components/SimpleSlider";
import Container2 from "./components/Container2";
import Container3 from "./components/Container3";
import styled from "styled-components";
import ReallySmoothScroll from "really-smooth-scroll";

const Nav = styled.div`
    display: flex;
    background-color: black;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    width: 100%;
    z-index: 1;
`;

const NavTitle = styled.h3`
    font-family: 'VT323', monospace;
    color: white;
    text-align: center;
    margin-left: 60px;
    margin-right: 760px;
    letter-spacing: 2px;
    font-size: 22px;
    cursor: crosshair;
`;

const Links = styled.a`
    font-family: 'VT323', monospace;
    text-decoration: none;
    color: white;
    font-size: 16px;
    padding-left: 20px;
    padding-top: 25px;
    cursor: crosshair;
`;

function linkClickOne() {
  window.scrollTo(0, 600);
  console.log("scrolling about");
}

function linkClickTwo() {
  window.scrollTo(0, 1700);
  console.log("scrolling portfolio");
}

function linkClickThree() {
  window.scrollTo(0, 2600);
  console.log("scrolling experience");
}

function linkClickFour() {
  window.scrollTo(0, 3300);
  console.log("scrolling contact");
}

function linkClickHome() {
  window.scrollTo(0, 0);
  console.log("scrolling home");
}

ReallySmoothScroll.shim();

const App = () => (
  <div>  
    <Nav>
        <NavTitle onClick={linkClickHome}><i className="fa fa-code"></i> Brendan Kim</NavTitle>
        <Links onClick={linkClickOne}><i className="fa fa-address-card"></i> About Me</Links>
        <Links onClick={linkClickTwo}><i className="fa fa-book"></i> Portfolio</Links>
        <Links onClick={linkClickThree}><i className="fa fa-history"></i> Experience</Links>
        <Links onClick={linkClickFour}><i className="fa fa-phone-square"></i> Contact</Links>
    </Nav>
      <Wrapper />
      <Container id="aboutme" />
      <SimpleSlider />
      <Container2 />
      <Container3 />
    <Footer />
  </div>
);

export default App;
