import Painter from "@/components/Painter";
import "@/styles/globals.css";
import BrushIconDataURL from "@/icons/BrushIcon";

export default function App({ Component, pageProps }) {
  return (
  <div style={{ cursor: `url('${BrushIconDataURL}'), auto` }}>
    <Painter />
    <Component {...pageProps} />
  </div>
  );
}