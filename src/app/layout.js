import { Raleway } from "next/font/google";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./_styles/default.css";
import "./_styles/styles.css";

import {NavBar, TopBar} from "@/components/sections";

const inter = Raleway({ subsets: ["latin-ext"] });

export const metadata = {
  // TODO: alternates
  title: "Master Steel House | Hafif Çelik Ev, Hafif Çelik Yapı",
  description: "Master Steel House, mükemmel tasarımı ve dayanıklılığı, hafif çelik ev ve hafif çelik yapı çeşitlerinde bir araya getirir. Maksimum kalite ve uygun hafif çelik ev fiyatları için doğru adrestesiniz.",
  keywords: ['hafif çelik', 'hafif çelik ev'],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <TopBar />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
