import NextLink from "next/link";
import {
  Box,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Link = {
  href: string;
  text: string;
};

export default function MobileMenu({ color = "block" }: { color?: string }) {
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
    <Box lineHeight="100px" display={{ base: "block", md: "none" }}>
      <IconButton
        aria-label="menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        variant="outline"
        color={color}
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
  );
}
