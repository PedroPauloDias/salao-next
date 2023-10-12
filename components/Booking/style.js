import styled from "styled-components"

export const Container = styled.div`
height: 500px;
width: 300px;
display:  flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5px;
margin-top: 20px;
background: #f887a8;
background: linear-gradient(64deg, #be6c97 30%, #f887a8 88%);
border-radius: 10px;
color: #fff;
box-shadow: 0px  2px 5px #000;


@media (max-width: 760px){
  }
  
  @media (max-width: 1400px){

  }


`
export const ContainerText = styled.h2`
font-size: 25px;
font-weight: bold;
margin-top: 15px;


@media (max-width: 760px){
font-size: 25px;
}
  
  @media (max-width: 1400px){

  }


`

export const ContainerContent = styled.div`
width: 200px;
margin:0;
display:  flex;
flex-direction: column;
align-items: start;
font-size: 15px;
font-weight: bold;
color: white;

@media (max-width: 760px){
font-size: 20px;

}

`
export const Input = styled.input`
width: 200px;
height: 20px;
margin: 10px 0px;
border-radius : 5px;
border: none;






`
export const ContBooking = styled.div`

display:  flex;
align-items: center;
justify-content: center;
gap:5px;





div{
  
  display:  flex;
  flex-direction: column;
  font-weight: bold;
}

`
export const InputDate = styled.input`
width: 95px;
height: 20px;
margin: 10px auto;




`


export const Button = styled.input`
height: 30px;
width: 150px;
cursor: pointer;
background-color: #94004e;
color: #fff;
border: unset;
transition: .7s;
margin: auto;
margin-top:75px;
border-radius:5px;



&:hover {
  background-color: rgba(209,32,136,1);
  color:#fff;

}

`