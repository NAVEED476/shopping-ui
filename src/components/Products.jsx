import React, { useEffect, useState } from "react";
import { popularProducts } from "../Dummy/PopularProducrts";
import ProductItem from "./ProductItem";
import styled from "styled-components";
import axios from "axios";
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
  font-size: 24px;
`;
const Products = ({ cat, filters, sort }) => {
  console.log(cat, filters, sort);
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "https://shopping-microservice.onrender.com/api/product/"
        );
        setProductList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);
  return (
    <>b
      <Heading> Popular Products</Heading>
      <Container>
        {productList.map((item) => {
          return <ProductItem item={item} />;
        })}
      </Container>
    </>
  );
};

export default Products;
