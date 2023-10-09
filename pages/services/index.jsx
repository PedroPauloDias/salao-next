import React from 'react'
import { Header } from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';



const services = () => {
  return (
    <>
      <Layout>

      <Container>
        <h2>Serviços</h2>

        <ContainerServices>
          <div>
    <img src="../images/fibradevidro.webp" alt="" />
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
          <img src="../../images/acrilica.webp" alt="" />
          </div>
        </ContainerServices>
        <ContainerServices>
          <div>
          <img src="../../images/unha-gel-decorada.webp" alt="" />
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
          <img src="../../images/unhas_coloridas_JW1Tkvp.webp" alt="" />
          </div>
        </ContainerServices>
        <ContainerServices>
          <div>
          <img src="../../images/escura.webp" alt="" />
          </div>
          <div>
            <span>BANHO EM GEL</span>
            <p>O banho de gel faz com que as unhas não fiquem tão quebradiças e não descamem, além de aumentar a durabilidade do esmalte. Nele, é criada uma estruturação por cima das unhas naturai Esse processo não alonga e não altera o comprimento das unha </p>
          </div>
        </ContainerServices>
        <ContainerServices>
          <div>
            <span>ESMALTAÇÃO </span>
             <span> EM GEL</span>
            
            <p>Os esmaltes em gel têm uma composição diferente dos esmaltes comun Eles são compostos por agentes químicos que são ativados pela luz UV em uma cabine, criando uma camada rígida polimerizada. Assim a durabilidade é maior (em média de 15 dias).</p>
          </div>
          <div>
          <img src="../../images/esmaltacao.webp" alt="" />
          </div>
        </ContainerServices>


      </Container>
      </Layout> 

    </>
  )
}

export default services;



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

