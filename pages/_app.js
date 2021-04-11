import {useEffect} from 'react'
import '../styles/fontdefs.css'
import 'tailwindcss/tailwind.css'



function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
