import { Raleway } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'

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
      <GoogleTagManager gtmId="G-06ZPVLD70G" />
    </html>
  );
}
