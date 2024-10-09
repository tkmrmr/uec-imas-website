import NextLink from "next/link";
import {
  Box,
  Link,
  ListItem,
  UnorderedList,
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

export default function Menu({ color = "black" }: { color?: string }) {
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
    <Box>
      {/* デスクトップ用メニュー */}
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
      {/* モバイル用メニュー */}
      <Box display={{ base: "none", md: "block" }}>
        <UnorderedList display="flex">
          {links.map((link, index) => (
            <ListItem key={index} m="0 20px" p="0 10px" listStyleType="none">
              <Link
                as={NextLink}
                href={link.href}
                fontWeight="600"
                fontSize="17px"
                lineHeight="100px"
                color={color}
                textDecoration="none"
                bgImage="linear-gradient(90deg, teal.400, teal.400)"
                bgRepeat="no-repeat"
                bgPosition="left bottom"
                bgSize="0 2px"
                transition="background-size 0.6s"
                _hover={{ color: "teal.400", bgSize: "100% 2px" }}
              >
                {link.text}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
}
