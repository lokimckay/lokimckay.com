import Layout from "../components/layout";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/post/mdx";
import Router from "next/router";
import NProgress from "nprogress";
import Head from "next/head";
import "../styles/main.css";
import "../styles/prism.css";
import "../styles/skeleton.css";
import "../styles/nprogress.css";
import "../styles/headings.css";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }) => (
  <MDXProvider components={MDXComponents}>
    <Head>
      <title>Lachlan McKay</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </MDXProvider>
);

export default App;
