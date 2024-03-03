import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import XIcon from '@mui/icons-material/X';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
  flex-direction: column;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
  text-align: left;
`;

const SocialCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const SocialIcon = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: #477094;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  text-align: left;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  text-align: left;
  width: 50%;
  list-style: none;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover{
    color: black;
    font-weight: 300;
  }
`;

const Right = styled.div`
  padding: 20px;
  flex: 1;
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;
const Payment = styled.img``

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>NVD .</Logo>
        <Desc>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          iste laborum placeat in odit, tempora saepe autem debitis consectetur
          repellendus ut libero vitae modi ea adipisci doloribus amet incidunt
          velit?
        </Desc>
        <SocialCont>
          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>{" "}
          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>{" "}
          <SocialIcon>
            < XIcon/>
          </SocialIcon>{" "}
        </SocialCont>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><LocationOnIcon style={{marginRight:"10px"}}/> 2-85/9 Thotakanuma, V.kota, 517415</ContactItem>
        <ContactItem><PhoneIcon style={{marginRight:"10px"}} /> +91 7975920841</ContactItem>
        <ContactItem><MailOutlineIcon style={{marginRight:"10px"}}/> snaveedn23@gmail.com</ContactItem>
        <Payment />
      </Right>
    </Container>
  );
};

export default Footer;
