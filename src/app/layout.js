import { Raleway } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./_styles/default.css";
import "./_styles/styles.css";

import {Footer, NavBar, PageTitle, TopBar} from "@/components/sections";

const inter = Raleway({ subsets: ["latin-ext"] });

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <TopBar />
        <NavBar />
        <PageTitle />
        {children}
        <Footer />
      </body>
      <GoogleTagManager gtmId="GTM-MPM92G8X" />
      <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '676681505166093');
            fbq('track', 'PageView');
          `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{display: 'none'}}
          src="https://www.facebook.com/tr?id=676681505166093&ev=PageView&noscript=1"
        />
      </noscript>

    </html>
  );
}
