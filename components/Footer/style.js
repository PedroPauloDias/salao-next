import styled from "styled-components";

export const Container = styled.div`
background-color: #e5969c;
margin-top: 15px ;
display:  flex;
align-items: center;
justify-content: center;
gap:250px;

@media (max-width: 760px){
gap: 5px;
flex-direction: column;
align-items: start;
padding: 10px 20px;
}

@media (max-width: 1400px){
gap:15px;
justify-content: space-around;
}


`
export const ContainerInfo = styled.div`

`
export const ContainerText = styled.div`
display:  flex;
align-items: center;
justify-content: start;
margin-left: 30px;


span{
  color: #fff;
font-size: 30px;

@media (max-width: 1400px){
  font-size: 25px;
}
}

p {
  color: #fff;
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px;

}
a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  margin-top: 10px;
  font-size: 18px;

  &:hover {
   
    color: #ffCCff;
  }


}



`
export const Title = styled.h3`
color: #fff;
font-size: 30px;
margin-left: 30px;

`
export const TitleSocial = styled.h3`
color: #fff;
font-size: 30px;
padding-top:30px;
margin-bottom: 20px;
margin-left: 30px;

`
export const ContainerCopy = styled.div`
background-color: #e5969c;
display:  flex;
align-items: center;
justify-content: center;


  p {
  color: #fff;
  margin-left: 10px;
  font-weight: bold;
  font-size: 10px;
}
`