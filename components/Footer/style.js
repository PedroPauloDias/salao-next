import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
background-color: #b69d8f;
margin-top: 15px ;
display:  flex;
align-items: center;
justify-content: center;
gap:250px;


`
export const ContainerInfo = styled.div`



`
export const ContainerText = styled.div`
display:  flex;
align-items: center;
justify-content: start;

span{
  color: #fff;
font-size: 30px;
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
`
export const TitleSocial = styled.h3`
color: #fff;
font-size: 30px;
padding-top:30px;
margin-bottom: 20px;
`
export const ContainerCopy = styled.div`
width: 100vw;
background-color: #b69d8f;
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