"use client";

import { Providers } from "./providers";
import { Noto_Sans_JP } from "next/font/google";
import { usePathname } from "next/navigation";
import { Container, Flex } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/header";
import Footer from "../components/footer";
import PageHeader from "../components/page-title";
import { links } from "../lib/links";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  let pathnameExists: boolean = false;
  for (const link of links) {
    if (link.href === pathname) {
      pathnameExists = true;
      break;
    }
  }
  return (
    <html lang="ja">
      <head>
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
          <Flex direction="column" minH="100vh" bgColor="gray.50">
            <Header pathname={pathname} />
            {pathname !== "/" && pathnameExists && (
              <PageHeader pathname={pathname.slice(1)} />
            )}
            {pathname !== "/" ? (
              <Container maxW="1100px" flex="1">
                {children}
                <Analytics />
              </Container>
            ) : (
              <>
                {children}
                <Analytics />
              </>
            )}
            <Footer />
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
