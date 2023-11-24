
import styled from 'styled-components';

export const Container = styled.div`
width : 100%;
height: 90px;
display: flex;
align-items: center;
justify-content: flex-start;
position: fixed;
margin: 0px 0px 30px 0px;

backdrop-filter: ${(props) => (props.color ? 'blur(20px)' : "")};
z-index:1000;
transition: .8s;




`
export const ContainerLinks = styled.ul`

  width:100%;
  display: flex;
  align-items: center;
  gap: 60px;
  margin-left: 600px;
  margin-top: 15px;

  @media (max-width: 560px){
    margin-left: 0px; 
    gap: 5px;
  }


  @media (max-width: 1400px){
    margin-left: 120px;
    gap: 40px;

}
  


li{
  list-style: none;  
  font-size: 20px;
  font-weight: 300;
  
  @media (max-width: 560px){
    font-size: 15px;
    display: none;

}
  
 }

 li :hover{
  border-bottom: 2px solid #ff0099;
  color: #fff;
  transition: .5s;
}

 a {
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-weight: bold;
  font-size: 35px;

  @media (max-width: 1400px){
font-size: 30px;
}
 }


`

export const ContainerImg = styled.div`
height:50px;

margin-left: 20px;
padding: 10px;

  img {
    border-radius: 50%;
    margin-top: 5px;
  }

`


