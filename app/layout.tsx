"use client";

import { Providers } from "./providers";
import { Noto_Sans_JP } from "next/font/google";
import { usePathname } from "next/navigation";
import { Container, Flex } from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";
import PageHeader from "@/components/page-header";
import { links } from "../lib/links";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"] });

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
              </Container>
            ) : (
              children
            )}
            <Footer />
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
