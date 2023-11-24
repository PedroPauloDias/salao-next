'use client'


import Booking from '../../components/Booking';
import Address from '../../components/Address'
import styled from 'styled-components'

import Layout from '../../components/Layout';
import FormContact from '../../components/FormContact';

const Contact = () => {

  // function createReserve(reserve) {
  //   fetch("http://localhost:5000/agendamentos", {
  //    method: "POST",
  //  headers: {
  //       'Content-type': 'application/json',
  //      },
  //      body: JSON.stringify(reserve)
  //})
  //      .then((resp) => resp.json())
  //     .then((data) => {
  //      console.log(data)           

  //    })
  //  .catch ((err) => console.log(err))  
  // }
  return (
    <>
      <Layout>
      <ContainerText>Entre em contato</ContainerText>

        <Container>
          <Booking />
          <FormContact />
          <Address />
        </Container>
      </Layout>
    </>
  )
}

export default Contact;





export const Container = styled.div`
display:  flex;
align-items: center;
justify-content: space-around;
margin: 30px 27px 50px 20px;


@media (max-width: 760px){
   flex-direction: column;
justify-content: center ;
margin: 0; 

}

@media (max-width: 1400px){
  flex-direction: column;
  justify-content: center ;
  margin: 0; 
  margin-bottom: 50px;
  }


`
export const ContainerText = styled.h2`
font-size: 40px;
color: #73003D;
margin: 20px ;
text-align: center;

margin: 120px auto 30px auto;

`