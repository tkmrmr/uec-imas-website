"use client";

// app/layout.tsx
import { Providers } from "./providers";
import { Noto_Sans_JP } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
