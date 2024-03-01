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
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => {
        return <ProductItem item={item} />;
      })}
    </Container>
  );
};

export default Products;
