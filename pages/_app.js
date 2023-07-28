import Navbar from '../components/Navbar';
import {Analytics} from "@vercel/analytics/react"
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
