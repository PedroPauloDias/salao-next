

'use client' 

import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import * as S from './style'

const Layout = ({ children }) => {
  return (
    <S.Container>
      <Navbar/>
      <main>{children}</main>
      <Footer />
      </S.Container>
  )
}
export default Layout;

