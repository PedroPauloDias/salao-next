import styled from "styled-components"

export const Container = styled.div`
background: url(/images/fundo-manicure.jpg);
background-repeat: no-repeat;
object-fit: cover ;
height:480px;
margin: 15px;
padding-left: 90px;
padding-right: 60px;
margin-left: 20px;



@media (max-width: 1400px){

  padding: 10px;

}


`
export const Title = styled.h2`
color:#660034;
text-align: center;
padding: 60px 0px 20px 0px;
font-size: 35px;

`

export const TestContainer = styled.div`
max-width: 300px;
margin: 10px  ;
margin-left: 40px;
backdrop-filter: blur(20px);
background: rgb(209,131,137);
background: linear-gradient(160deg, rgba(209,131,137,1) 0%, rgba(245,201,198,1) 100%);

span {
color:#fff;
font-weight: bold;
font-size:18px;
}

p {
  font-weight: bold;
  margin-right: 20px;
  color:#fff;

}

`
export const TContainer = styled.div`
display:  flex;
align-items: center;
display:  flex;
justify-content: space-around;
background-color: transparent;
border-radius: 10px;




`


export const Photo = styled.img`
padding: 30px;
height: 90px;
width: 90px;
object-fit: cover;
border-radius: 50%;

`

export const ContainerStars = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 15px;
margin-top: 10px;


`