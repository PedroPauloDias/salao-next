
import Booking from '../../components/Booking';
import Address from '../../components/Address'
import styled from 'styled-components'

import Layout from '../../components/Layout';
import Formulario from '../../components/Formulario';

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
          <Formulario/>
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
margin: 30px 27px 20px 20px;


`
export const ContainerText = styled.h2`
font-size: 40px;
color: #73003D;
margin: 20px ;
text-align: center;
`