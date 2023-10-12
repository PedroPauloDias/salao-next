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
background: #f887a8;
background: linear-gradient(64deg, #be6c97 30%, #f887a8 88%);
border-radius: 6px;
color: #fff;
box-shadow: 0px  2px 5px #000;



`
export const ContainerText = styled.h2`
font-size: 25px;
font-weight: bold;
margin-top: 10px;
`


export const ContainerContent = styled.div`
margin:0;
display:  flex;
flex-direction: column;
align-items: start;
font-size: 18px;
font-weight: bold;
color: white;

label {
  font-size: 16px;
  margin: 5px 0;
}


`
export const Input = styled.input`
height: 20px;
width: 200px;
margin: 5px 0px;
border-radius: 5px;
border: none;


&::placeholder {
  font-size: 12px;
  pading: 5px;
margin-left: 5px;
}

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
border-radius: 5px;



&:hover {
  background-color: rgba(209,32,136,1);
  color:#fff;

}

`
export const TextArea = styled.textarea `
width: 200px;
border-radius: 5px;

&::placeholder {
  font-size: 12px;
}
`

