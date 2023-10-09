

import React from 'react'

import Footer from '../Footer'
import { Header } from '../Header'
import WhatsappButton from "../Whatsapp"
import { useState, useEffect } from "react"
import Navbar from '../Navbar'





const Layout = ({ children }) => {

  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout;

