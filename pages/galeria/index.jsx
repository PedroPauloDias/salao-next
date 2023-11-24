'use client'

import React, { useState } from 'react'
import Modal from "../../components/Modal/index"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Layout from '../../components/Layout'

const Galeria = () => {
  AOS.init();

  const [isModalVisible, setModalVisible] = useState(false) 
 
    let ImgSrc =[    
     "/images/alongamento/images.jpg" 
     ]
 
  const openModal = () => {
    setModalVisible(prev => !prev)  
  }
  

  return (
    <>

      <Layout>
          <ContainerText>GALERIA DE FOTOS</ContainerText>
      {isModalVisible ? (
        <Modal setModalVisible={setModalVisible} src={ImgSrc}
         />        
      )
        : (
          <>
           

          <Container>
    
            <ContainerImg>
              <ContainerImgInd  >   
                <Img src="/images/acrilica.webp" alt=""
                  onClick={openModal} />
              </ContainerImgInd>
              <ContainerImgInd >
                <Img src="/images/verde.jpg" alt=""
                 onClick={openModal}/>
              </ContainerImgInd>
              <ContainerImgInd >
                <Img src="/images/unhas_coloridas_JW1Tkvp.webp" alt="" />
              </ContainerImgInd>
              <ContainerImgInd>
                <Img src="/images/unha-gel-decorada.webp" alt="" />
              </ContainerImgInd>
              <ContainerImgInd>
                <Img src="/images/moldado.webp" alt="" />
              </ContainerImgInd>           
              <ContainerImgInd>
                <Img src="/images/esmaltacao.webp" alt="" />
              </ContainerImgInd>
              <ContainerImgInd>
                <Img src="/images/fibradevidro.webp" alt="" />
              </ContainerImgInd>
              <ContainerImgInd>
                <Img src="/images/gel.webp" alt="" />
              </ContainerImgInd>
              <ContainerImgInd>
                <Img src="/images/manicure-pink-nail-art_269549-139.webp" alt="" />
              </ContainerImgInd>
            <ContainerImgInd>
                <Img src="/images/inspiracoes-unhas-decoradas.webp" alt="" />
              </ContainerImgInd>
              <ContainerImgInd>
                <Img src="/images/sh_unhas-com-peliculas_575363206-1-300x200.webp" alt="" />
              </ContainerImgInd>
              <ContainerImgInd>
                <Img src="/images/unhas-simples.webp" alt="" />
              </ContainerImgInd>
            </ContainerImg>

            </Container>
            
          </>
        )}
        </Layout>
   
     
    </>
  )
}

export default Galeria;

import styled from "styled-components";

export const ContainerText = styled.h2`
font-size: 50px;
color: #73003D;
text-align: center;
margin: 120px auto -50px auto;



`


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
export const ContainerImg = styled.div`
display: grid;
grid-template-columns : auto auto auto  ;
align-items: center;
justify-content: space-around;
padding: 0 10px;
gap:10px;


@media  (max-width: 759px){
    grid-template-columns : auto ;
    align-items: center;
    justify-content: space-between;
  gap:15px;
  }

  @media (min-width: 760px){
    grid-template-columns : auto auto ;
    align-items: center;
    justify-content: space-between;
  gap:15px;
  }
  
  @media (min-width: 1400px){
    grid-template-columns :   auto auto auto;
    align-items: center;
    justify-content: space-between;
  gap:15px;
  }


`
export const ContainerImgInd = styled.div`
height: 300px;
margin-top: 10px;
`

export const Img = styled.img`
height: 300px;
width: 100%;
object-fit: cover;
cursor: pointer;
filter: grayscale(0);
transition: all linear .3s;


@media (min-width: 1400px){
  filter: grayscale(1);

}

&:hover {
  
  filter: grayscale(0);
  transform: scale(1.02)
 
  
}



`