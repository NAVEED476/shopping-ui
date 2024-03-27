import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/10557897/pexels-photo-10557897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 center");
`;
const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: white;

`;
const Title = styled.h1`
font-size: 24px;
font-weight: 500;

`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;

`;

const Input = styled.input`
 flex: 1;
 min-width: 40%;
 margin: 20px 10px 0px 0px;
 padding: 15px;

`;
const Agreement = styled.p`
font-size: 12px;
margin: 20px 0px;
`;
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input type="text" placeholder="First name" />
          <Input type="text" placeholder="Last name" />
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Phone Number" />
          <Input type="password" placeholder="Password" />
          <Agreement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            incidunt. Distinctio quisquam quia neque non doloremque sit in quis
            esse nulla iure, reiciendis dolore incidunt accusantium quas ipsa
            qui iusto.
          </Agreement>
          <Button>Signup</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
