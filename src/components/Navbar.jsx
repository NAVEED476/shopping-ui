import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly ;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`;
const Language = styled.p`
  font-size: 16px;
  font-weight: 600;
`;
const SearchContinaer = styled.div`
  border: 1px solid grey;
  box-sizing: border-box;
  box-shadow: rgba(1, 1, 1, 0.35) 0px 5px 10px;
  margin-left: 25px;
  padding: 0px;
  width: 70%;
  display: flex;
  align-items: center;
  padding: 2px;
`;
const Input = styled.input`
  border: none;
  width: 100%;
  padding: 10px 0px;
  font-size: 16px;
`
const Logo = styled.h1`
  font-weight: bold;
`

const RightCont = styled.h4`
  font-weight: bold;
  margin-left: 25px;
  cursor: pointer;
  margin-right: 10px;
  color: grey;
`


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContinaer>
            <Input/>
            <SearchIcon/>
          </SearchContinaer>
          
          
        </Left>
        <Center><Logo>NVD.</Logo></Center>
        <Right>
          <RightCont>SignUp</RightCont>
          <RightCont>SignIn</RightCont>
          <RightCont><ShoppingCartIcon/></RightCont>

        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
