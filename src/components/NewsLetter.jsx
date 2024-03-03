import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.h1``;
const Desc = styled.div``;
const InputCont = styled.div``;
const Input = styled.input``;
const Button = styled.button``


const NewsLetter = () => {
  return (
    <Container>
      <Title>News Letter</Title>
      <Desc>Get Timely updates for your favorite products</Desc>
      <InputCont>
        <Input placeholder="Enter you email"/>
        <Button></Button>
      </InputCont>
    </Container>
  );
};

export default NewsLetter;
