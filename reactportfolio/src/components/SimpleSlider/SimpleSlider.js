import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Fade from "react-reveal/Fade";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ffe7b3" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ffe7b3" }}
      onClick={onClick}
    />
  );
}

class SimpleSlider extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

      const Container2 = styled.div`
        background: #ffe7b3;
        padding 5.5em;
        margin-top: 50px; 
      `;

      const PortfolioTitle = styled.h1`
        color: black;
        font-size: 30px;
        font-family: 'VT323', monospace;
        font-weight: strong;
        text-align: center;
        border-style: solid;
        border-width: 0px 0px 0.25px 0px;
        padding-bottom: 15px;
        width: 20%;
        margin-left: 505px;
        margin-bottom: 50px;
        margin-top: 30px;
        margin-bottom: 70px;
      `;

      const PortfolioImage = styled.img`
        margin-left: auto;
        margin-right: auto;
        display: block;
        
        &:hover {
          background: lightgrey;
        }
      `;

      const ImageText = styled.p`
        font-family: 'Marvel', sans-serif;
        font-size: 16px;
        line-height: 1.6;
        text-align: center;
        
      `;

      return (
        <Container2>
          <Fade left duration={1500}>
          <PortfolioTitle>
            Portfolio
          </PortfolioTitle>
          </Fade>
        <Slider {...settings}>
          <div>
            <a href="https://brendankim93.github.io/U-QueueInfo/" target="_blank" rel="noopener noreferrer">
              <PortfolioImage src={require("../../assets/U-QueueInfo.png")} alt="U-Queue" />
            </a>
            <ImageText>
              <i className="fa fa-image"></i> Click the image to view the live site or view the repository on Github <a href="https://github.com/brendankim93/U-QueueInfo">here</a>!
            </ImageText>
          </div>
          <div>
            <PortfolioImage src={require("../../assets/APPetite.png")} alt="APPetite" />
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        </Container2>
      );
    }
  }

export default SimpleSlider;