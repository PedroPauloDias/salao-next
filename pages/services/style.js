import styled from "styled-components"

export const Container = styled.div`

width: 850px;
margin: 50px auto;


h2{
font-size:60px;
align-items: center;
margin: 30px 0px;
margin-left: 320px;


  color:#990033;
}




`
export const ContainerServices = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
margin: 20px;


text-align: center;

height : 400px;
margin-left: 10px;

    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
    

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
 
    50% {
        background-position: 100% 50%;
    }
 
    100% {
        background-position: 0% 50%;
    }
}

span {
  width: 625px;
  font-size:35px;
  font-weight: bold;
  color:#990033;
  margin: 20px auto;

 
}
p{
  width: 250px;
  text-align: center;
  justify-text: justify;
  color: #fff;
  
  
  

}
img {
  height:300px;
  width: 350px;
  object-fit: cover;
}

`

