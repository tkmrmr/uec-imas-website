import NextLink from "next/link";
import { Box, Link, Flex, Image } from "@chakra-ui/react";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";

type Link = {
  href: string;
  text: string;
};

export default function Header() {
  return (
    <Box
      as="header"
      bg="whiteAlpha.50"
      h="100px"
      w="100%"
      position="fixed"
      top={0}
      zIndex="docked"
      p="0 100px"
    >
      <nav>
        <Flex
          justify="space-between"
          alignItems="center"
          maxWidth="1920px"
          margin="0 auto"
        >
          {/* ロゴ */}
          <Box m="0 20px" p="0 10px">
            <Link as={NextLink} href="/">
              <Image
                src="/icon.jpg"
                alt="icon"
                maxWidth="60px"
                borderRadius="full"
              />
            </Link>
          </Box>

          {/* モバイル用メニュー */}
          <MobileMenu />
          {/* デスクトップ用メニュー */}
          <DesktopMenu />
        </Flex>
      </nav>
    </Box>
  );
}
