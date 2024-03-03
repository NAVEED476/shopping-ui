import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Announcement from './Announcement'
const Container = styled.div`
padding: 20px;
display: flex;
align-items: center;
justify-content: space-between;

`
const Title = styled.h1``
const FilterCont =styled.div``
const Filter = styled.div``

const ProductList = () => {
  return (
    <container>
        <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterCont>
            <Filter>filter 1</Filter>
            <Filter>filter 2</Filter>

        </FilterCont>
    </container>
  )
}

export default ProductList