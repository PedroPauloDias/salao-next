'use client'

import React from 'react'
import  Link  from 'next/link';
import * as S from "./style"
import Image from 'next/image'
import logo from '../../public/images/logoMs.png'
import { MenuMobile } from '../MenuMobile';

 const Navbar = ({ acao }) =>{


  return (
    <S.Container color={acao ? '#ff0099' : ''} >
      <S.ContainerImg>
      <Image src={logo} alt='logo da empresa' width={45} height={45} />
        </S.ContainerImg>

      <S.ContainerLinks>
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
      </S.ContainerLinks>
        <MenuMobile />
    </S.Container>
  )
}

export default Navbar