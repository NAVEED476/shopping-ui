import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: teal;
    color: white;
    padding: 4px;
`

const Announcement = () => {
  return (
    <Container>Free Shipping! on order above 50$</Container>
  )
}

export default Announcement