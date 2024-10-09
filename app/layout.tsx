"use client";

import { Providers } from "./providers";
import { Noto_Sans_JP } from "next/font/google";
import { usePathname } from "next/navigation";

import Header from "../components/header";
import HeaderTop from "../components/header-top";
import Footer from "../components/footer";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isTop = usePathname() === "/";

  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Providers>
          {isTop ? <HeaderTop /> : <Header />}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
