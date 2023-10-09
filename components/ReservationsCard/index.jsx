import React from 'react'
import * as S from './style'

const ReservationCard = ({ reservation, handleRemove, name, date, horario, servico, key, id }) => {

  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }


  return (

    <S.ContainerList key={key}>
      <S.TopColor>
        <S.ContainerContent>
          <S.Title>Nome :</S.Title>
          <S.Text>{name}</S.Text>
        </S.ContainerContent>
      </S.TopColor>
      <S.ContainerContent>
        <S.Title>Dia :</S.Title>
        <S.Text>{date}</S.Text>
      </S.ContainerContent>
      <S.ContainerContent>
        <S.Title>Horario: </S.Title>
        <S.Text>{`${horario + ' hrs'}`}</S.Text>
      </S.ContainerContent>
      <S.ContainerContent>
        <S.Title>Serviço :</S.Title>
        <S.Text>{servico}</S.Text>
      </S.ContainerContent>
      <S.ContButtons>
   
        <S.Button onClick={remove} >Excluir</S.Button>
      </S.ContButtons>


    </S.ContainerList>


  )
}

export default ReservationCard