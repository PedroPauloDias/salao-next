'use client'

import Description from "../components/Description";
import { Header } from "../components/Header";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";
import React, { useEffect, useState } from "react";


export default function Home() {

  return (
    <>
        <Layout>
          <Header />
          <Description />
          <Testimonials />
        </Layout>
    </>
  );
}
