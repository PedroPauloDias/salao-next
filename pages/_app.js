import React from "react"
import Layout from "../components/Layout";
import GlobalStyle from "../styles/global";


function MyApp({ Component, pageProps }) {
  return (
    <div >
        <Component {...pageProps} />
      <GlobalStyle/>
    </div>
  );
};

export default MyApp;