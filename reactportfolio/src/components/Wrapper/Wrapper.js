import React from "react";
import styled from "styled-components";
import Zoom from 'react-reveal/Zoom';

class Wrapper extends React.Component {
    render() {
    const Header = styled.div`
        background: linear-gradient(Aquamarine, LightCyan);
        padding: 8.5em;
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
    const MainImage = styled.img`
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 15%;
        border-radius: 80%;
        opacity: 0.8;
    `;

      return (
        <Header>
        <MainImage src="https://upload-assets.vice.com/files/2016/03/12/14578219652016_01_23_cloud_computing.gif?resize=960:*">
        </MainImage>
        <HeaderText>
          <Zoom cascade duration={2000}>
            Brendan Kim
          </Zoom>
        </HeaderText>
        <HeaderText>
          <Zoom cascade duration={2500}>
            "Web Developer"
          </Zoom>
        </HeaderText>
        </Header>
      );
    }
  }


export default Wrapper;