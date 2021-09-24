// import { useState, useEffect } from "react";
import GlobalStyle from "styles/GlobalStyle";
// import { AppProps } from "next/app";
// import { NextPage } from "next";
import Head from "next/head";
// import { useRouter } from "next/router";
// import { wrapper } from "state/configureStore";
import { ThemeProvider } from "styled-components";
// import { Provider } from "next-auth/client";
import theme from "styles/theme";
// import SplashScreen from "components/SplashScreen";

const App = ({ Component, pageProps }) => {
  // const router = useRouter();
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const handleStart = (url) => {
  //     if (
  //       router.pathname !== '/project/upload' &&
  //       router.pathname !== '/project/[id]/edit' &&
  //       url !== '/' &&
  //       url !== '/ideas' &&
  //       url !== '/goods'
  //     ) {
  //       setLoading(true);
  //     }
  //   };
  //   const handleComplete = () => {
  //     setLoading(false);
  //   };

  //   router.events.on('routeChangeStart', handleStart);
  //   router.events.on('routeChangeComplete', handleComplete);
  //   router.events.on('routeChangeError', handleComplete);
  // }, [router]);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Lee Jung Woo | Web site</title>
      </Head>
      <ThemeProvider theme={theme}>
        {/* {loading && <SplashScreen fixed />} */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
