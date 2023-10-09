import React from 'react'
import Navbar from '../Navbar'
import * as S from "./style"
import Image from 'next/image';
import styled from 'styled-components';




export const Header = ({}) => {
  return (
    <S.Container>
       <Image src="/images/backLogo2.jpeg" layout='fill'/>
      <S.ContainerImg  >   
   
      </S.ContainerImg>
    </S.Container>
  )
}

 