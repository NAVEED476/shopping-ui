import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {Link} from "react-router-dom"
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;
`;
const Container = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  padding: 2px;
  position: relative;
  margin: 0;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div``;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin: 10px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: aliceblue;
    transform: scale(1.1);
  }
`;
const Title = styled.h3``;
const Button = styled.button``;
const ProductItem = ({ item }) => {
  return (
    <Container key={item.id}>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
          <SearchOutlinedIcon />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info> 
    </Container>
  );
};

export default ProductItem;
