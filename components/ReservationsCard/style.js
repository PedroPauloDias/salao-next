import styled from "styled-components"



export const ContainerList = styled.li`
list-style-type: none;
background-color: pink;
border-radius: 0.5em ;
box-shadow: 1px 2px 7px lightgray;
color: #94004e;
`

export const TopColor = styled.div`
height: 40px;
background-color:#c70069;
border-radius:.5em .5em 0 0;
padding-bottom: 10px;
color: #fff;
`



export const ContainerContent = styled.div`
margin-left: 30px;


display:  flex;
align-items: center;
justify-content: flex-start;

`

export const Title = styled.span`
font-size:20px;
font-weight: bold;



`
export const Text = styled.p`
margin-left: 10px;
font-weight: 500;

`
export const ContButtons = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 15px;
margin: 15px auto;

`
export const Button = styled.button`
height: 30px;
width: 250px;
cursor: pointer;
border-radius: 5px;
border: none;
:hover {
  background-color: #c70069;
scale: 1.05;
transition: .5s;
color: #fff;
}

`
