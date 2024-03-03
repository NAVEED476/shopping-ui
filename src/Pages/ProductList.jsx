import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1`
  margin: 20px;
`;
const FilterCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 30px;
`;
const FilterText = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
padding: 10px;
margin-right: 10px;
`;
const Option = styled.option`
padding: 5px;
`;

const ProductList = () => {
  return (
    <container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterCont>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <Option disabled selected>
              Colors{" "}
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>S</Option>
            <Option>X</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
            <Option>Others</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option disabled selected>
              Price
            </Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
           
          </Select>
        </Filter>
      </FilterCont>
      <Products />
      <NewsLetter />
      <Footer />
    </container>
  );
};

export default ProductList;
