import React from 'react'
import * as S from "./style"
import { FacebookLogo, WhatsappLogo, InstagramLogo } from "phosphor-react"
import Link from 'next/Link'

const Footer = () => {
  return (
    <>
      <S.Container>
        <S.ContainerInfo>
          <S.Title>Horário de atendimento</S.Title>
          <S.ContainerText>
            <span>Segunda a Sexta:</span>
            <p> 08h00 as 20h00</p>
          </S.ContainerText>
          <S.ContainerText>
            <span>Sábado:</span>
            <p> 08h00 as 18h00</p>
          </S.ContainerText>
          <S.ContainerText>
            <a href="/">Agende o seu Horário</a>
          </S.ContainerText>
        </S.ContainerInfo>
        <S.ContainerInfo>
          <S.TitleSocial> Redes Sociais</S.TitleSocial>

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
            <Link href="/"><WhatsappLogo size={36} weight="light" /></Link>
            <p>Whatsapp</p>
          </S.ContainerText>
        </S.ContainerInfo>
      </S.Container>
      <S.ContainerCopy>
        <p >
          &copy;  Todos os direitos reservados.
        </p>
      </S.ContainerCopy>
    </>
  )
}
export default Footer;

