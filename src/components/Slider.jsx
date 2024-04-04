import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { sliderData } from "../Dummy/SliderData";

const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  z-index: 2;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  opacity: 1;
  cursor: pointer;
  z-index: 5;
  pointer-events: all; 
`;

const Wrapper = styled.div`
  height: 100vh;
  padding: 30px;
  flex: 1;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slidestate * -100}vw);
  
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props)=>props.bgcolor};
`;
const ImageContianer = styled.div`
  height: 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 10px;
  text-align: left;
`;
const Image = styled.img`
  object-fit: cover;
  height: 80%;
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 70px;
`;

const Desc = styled.p`
  font-size: 30px;
  letter-spacing: 3px;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-size: 24px;
`;

const Slider = () => {
  const [slidestate, setSlideState] = useState(0);

  const handleClick = (direction) => {
    // console.log(direction)
    if (direction === "left") {
      setSlideState(slidestate > 0 ? slidestate - 1 : sliderData.length - 1);
    } else {
      setSlideState(slidestate < sliderData.length - 1 ? slidestate + 1 : 0);
    }
  };
  
  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => {
          handleClick("left");
        }}
      >
        <ArrowBackIosIcon />
      </Arrow>
      <Wrapper slidestate={slidestate}>
        {sliderData.map((obj) => (
          <Slide bgcolor={obj.bgColor} key={obj.id}>
            <ImageContianer>
              <Image src={obj.img} />
            </ImageContianer>
            <InfoContainer>
              <Title>{obj.title}</Title>
              <Desc>{obj.desc}</Desc>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        direction="right"
        onClick={() => {
          handleClick("right");
        }}
      >
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
