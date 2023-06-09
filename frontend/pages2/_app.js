import App from "next/app";
import Head from "next/head";
import "../assets/css/style.css";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, data, users }) => {

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
        // href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <GlobalContext.Provider value={users}>
        <Component {...data} />
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps.So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
// MyApp.getInitialProps = async (ctx) => {
//   // Calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(ctx);
//   // Fetch global site settings from Strapi
//   const { data } = await fetchAPI("/meetings");
//   const users = await fetchAPI("/users/?populate=*");
//   // Pass the data to our page via props
//   return { data, users };
// };

export default MyApp;