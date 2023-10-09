import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import * as S from "./style"
import ReservationsCard from '../../components/ReservationsCard'

export default function  Reservations()  {
  const [myReservations, setMyReservations] = useState([])

  useEffect(() => {

    axios.get('http://localhost:5000/agendamentos/')
      .then((response) => {
        setMyReservations(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);
  

  function RemoveReservation(id) {
    fetch(`http://localhost:5000/agendamentos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(resp => resp.json())
      .then(data => {
        setMyReservations(myReservations.filter((reservation) => reservation.id !== id))
      })
      .catch(err => console.log(err))
}




  return (
    <>
      <h2>Agendamentos</h2>
      
    <S.Container  >
    {
      myReservations.map((reservation) => {
        return (
          <ReservationsCard
            name={reservation.name}
            date={reservation.date}
            horario={reservation.horario}
            id={reservation.id}
            key={reservation.id}
            servico={reservation.servicos.name}
            handleRemove={RemoveReservation} />
          )
        })
      }
    </S.Container>
            </>
  )
}

