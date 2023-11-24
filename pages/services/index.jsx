'use client'

import React from "react";
import Layout from '../../components/Layout';

const services = () => {
  return (
    <>
      <Layout>     
        <Container>
          <h2>Serviços</h2>
          <ContainerServices>
            <div>
              <ServicesImage src="../images/fibradevidro.webp" alt="" />
            </div>
            <div>
              <span>
                FIBRA DE VIDRO
              </span>
              <p>São filamentos de fibra de vidro que são moldados sobre a unha natural (ao contrário das unhas de gel que são feitas com um molde), fixadas com gel e expostas em cabine de luz. São mais resistentes que as unhas em gel ou outro tipo de alongamento, e tem um resultado mais natural.</p>
            </div>
          </ContainerServices>
          <ContainerServices>
            <div>
              <span>ACRÍLICO MOLDADO</span>
              <p>Esse tipo de alongamento para unhas é caracterizado por um tipo de alongamento que coloca moldes na unha, e finaliza com acrílico. O alongamento também pode ser feito usando tips (extensões) coladas nas pontas das unhas naturais e em seguida é acrescentando uma misturinha acrílica entre a unha natural e as extensõe </p></div>
            <div>
              <ServicesImage src="../../images/acrilica.webp" alt="" />
            </div>
          </ContainerServices>
          <ContainerServices>
            <div>
              <ServicesImage src="../../images/unha-gel-decorada.webp" alt="" />
            </div>
            <div>
              <span>UNHAS DE GEL</span>
              <p>As unhas de gel são feitas aplicando uma camada de gel próprio para unhas sobre a unha original e depois é necessário colocar as mãos num pequeno aparelho que emite luz ultravioleta para secar.</p></div>
          </ContainerServices>
          <ContainerServices>
            <div>
              <span>
                PASTA ACRÍLICA
              </span>
              <p>Um verdadeiro híbrido entre gel duro e acrílico, a Pasta Acrílica mantem tudo o que as técnicas de unhas gostam no acrílico e o gel duro. O produto pode ser aplicado como uma sobreposição sobre unhas naturais, uma sobreposição de tip ou esculpido sobre uma forma.</p>
            </div>
            <div>
              <ServicesImage src="../../images/unhas_coloridas_JW1Tkvp.webp" alt="" />
            </div>
          </ContainerServices>
          <ContainerServices>
            <div>
              <ServicesImage src="../../images/escura.webp" alt="" />
            </div>
            <div>
              <span>BANHO EM GEL</span>
              <p>O banho de gel faz com que as unhas não fiquem tão quebradiças e não descamem, além de aumentar a durabilidade do esmalte. Nele, é criada uma estruturação por cima das unhas naturai Esse processo não alonga e não altera o comprimento das unha </p>
            </div>
          </ContainerServices>
          <ContainerServices>
            <div>
              <span>ESMALTAÇÃO EM GEL</span>
              <p>Os esmaltes em gel têm uma composição diferente dos esmaltes comun Eles são compostos por agentes químicos que são ativados pela luz UV em uma cabine, criando uma camada rígida polimerizada. Assim a durabilidade é maior (em média de 15 dias).</p>
            </div>
            <div>
              <ServicesImage src="../../images/esmaltacao.webp" alt="" />
            </div>
          </ContainerServices>
        </Container>
      </Layout>
      </>
  )
}

export default services;



import styled from "styled-components"
import Navbar from "../../components/Navbar";

export const Container = styled.div`
height:100%;
max-width: 950px;
margin: 150px auto;




@media (max-width: 760px){
width: 90%;
padding: 0 5px;
margin: 0; 
}

@media (max-width: 1400px){
  max-width: 700px;
margin: 100px auto;
}

h2{
font-size:60px;
align-items: center;
margin: 30px 0px;
margin-left: 320px;
color:#990033;



  @media (max-width: 760px){
   font-size: 40px;
   text-align: center;
   margin-left: 0;
}
  
  @media (max-width: 1400px){
    font-size: 40px;
 }
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
border-radius: 10px;
padding: 20px  ;


@media (max-width: 760px){
   flex-direction: column;
   height: 100%;
   width: 70%;
   margin-left: 0px;
   padding: 20px 0 ;

  }
  
  @media (max-width: 1400px){
    height: 100%;
    width: 100%;
    margin-left: 0px;
       padding: 15px 0 ;

  }


background-color: grey;
background: linear-gradient(313deg, #bb6765,  #f5c6c9,#e5969c, #ffdad9);
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

  @media (max-width: 760px){
    width: 100%;
  font-size:25px;
  margin: 50px 0 30px 0;

  }
  
  @media (max-width: 1400px){
    font-size:30px;
    height:270px;
    width: 300px;

}
 
}
p{
  width: 90%;
  height: 100%;
  text-align: center;
  text-align: justify;
  color: #fff;
  font-size:28px;
  padding: 15px ;

  
  @media (max-width: 760px){
  width: 100%;
  font-size:20px;

  }
  
  @media (max-width: 1400px){
  height:100%;
  width: 300px;
  font-size:22px;

  }
  

}


`
export const ServicesImage = styled.img`
  height:300px;
  width: 350px;
  object-fit: cover;
  border-radius : 10px;


  @media (max-width: 760px){
   
  }
  
  @media (max-width: 1400px){
  height:250%;
  width: 300px;
  margin: 20px 0;
  }
`

