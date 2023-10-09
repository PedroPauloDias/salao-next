import React from 'react'
import Link from "next/Link"
import * as S from "../Navbar/style"
import Image from 'next/image'

export default function Navbar({ acao }) {


  return (
    <S.Container color={acao ? '#ff0099' : ''} >

      <Image src='/image/logoMs.png' width={50} height={50} />

      <ul>
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <p>Serviços</p>
          </Link>
        </li>
        <li>
          <Link href="/galeria">
            <p>Galeria</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p>Contato</p>
          </Link>
        </li>
        <li>
          <Link href="/reservations">
            <p>Agendamentos</p>
          </Link>
        </li>
      </ul>
    </S.Container>
  )
}

