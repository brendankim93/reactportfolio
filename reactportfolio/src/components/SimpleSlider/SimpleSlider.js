import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "lightgrey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "lightgrey" }}
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
        background: lightgrey;
        padding 6em;
        margin-top: 50px; 
      `;

      const PortfolioTitle = styled.h1`
        color: black;
        font-size: 30px;
        font-family: 'VT323', monospace;
        font-weight: strong;
        text-align: center;
        border-style: solid;
        border-width: 0px 0px 1px 0px;
        padding-bottom: 15px;
        width: 20%;
        margin-left: 510px;
        margin-bottom: 50px;
        margin-top: 50px;
        margin-bottom: 70px;
      `;

      const PortfolioImage = styled.img`
        margin-left: auto;
        margin-right: auto;
        display: block;
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
            <PortfolioImage src={require("../../assets/U-QueueInfo.png")} alt="U-Queue" />
          </div>
          <div>
            <h3>2</h3>
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