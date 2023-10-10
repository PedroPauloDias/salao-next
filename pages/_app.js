import React from "react";
import GlobalStyle from "../styles/global";
import StyledComponentsRegistry from '../lib/registry'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <StyledComponentsRegistry>
      <Component {...pageProps} />
      <GlobalStyle />
      </StyledComponentsRegistry>     
    </div>
  );
}

export default MyApp;
