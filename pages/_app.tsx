import "../styles/globals.css";
import "nprogress/nprogress.css";
import Router from "next/router";
import NProgress from "nprogress";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

import SEO from "../next-seo-config";
import { Layout } from "@/components";

Router.events.on("routeChangeStart", () => {
  NProgress.configure({ showSpinner: false });
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
