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
        margin-top: 30px;
        margin-bottom: 20px;
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
        text-align: center;
        font-weight: bold;
        word-spacing: 3px;
        
      `;

      return (
        <Container2>
          <Fade left duration={1500}>
          <PortfolioTitle>
            Portfolio
          </PortfolioTitle>
          <ImageText>
            Please scroll through some of the projects I've been working on by using the arrows!
          </ImageText>
          </Fade>
        <Slider {...settings}>
          <div>
            <a href="https://brendankim93.github.io/U-QueueInfo/" target="_blank" rel="noopener noreferrer">
              <PortfolioImage src={require("../../assets/U-QueueInfo.png")} alt="U-Queue" />
            </a>
            <ImageText>
              Waitlist Application Info Page - Role: Front-End/Marketing - Technologies Used: HTML, CSS (Materialize Framework)
            </ImageText>
            <ImageText>
              <i className="fa fa-image"></i> Click the image to view the live site or view the repository on Github <a href="https://github.com/brendankim93/U-QueueInfo" target="_blank" rel="noopener noreferrer">here</a>!
            </ImageText>
          </div>
          <div>
            <a href="https://brendankim93.github.io/APPetite/" target="_blank" rel="noopener noreferrer">
              <PortfolioImage src={require("../../assets/APPetite.png")} alt="APPetite" />
            </a>
            <ImageText>
              Food Delivery and Reservation App - Role: Front-End - Technologies Used: HTML, CSS (Foundation Framework), Node.js, Express
            </ImageText>
            <ImageText>
              <i className="fa fa-image"></i> Click the image to view the live site or view the repository on Github <a href="https://github.com/brendankim93/APPetite" target="_blank" rel="noopener noreferrer">here</a>!
            </ImageText>
          </div>
          <div>
            <a href="https://brendanmongoscraper.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <PortfolioImage src={require("../../assets/mongoscraper.png")} alt="Mongo News Scraper" />
            </a>
            <ImageText>
              News Scraper App - Role: Full Stack - Technologies Used: HTML, CSS (Bootstrap), MongoDB, Node.js, Express
            </ImageText>
            <ImageText>
              <i className="fa fa-image"></i> Click the image to view the live site or view the repository on Github <a href="https://github.com/brendankim93/NewsScraper" target="_blank" rel="noopener noreferrer">here</a>!
            </ImageText>  
          </div>
          <div>
            <a href="http://clickygamereact.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <PortfolioImage src={require("../../assets/clickygame.png")} alt="Adventure Time Clicky Game" />
            </a>
            <ImageText>
              Clicky Memory Game App - Role: Full Stack - Technologies Used: HTML, CSS, React.js
            </ImageText>
            <ImageText>
              <i className="fa fa-image"></i> Click the image to view the live site or view the repository on Github <a href="https://github.com/brendankim93/ClickyGame" target="_blank" rel="noopener noreferrer">here</a>!
            </ImageText>
          </div>
          <div>
            <a href="https://itsburgertime.herokuapp.com/burgers" target="_blank" rel="noopener noreferrer">
              <PortfolioImage src={require("../../assets/burgertime.png")} alt="Burger Time App" />
            </a>
            <ImageText>
              Burger Eating App - Role: Full Stack - Technologies Used: HTML, CSS, Handlebars.js, MySQL, Node.js, Express
            </ImageText>
            <ImageText>
              <i className="fa fa-image"></i> Click the image to view the live site or view the repository on Github <a href="https://github.com/brendankim93/burger-" target="_blank" rel="noopener noreferrer">here</a>!
            </ImageText>
          </div>
          <div>
            <a href="https://coolphrasebro.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <PortfolioImage src={require("../../assets/coolphrasebro.png")} alt="Giphy API App" />
            </a>
            <ImageText>
              Giphy API App - Role: Full Stack - Technologies Used: HTML, CSS, JQuery, Node.js, Express
            </ImageText>
            <ImageText>
              <i className="fa fa-image"></i> Click the image to view the live site or view the repository on Github <a href="https://github.com/brendankim93/GiphyApp" target="_blank" rel="noopener noreferrer">here</a>!
            </ImageText>
          </div>
        </Slider>
        </Container2>
      );
    }
  }

export default SimpleSlider;