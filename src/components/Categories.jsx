import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { DummyCat } from "../Dummy/dummyCat";
const Container = styled.div`
  width: 98vw;
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
`;
const Heading = styled.h1`
  font-size: 24px;
  margin-left: 20px;
`
const Categories = () => {
  return (<>
   <Heading>Categories</Heading>
    <Container>
     
      {DummyCat.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
    </>);
};

export default Categories;
