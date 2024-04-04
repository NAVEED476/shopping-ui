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
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://shopping-microservice.onrender.com/api/product?category=${cat}`
            : "https://shopping-microservice.onrender.com/api/product"
        );
        setProductList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts((prevProducts) =>
        productList.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [productList, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  // console.log(filteredProducts);

  return (
    <>
      <Heading> Popular Products</Heading>
      <Container>
        {cat
          ? filteredProducts.map((item) => (
              <ProductItem item={item} key={item.id} />
            ))
          : productList.map((item) => (
              <ProductItem item={item} key={item.id} />
            ))}
      </Container>
    </>
  );
};

export default Products;
