import React, { useState, useEffect } from 'react'
import Select from "../Select"


import * as S from "./style"



const Booking = ({ reserveData, handleSubmit }) => {

  const [reserve, setReserve] = useState(reserveData || {})

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(reserve)
  }


  const handleChange = (e) => {
    setReserve({ ...reserve, [e.target.name]: e.target.value })

  }

  const handleSelect = (e) => {
    setReserve({
      ...reserve, servicos: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      }
    })
    console.log(reserve)
  }

  return (
    <form onSubmit={submit}>
      <S.Container>

        <S.ContainerText>
          Agende seu Horário
        </S.ContainerText>
        <S.ContainerContent>
          <label htmlFor="name" >Nome Completo</label>
          <S.Input type="text" name="name" placeholder="Digite o seu nome" required onChange={handleChange} autoComplete="off" />
        </S.ContainerContent>
        <S.ContainerContent>
          <label htmlFor="telefone">Telefone</label>
          <S.Input type="number" name="telefone" placeholder="(15) 991XX-XX-XX" required onChange={handleChange} />
        </S.ContainerContent>
        <S.ContainerContent>
          <Select name="service_id" text="selecione o servico" required handleChange={handleSelect} value={reserve.servicos ? reserve.servicos.id : ''} />
        </S.ContainerContent>
        <S.ContBooking>
          <div>
            <label htmlFor="date">Dia </label>
            <S.InputDate type="date" name="date" required onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="horario">Hora</label>
            <S.InputDate type="time" name="horario" min="09:00" max="18:00" required onChange={handleChange} />
          </div>
        </S.ContBooking>
        <S.ContainerContent >
          <S.Button type="submit" />    
        </S.ContainerContent>
      </S.Container>

    </form>
  )
}

export default Booking