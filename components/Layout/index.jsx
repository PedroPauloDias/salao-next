

import React from 'react'

import Footer from '../Footer'
import { Header } from '../Header'
import WhatsappButton from "../Whatsapp"
import { useState, useEffect } from "react"





const Layout = ({ children }) => {

  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout;

