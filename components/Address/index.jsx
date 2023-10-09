import React from 'react'
import * as S from './style'
import { FacebookLogo, WhatsappLogo, InstagramLogo } from "phosphor-react";
import { Link } from 'next/navigation';



const Address = () => {
  return (<>
    <S.Container>
      <S.ContainerTitle>
        Venha nos Visitar
      </S.ContainerTitle>
      <S.ContainerContent>
        <span>Endereço </span>
        <p>Rua Lorem ipsum dolor, 288</p>
        <span>Porangaba , Centro</span>
        
        <span>Telefone </span>
        <p>(15) 99123-34-43 </p>
        <p> (15) 99123-54-54</p>
      </S.ContainerContent>
      <S.ContainerText>
        <Link href="/">
          <FacebookLogo size={36} />
        </Link>
        <p>Facebook</p>
      </S.ContainerText>
      <S.ContainerText>
        <Link href="/">
          <InstagramLogo size={36} weight="light" />
        </Link>
        <p>Instagram</p>
      </S.ContainerText>
      <S.ContainerText>
        <Link href="/">
          <WhatsappLogo size={36} weight="light" />
        </Link>
        <p>Whatsapp</p>
      </S.ContainerText>
    </S.Container>
  </>
  )
}

export default Address