import Painter from "@/components/Painter";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
  <>
    <Painter/>
    <Component {...pageProps} />
  </>
  );
}
