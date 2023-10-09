import React from 'react'

import * as S from "./style"

const Formulario = () => {
 


  return (
    <>
      <form action="https://formsubmit.co/pedroppld@gmail.com" method="POST">
        <S.ContainerForm>
          <S.ContainerText>
          Mensagem por E-mail
          </S.ContainerText>
          <S.ContainerContent>
            <label htmlFor="name">Nome</label>
            <S.Input type="text" name="name" placeholder="Digite o seu nome aqui" />
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
            <textarea placeholder=" Digite aqui sua mensagem" name="message" id="message" rows="5" cols="21"></textarea>
          </S.ContainerContent>

          <S.Button type="submit"></S.Button>
        </S.ContainerForm>
      </form>
    </>
  )
}

export default Formulario