import React from "react";
import { popularProducts } from "../Dummy/PopularProducrts";
import ProductItem from "./ProductItem";
import styled from "styled-components";
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
padding: 20px;
flex-wrap: wrap;
`;

const Heading = styled.h1`
  margin-left: 20px;
  font-size: 24px ;
`
const Products = () => {
  return (
    <>
    <Heading> Popular Products</Heading>
    <Container>
      {popularProducts.map((item) => {
        return <ProductItem item={item} />;
      })}
    </Container>
  </>);
};

export default Products;
