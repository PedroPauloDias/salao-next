import Description from "../components/Description";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import React, { useEffect, useState } from "react";


export default function Home() {

  return (
    <>
    <Navbar/>
      <Header />
      
      <Description />
      <Testimonials />
      <Footer/>

    </>
  );
}
