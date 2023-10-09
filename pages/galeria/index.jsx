import React, { useState } from 'react'
import Modal from "../../components/Modal/index"
import * as S from "./style"
import { Header } from '../../components/Header'

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
      <S.ContainerText>GALERIA DE FOTOS</S.ContainerText>
      {isModalVisible ? (
        <Modal setModalVisible={setModalVisible} src={ImgSrc}
         />        
      )
        : (
          <>
            

          <S.Container>
    
            <S.ContainerImg>
              <S.ContainerImgInd>   
                <S.Img src="/images/acrilica.webp" alt=""
                  onClick={openModal} />
              </S.ContainerImgInd>
              <S.ContainerImgInd>
                <S.Img src="/images/verde.jpg" alt=""
                 onClick={openModal}/>
              </S.ContainerImgInd>
              <S.ContainerImgInd>
                <S.Img src="/images/unhas_coloridas_JW1Tkvp.webp" alt="" />
              </S.ContainerImgInd>
              <S.ContainerImgInd>
                <S.Img src="/images/unha-gel-decorada.webp" alt="" />
              </S.ContainerImgInd>
              <S.ContainerImgInd>
                <S.Img src="/images/moldado.webp" alt="" />
              </S.ContainerImgInd>           
              <S.ContainerImgInd>
                <S.Img src="/images/esmaltacao.webp" alt="" />
              </S.ContainerImgInd>
              <S.ContainerImgInd>
                <S.Img src="/images/fibradevidro.webp" alt="" />
              </S.ContainerImgInd>
              <S.ContainerImgInd>
                <S.Img src="/images/gel.webp" alt="" />
              </S.ContainerImgInd>
              <S.ContainerImgInd>
                <S.Img src="/images/manicure-pink-nail-art_269549-139.webp" alt="" />
              </S.ContainerImgInd>
            <S.ContainerImgInd>
                <S.Img src="/images/inspiracoes-unhas-decoradas.webp" alt="" />
              </S.ContainerImgInd>
              <S.ContainerImgInd>
                <S.Img src="/images/sh_unhas-com-peliculas_575363206-1-300x200.webp" alt="" />
              </S.ContainerImgInd>
              <S.ContainerImgInd>
                <S.Img src="/images/unhas-simples.webp" alt="" />
              </S.ContainerImgInd>
            </S.ContainerImg>

          </S.Container>
          </>
        )}
   
     
    </>
  )
}

export default Galeria;