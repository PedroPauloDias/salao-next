import styled from "styled-components"

export const Container = styled.div`

display:  flex;
align-items: center;
justify-content: flex-end;
margin-right: 40px;
z-index:1000;




`
export const ContainerSvg = styled.div`
height: 10px; 
width: 10px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
position: fixed;
top: 94%;
background-color: transparent;
transition: .4s;

svg {
  color: ${(props)=>(props.color ? props.color : "red")}; 
}

& :hover {
    height: 55px; 
    width: 55px;
    border-radius:50%;
     background-color: green;
    color:#fff;

    svg{
      height: 35px;
      width: 35px;
      padding: 10px;
      border-radius: 50px;
    }
    
 
 }


`