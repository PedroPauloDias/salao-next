import React from 'react'
import * as S from './style'
import { FacebookLogo, WhatsappLogo, InstagramLogo } from "phosphor-react";
import  Link  from 'next/link';



const Address = () => {
  return (<>
    <S.Container>
      <S.ContainerTitle>
        <p>Venha nos Visitar</p>
      </S.ContainerTitle>
      <S.ContainerContent>
        <span>Endereço </span>
        <p>Rua Lorem ipsum dolor, 288</p>
        <span>Porangaba , Centro</span>
        <br/>
        <span>Telefone </span>
        <p>(15) 99123-34-43 </p>
      </S.ContainerContent>
      <S.ContainerText>
        <Link href="/">
          <FacebookLogo size={30} />
        </Link>
        <Link href="/">
          <InstagramLogo size={30} weight="light" />
        </Link>    
        <Link href="/">
          <WhatsappLogo size={30} weight="light" />
        </Link>
      </S.ContainerText>
    </S.Container>
  </>
  )
}

export default Address