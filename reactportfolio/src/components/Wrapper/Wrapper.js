import React from "react";
import styled from "styled-components";
import Zoom from 'react-reveal/Zoom';

class Wrapper extends React.Component {
    render() {
    const Header = styled.div`
        background-color: black;
        background-image: url('https://orig00.deviantart.net/b3b6/f/2010/318/3/5/matrix_code_by_rashanta-d32tdoa.gif');
        padding: 13em;
        `;

          
    const HeaderText = styled.h1`
        font-family: 'Permanent Marker', cursive;
        text-align: center;
        font-size: 35px;
        font-height: 5px;
        -webkit-text-stroke: 1px black;
        color: white;
        text-shadow:
            3px 3px 0 #000,
          -1px -1px 0 #000,  
           1px -1px 0 #000,
           -1px 1px 0 #000,
            1px 1px 0 #000;
        `;
    // const MainImage = styled.img`
    //     display: block;
    //     margin-left: auto;
    //     margin-right: auto;
    //     width: 15%;
    //     border-radius: 80%;
    //     opacity: 0.8;
    //     margin-top: 120px;
    // `;

    const ImageDesc = styled.p`
      display: block;
      margin-left: auto;
      margin-right: auto;
      font-family: 'VT323', monospace;
      font-size: 14px;
      text-align: center;
      color: white;
    `;

      return (
        <Header>
        <HeaderText>
          <Zoom cascade duration={2000}>
            Brendan Kim
          </Zoom>
        </HeaderText>
        <HeaderText>
          <Zoom cascade duration={2500}>
            "Full Stack Web Developer"
          </Zoom>
        </HeaderText>
        <Zoom cascade duration={2000}>
          <ImageDesc>
            Gif by <a href="https://rashanta.deviantart.com/" target="_blank" rel="noopener noreferrer">Rashanta</a>
          </ImageDesc>
        </Zoom>
        </Header>
      );
    }
  }


export default Wrapper;