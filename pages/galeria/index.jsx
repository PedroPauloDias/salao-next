'use client'

import React, { useState } from 'react'
import Modal from "../../components/Modal/index"

import Layout from '../../components/Layout'

const Galeria = () => {

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
              <ContainerImgInd>   
                <Img src="/images/acrilica.webp" alt=""
                  onClick={openModal} />
              </ContainerImgInd>
              <ContainerImgInd>
                <Img src="/images/verde.jpg" alt=""
                 onClick={openModal}/>
              </ContainerImgInd>
              <ContainerImgInd>
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
margin: 50px ;
text-align: center;
`

export const Container = styled.div`
width:95vw;
margin:0 45px 0 35px;
margin-top: 50px;


`
export const ContainerImg = styled.div`
display: grid;
grid-template-columns : 33%  33%    33%     ;
gap:10px;
`
export const ContainerImgInd = styled.div`
max-width:400px;
max-height: 300px;
margin-top: 10px;
`

export const Img = styled.img`
height: 300px;
width: 400px;
object-fit: cover;
cursor: pointer;
filter: grayscale(1);
transition: all linear .3s;

&:hover {
  
  filter: grayscale(0);
  transform: scale(1.02)
 
  
}



`