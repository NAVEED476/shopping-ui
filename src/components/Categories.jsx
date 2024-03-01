import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { DummyCat } from "../Dummy/dummyCat";
const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
`;
const Categories = () => {
  return (
    <Container>
      {DummyCat.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;