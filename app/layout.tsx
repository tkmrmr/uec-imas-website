import { Providers } from "./providers";
import { Noto_Sans_JP } from "next/font/google";
import { Box } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/header";
import Footer from "../components/footer";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="D@NPEN" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <title>電気通信大学アイドルマスター研究会【D@NPEN】</title>
        <meta
          name="description"
          content="電気通信大学学友会公認サークル「D@NPEN」公式サイトです。"
        />
        <meta
          property="og:title"
          content="電気通信大学アイドルマスター研究会【D@NPEN】"
        />
        <meta
          property="og:site_name"
          content="電気通信大学アイドルマスター研究会【D@NPEN】"
        />
        <meta
          property="og:description"
          content="電気通信大学学友会公認サークル「D@NPEN」公式サイトです。"
        />
        <meta property="og:image" content="https://uec-imas.com/icon.webp" />
        <meta property="og:url" content="https://uec-imas.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="電気通信大学アイドルマスター研究会【D@NPEN】"
        />
        <meta
          name="twitter:description"
          content="電気通信大学学友会公認サークル「D@NPEN」公式サイトです。"
        />
        <meta name="twitter:image" content="https://uec-imas.com/icon.webp" />
        <meta
          name="google-site-verification"
          content="m2EpZ-wvwcvHIefUmepHnxYiFgkS20z1sf1Lm0J83wI"
        />
      </head>
      <body className={notoSansJP.className}>
        <Providers>
          <Box bgColor="gray.50" _dark={{ bgColor: "gray.800" }}>
            <Header />
            {children}
            <Analytics />
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
