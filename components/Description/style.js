import styled from "styled-components"

export const Container = styled.div`
height: 450px;
max-width: 1280px;
display: flex;
margin-top: 700px;
gap: 15px;

`
export const ContainerText = styled.div`

height: 450px;
text-align: justify;
line-height: 25px;
padding: 15px;
margin: 0px  ;

span{
  font-size: 50px;
  color: #990033;
}
`
export const ContainerImg = styled.div`
height: 600px;
margin-left: 20px;



-webkit-animation: scale-in-tl 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 3s both;
animation: scale-in-tl 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 3s both;


@-webkit-keyframes scale-in-tl {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
}
@keyframes scale-in-tl {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
}      


`
export const DoubleImg = styled.div`
display: flex;
gap:10px;

`
export const Img = styled.img`
height:200px;
width: 295px;
object-fit: cover;

`
export const Img2 = styled.img`
height:200px;
width: 600px;
object-fit: cover;
margin-top:10px;





`