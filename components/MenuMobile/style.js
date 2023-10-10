import styled, { css } from "styled-components";

export const ContainerMenu = styled.div`
height: 100vh;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
flex-direction: column;
z-index: 10;
backdrop-filter: blur(20px);
background: rgb(175,95,101);
background: linear-gradient(150deg, rgba(175,95,101,1) 13%, rgba(245,201,198,1) 100%);


`
export const ContainerLink = styled.ul`
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2.2rem;
transition:.7s;



`
export const ListLink = styled.li`
text-decoration: none;
list-style: none;
color: #990033;

`
export const Link = styled.a`
text-decoration: none;
color:#fff;
font-size:1.8rem;
font-weight: 500;


&:hover {
  border-bottom: 1px solid #D9C196;
  color: #990033;

}
`
export const OpenMenu = styled.div`
height: 2.5rem;
display: flex;
align-items: center;
justify-content: end;
background-color: transparent;

`
export const OpenButton = styled.button`
border: none;
background-color: transparent;
padding-right:.7rem ;
cursor: pointer;
position: absolute;
top: 1.3rem;
right: 0rem;
background-color: transparent;
display: block;
  color: ${({theme})=> theme.svgColor};


@media (min-width: 720px){
  display: none;
}
`

export const CloseButton = styled.button`
font-size: 1.7rem;
position: absolute;
right:1rem;
top: 2.5rem;
color: #fff;
border: none;
background-color: transparent;
cursor: pointer;
`

