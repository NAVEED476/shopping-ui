import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  background-color: coral;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction ==="left" && "10px"};
  right: ${props => props.direction ==="right" && "10px"};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  opacity: 1;
  cursor: pointer;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosIcon/>
      </Arrow>
      <Arrow direction="right">
        <ArrowForwardIosIcon/>
      </Arrow>
    </Container>
  );
};

export default Slider;
