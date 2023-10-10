import React, { useEffect } from 'react'
import { useState } from 'react'
import { List, X } from 'phosphor-react'


import * as S from './style'

export const MenuMobile = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  
  const openMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  //useEffect(() => {
 //   document.body.style.overflowY = menuIsOpen ? 'hidden' : 'auto'
 // },[menuIsOpen])

  return (
    <nav>    
      {menuIsOpen == true ?        
        (
          <S.ContainerMenu   >       
            <S.CloseButton onClick={openMenu}>
              <X/>
            </S.CloseButton>
        <S.ContainerLink>
          <S.ListLink>
            <S.Link href="/">Home</S.Link>
          </S.ListLink>
          <S.ListLink>
            <S.Link href="/atendimento">Serviços</S.Link>
          </S.ListLink>
          <S.ListLink>
            <S.Link href="/about">Sobre mim</S.Link>
          </S.ListLink>

              <S.ListLink>
            <S.Link href="/info">Informacões</S.Link>
          </S.ListLink>
          <S.ListLink>
            <S.Link href="https://wa.me/5515996042007" target="_blank">Whatsapp</S.Link>
          </S.ListLink>
            </S.ContainerLink>
            </S.ContainerMenu>
    
            )
          :
        (
          <S.OpenMenu >        
            <S.OpenButton onClick={openMenu}><List size={25}  /></S.OpenButton>          
          </S.OpenMenu>
          )          
      }             
    </nav>

  )
}
