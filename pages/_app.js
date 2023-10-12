import React from "react";
import GlobalStyle from "../styles/global";
import StyledComponentsRegistry from '../lib/registry'
import { WhatsApp } from "../components/Whatsapp";


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <StyledComponentsRegistry>
        <Component {...pageProps} />
        <WhatsApp/>
        <GlobalStyle />
      </StyledComponentsRegistry>     
    </div>
  );
}

export default MyApp;
