import styled from "styled-components"

export const ContainerForm = styled.div`
height: 500px;
width: 300px;
display:  flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0px auto;
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
margin-top: 10px;
`


export const ContainerContent = styled.div`
margin:0;
display:  flex;
flex-direction: column;
align-items: start;
font-size: 20px;
font-weight: bold;
color: white;



`
export const Input = styled.input`
height: 15px;
margin: 5px 0px;

`


export const Button = styled.input`
height: 30px;
width: 150px;
cursor: pointer;
background-color: #94004e;
color: #fff;
border: unset;
transition: .5s;
margin-top: 20px;



&:hover {
  background-color: rgba(209,32,136,1);
  border: 1px solid #fff;
  color:#fff;

}

`


