import "@/styles/globals.css";
import type { AppProps } from "next/app";

// Components / Layouts
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Scroller from "@/layouts/Scroller";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Scroller />
      <Navbar /> <Component {...pageProps} /> <Footer />
    </>
  );
}
