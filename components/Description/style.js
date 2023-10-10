import styled from "styled-components"

export const Container = styled.div`
max-width: 1280px;
display: flex;
margin-top: 100px;
gap: 15px;


@media (max-width: 760px){

}

@media (max-width: 1400px){
flex-direction: column-reverse;
padding: 0  15px;
}

`
export const ContainerText = styled.div`

text-align: justify;
line-height: 25px;
padding: 15px;
margin: 0px  ;

span{
  font-size: 50px;
  color: #990033;
}

@media (max-width: 760px){

p{
font-size:20px;
}
}
`
export const ContainerImg = styled.div`
margin-left: 20px;

@media (max-width: 760px){
   
}

@media (max-width: 1400px){
        width: 100%;
        margin-left: 0px;
}

`
export const DoubleImg = styled.div`
display: flex;
gap:10px;

@media (max-width: 760px){
}

`
export const Img = styled.img`
height:200px;
object-fit: cover;
min-width: 50%;

@media (max-width: 760px){
        max-width: 50%;
        min-width: 48%;


}

@media (max-width: 1400px){
        max-width: 50%;
        min-width: 49%;

}

`
export const Img2 = styled.img`
height:200px;
object-fit: cover;
margin-top:10px;

@media (max-width: 760px){
        width: 100%;
}

@media (min-width: 760px){
        width: 100%;
}





`