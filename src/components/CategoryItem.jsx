import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 300px;
  height: 400px;
  margin: 10px;
  position: relative;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
`;
const Title = styled.h3`
  font-size: 36px;
  color: white;
  margin-bottom: 20px;
  margin-top: 20px;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: white;
  color: gray;
  border-radius: 8px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  font-weight: 600;
`;
const CategoryItem = ({ item }) => {
  return (
    <Container key={item.id}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
