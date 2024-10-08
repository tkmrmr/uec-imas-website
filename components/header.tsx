"use client";

import NextLink from "next/link";
import {
  Box,
  Link,
  Flex,
  ListItem,
  UnorderedList,
  Image,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Link = {
  href: string;
  text: string;
};

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const links: Link[] = [
    { href: "/about", text: "ABOUT" },
    { href: "/news", text: "NEWS" },
    { href: "/blog", text: "BLOG" },
    { href: "/member", text: "MEMBER" },
    { href: "/works", text: "WORKS" },
    { href: "/contact", text: "CONTACT" },
  ];
  return (
    <Box
      as="header"
      bg="blackAlpha.50"
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
          <Box lineHeight="100px" display={{ base: "block", md: "none" }}>
            <IconButton
              aria-label="menu"
              icon={<HamburgerIcon />}
              onClick={onOpen}
              variant="outline"
            />
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>メニュー</DrawerHeader>
                <DrawerBody>
                  {links.map((link, index) => (
                    <Button
                      key={index}
                      as={NextLink}
                      href={link.href}
                      w="100%"
                      mb={4}
                    >
                      {link.text}
                    </Button>
                  ))}
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>

          {/* デスクトップ用メニュー */}
          <Box display={{ base: "none", md: "block" }}>
            <UnorderedList display="flex">
              {links.map((link, index) => (
                <ListItem
                  key={index}
                  m="0 20px"
                  p="0 10px"
                  listStyleType="none"
                >
                  <Link
                    as={NextLink}
                    href={link.href}
                    fontWeight="600"
                    fontSize="17px"
                    lineHeight="100px"
                  >
                    {link.text}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Flex>
      </nav>
    </Box>
  );
}
