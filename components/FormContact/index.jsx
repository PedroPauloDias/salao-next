import React from 'react'

import * as S from "./style"

const FormContact = () => {
  return (
    <>
      <form action="https://formsubmit.co/pedroppld@gmail.com" method="POST">
        <S.ContainerForm>
          <S.ContainerText>
          Mensagem por E-mail
          </S.ContainerText>
          <S.ContainerContent>
            <label htmlFor="name">Nome</label>
            <S.Input type="text" name="name" placeholder="Digite o seu nome " />
          </S.ContainerContent>
          <S.ContainerContent>
            <label htmlFor="tel">Telefone</label>
            <S.Input  type="Number" name="tel" placeholder=" (15) 991XX-XX-XX" />
          </S.ContainerContent>
          <S.ContainerContent>
            <label htmlFor="email">Email</label>
            <S.Input  type="Email"name="email" placeholder="usuario@provedor.com" />
          </S.ContainerContent>
          <S.ContainerContent>
            <label htmlFor="message">Mensagem</label>
            <S.TextArea placeholder=" Digite sua mensagem" name="message" id="message" rows="5" cols="21"></S.TextArea>
          </S.ContainerContent>

          <S.Button type="submit"></S.Button>
        </S.ContainerForm>
      </form>
    </>
  )
}

export default FormContact;