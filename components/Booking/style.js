import styled from "styled-components"

export const Container = styled.div`
height: 500px;
width: 300px;
display:  flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5px;
margin-top: 20px;
background: rgb(209,32,136);
background: linear-gradient(64deg, rgba(209,32,136,1) 45%, rgba(255,0,153,1) 88%);
border-radius: 6px;
color: #fff;
box-shadow: 0px  2px 5px #000;
`
export const ContainerText = styled.h2`
font-size: 18px;
font-weight: bold;
margin-top: 20px;
`

export const ContainerContent = styled.div`
width: 200px;
margin:0;
display:  flex;
flex-direction: column;
align-items: start;
font-size: 20px;
font-weight: bold;
color: white;

`
export const Input = styled.input`
width: 190px;
height: 15px;
margin: 5px 0px;

`
export const ContBooking = styled.div`

display:  flex;
align-items: center;
justify-content: center;
gap:5px;


div{
  
  display:  flex;
  flex-direction: column;
  font-weight: bold;
}

`
export const InputDate = styled.input`
width: 90px;
height: 15px;
margin: 10px auto;

`


export const Button = styled.input`
height: 30px;
width: 150px;
cursor: pointer;
background-color: #94004e;
color: #fff;
border: unset;
transition: .5s;
margin: auto;
margin-top:65px;


&:hover {
  background-color: rgba(209,32,136,1);
  border: 1px solid #fff;
  color:#fff;

}

`