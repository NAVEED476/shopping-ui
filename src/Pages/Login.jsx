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
width: 30%;
background-color: white;

`;
const Title = styled.h1`
font-size: 24px;
font-weight: 500;

`;
const Form = styled.form`
display: flex;
flex-direction: column;

`;

const Input = styled.input`
 flex: 1;
 min-width: 40%;
 margin: 10px 0px ;
 padding: 15px;

`;
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
`;

const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer
;

`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input type="text" placeholder="Username" />
          
          <Input type="password" placeholder="Password" />
          
          <Button>Login</Button>
          <Link>Forgot password?</Link>
          <Link>Create new Account?</Link>

        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
