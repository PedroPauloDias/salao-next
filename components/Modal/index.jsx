import React from 'react'
import * as S from './style'

const Modal = ({setModalVisible, src}) => {
  return (
    <>  
      <S.background>
        <S.ModalWrapper>
          {src.map((s) => {
            return (
              <>
              <S.ModalImg src={s} alt="" />              
              </>
            )
          })}
          <S.CloseButton onClick={()=> setModalVisible(prev => !prev)}>X</S.CloseButton>
        </S.ModalWrapper>
      </S.background>
    </>
  )
}

export default Modal;