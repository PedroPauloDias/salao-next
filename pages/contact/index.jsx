
import Booking from '../../components/Booking';
import Form from '../../components/form'
import Address from '../../components/Address'

import styled from "styled-components"
import * as S from "../../styles"


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
  <S.Container>
    <Booking />
    <Form />
    <Address />
  </S.Container>
)
}

export default Contact;



export const Container = styled.div`
display:  flex;
align-items: center;
justify-content: space-around;
margin: 30px 27px 20px 20px;


`