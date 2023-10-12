import styled from "styled-components"

export const Container = styled.div`
height: 500px;
width: 300px;
display:  flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 20px;
background: #f887a8;
background: linear-gradient(64deg, #be6c97 30%, #f887a8 88%);

border-radius: 6px;
color: #fff;
box-shadow: 0px  2px 5px #000;

`
export const ContainerTitle = styled.h2`
font-size: 25px;
font-weight: bold;
margin-top: -40px;
`
export const ContainerContent = styled.div`
display:  flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
margin-top:0px;

span{
  color: #fff;
font-size: 20px;
font-weight: bold;
}


`

export const ContainerText = styled.div`
display:  flex;
flex-direction: row ;
align-items: center;
justify-content: space-around;
gap: 50px;
margin-top: 20px;


span{
  color: #fff;
font-size: 18px;
font-weight: bold;
}


a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
   font-size: 15px;

  &:hover {
   
    color: #ffCCff;
  }


}



`





