import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Layout } from "@/components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
