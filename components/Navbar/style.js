
import styled from 'styled-components';

export const Container = styled.div`
height: 70px;
width: 95.3%;
display: flex;
align-items: center;
justify-content: flex-start;
color: #fff;
position: relative;
margin-top: -10px;


background: ${(props) => (props.color ? props.color : "transparent")};
z-index:1000;
transition: .8s;



ul{
  display: flex;
  align-items: center;
  gap: 60px;
  margin-left: 500px;
  margin-top: 15px;
  
}

li{
  list-style: none;
  
  font-size: 20px;
  font-weight: 300;
  
  
 }

 li :hover{
  border-bottom: 2px solid #ff0099;
}

 a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  
 }






 
`
export const ContainerImg = styled.img`
height:50px;
border-radius: 50px;
margin-left: 20px;
padding: 10px;

  

`


