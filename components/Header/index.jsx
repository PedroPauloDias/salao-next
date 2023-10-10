import React from 'react'
import * as S from "./style"
import Image from 'next/image';




export const Header = ({}) => {
  return (
    <S.Container>
       <Image src="/images/backLogo2.jpeg"  alt='painel de fundo ' layout='fill'/>    
    </S.Container>
  )
}

 