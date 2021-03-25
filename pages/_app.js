import { useEffect } from'react'
import '../styles/globals.css'


const liffId = process.env.NEXT_PUBLIC_LIFF_ID

function MyApp({ Component, pageProps }) {
  useEffect(async () => {
    const liff = (await import('@line/liff')).default

    try {
      await liff.init({liffId})
    } catch (error) {
      console.log('liff error ',error);
    }
    const checkLogin = liff.isLoggedIn;
    if(!checkLogin){
      liff.login();
    }

  })

  return <Component {...pageProps} />
}

export default MyApp
