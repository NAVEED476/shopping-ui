import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  font-weight: 400;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  font-size: 20px;
  font-weight: 500;
  padding: 5px 15px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetails = styled.div`
  display: flex;
  flex: 2;
`;
const ProductImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Qunatity = styled.span`
  font-size: 24px;
  font-weight: 400;
  margin: 0px 10px;
`;
const ProductAmountCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 500;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
cursor: pointer;
`;
const Cart = () => {
  return (
    <Container>
      <Announcement />
      {/* <Navbar /> */}
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your WishList (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW </TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <ProductImg src="https://images.pexels.com/photos/10139621/pexels-photo-10139621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Details>
                  <ProductName>
                    <b>Product : </b>Hello nave
                  </ProductName>
                  <ProductId>
                    <b>Product Id : </b>9999099
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size : </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountCont>
                  <RemoveIcon />
                  <Qunatity>2</Qunatity>
                  <AddIcon />
                </ProductAmountCont>
                <ProductPrice>$30</ProductPrice>
              </PriceDetails>
            </Product>

            <Hr />
            <Product>
              <ProductDetails>
                <ProductImg src="https://images.pexels.com/photos/10139621/pexels-photo-10139621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Details>
                  <ProductName>
                    <b>Product : </b>Hello nave
                  </ProductName>
                  <ProductId>
                    <b>Product Id : </b>9999099
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size : </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountCont>
                  <RemoveIcon />
                  <Qunatity>2</Qunatity>
                  <AddIcon />
                </ProductAmountCont>
                <ProductPrice>$30</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>Checkout Now</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
