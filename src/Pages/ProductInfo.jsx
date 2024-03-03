import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "styled-components";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageCont = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoCont = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 400;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
width: 50%;
margin: 20px 0px;
display: flex;
justify-content: space-between;



`;
const Filter = styled.div`
display: flex;
align-items: center;
`;
const FilterTitle = styled.h1`
font-size: 20px;
font-weight: 200;
`;
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin: 0px 10px;
cursor: pointer;

`;
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`;
const FilterSizeOption = styled.option`
margin: 5px;

`;

const AddContainer = styled.div`
width: 50%;
display: flex;
align-content: center;
justify-content: space-between;
`
const AmountCont = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;

`
const Amount = styled.span`
height: 30px;
padding: 0px 10px;
border-radius: 10px;
border:1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
`
const Button = styled.button`
padding: 10px 30px;
font-size: 20px;
font-weight: 300;
background-color: white;
cursor: pointer;
border: 2px solid teal;

&:hover{
  background-color: #f8f4f4;
}
`

const ProductInfo = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageCont>
          <Image src="https://images.pexels.com/photos/10139621/pexels-photo-10139621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </ImageCont>
        <InfoCont>
          <Title>Naveed pepe jeans fosjdfh</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam
            perferendis dolorum dolore autem temporibus ipsam totam nemo itaque
            similique, odit magni! Ipsa neque, sapiente quis pariatur minus
            repudiandae nesciunt!
          </Desc>
          <Price>$200</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="grey" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
                <FilterSizeOption>Others</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountCont>
              <RemoveIcon />
              <Amount>$100</Amount>
              <AddIcon/>
            </AmountCont>
            <Button>Add to Cart</Button>
          </AddContainer>
          
        </InfoCont>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductInfo;
