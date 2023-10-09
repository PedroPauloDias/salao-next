import styled from "styled-components";



export const background = styled.div`
width: 90%;
height : 100%;
background-color: rgba(0, 0, 0, .8);
display:  flex;
justify-content: center;
align-items: center;
padding: 40px;
margin-left: 20px;
margin-top: 30px;
`

export const ModalWrapper = styled.div`
width: 800px;
height: 90vh;
box-shadow: 0 5px 16px rgba(0, 0, 0, .2);
z-index: 10;
border-radius:10px;

`


export const ModalImg = styled.img`
width: 100%;
height: 100%;
border-radius:10px 0 0 10px;
background: #000;
top:50px;
object-fit: cover;


`
export const CloseButton = styled.button`
cursor: pointer;
position: absolute;
z-index: 10;
height: 32px;
width: 32px;
color: #ff0066;
background-color: white;
font-size: 25px;
border: solid 1px #ff0066;
right: 280px;

& :hover{
  background-color: #ff0066;
  color: #fff;
}
`