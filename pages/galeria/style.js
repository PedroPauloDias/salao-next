import styled from "styled-components";

export const ContainerText = styled.h2`
font-size: 50px;
color: #73003D;
margin: 50px ;
text-align: center;
`

export const Container = styled.div`
width:95vw;
margin:0 45px 0 20px;
margin-top: 50px;


`
export const ContainerImg = styled.div`
display: grid;
grid-template-columns : 33%  33%    33%     ;
gap:10px;
`
export const ContainerImgInd = styled.div`
max-width:310px;
max-height: 280px;
`

export const Img = styled.img`
height: 280px;
width: 310px;
object-fit: cover;
cursor: pointer;
filter: grayscale(1);
transition: all linear .3s;

&:hover {
  
  filter: grayscale(0);
  transform: scale(1.02)
 
  
}



`