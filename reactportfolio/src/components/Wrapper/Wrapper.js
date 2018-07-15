import React from "react";
import styled from "styled-components";
import Jump from 'react-reveal/Jump';

class Wrapper extends React.Component {
    render() {
    const Header = styled.div`
        background-color: black;
        background-image: url('https://orig00.deviantart.net/b3b6/f/2010/318/3/5/matrix_code_by_rashanta-d32tdoa.gif');
        padding: 10em;
        `;

          
    const HeaderText = styled.h1`
        font-family: 'Libre Franklin', sans-serif;
        text-align: center;
        font-size: 50px;
        font-height: 5px;
        color: white;
        margin-bottom: 50px;

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
          <Jump cascade duration={700}>
            brendan kim
          </Jump>
        </HeaderText>
        <HeaderText>
          <Jump cascade duration={700}>
            "full stack web developer"
          </Jump>
        </HeaderText>
        <Jump cascade duration={700}>
          <ImageDesc>
            Gif by <a href="https://rashanta.deviantart.com/" target="_blank" rel="noopener noreferrer">Rashanta</a>
          </ImageDesc>
        </Jump>
        </Header>
      );
    }
  }


export default Wrapper;