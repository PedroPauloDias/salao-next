'use client'

import { useEffect, useState } from 'react';
import  Link  from 'next/link';
import * as S from "./style"
import Image from 'next/image'
import logo from '../../public/images/logoMs.png'
import { MenuMobile } from '../MenuMobile';

 const Navbar = () =>{
  const [active, setActive] = useState(false);  

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 250) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <S.Container color={active? '#990033' : ''} >
      <S.ContainerImg>
      <Image src={logo} alt='logo da empresa' width={45} height={45} />
        </S.ContainerImg>

      <S.ContainerLinks color={active? '#990033' : ''}>
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
        
      </S.ContainerLinks>
        <MenuMobile />
    </S.Container>
  )
}

export default Navbar