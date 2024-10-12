import NextLink from "next/link";
import {
  Box,
  Link,
  ListItem,
  UnorderedList,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { links } from "../lib/links";

export default function Navi({ color = "black" }: { color?: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      {/* モバイル用メニュー */}
      <Box
        // ヘッダーの高さ変えたらここを変える
        lineHeight="70px"
        display={{ base: "block", sm: "none" }}
      >
        <IconButton
          aria-label="menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="outline"
          color={color}
          transition="color 0.3s ease"
          m="0 10px"
          p="0 5px"
          borderRadius="full"
        />
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            {/* <DrawerHeader>MENU</DrawerHeader> */}
            <DrawerBody p="40px 20px">
              {links.map((link, index) => (
                <Box key={index}>
                  <Button
                    as={NextLink}
                    href={link.href}
                    // borderBottom="1px solid"
                    w="100%"
                    onClick={onClose}
                    borderRadius="none"
                    bgColor="white"
                    m="10px 0"
                  >
                    {link.text}
                  </Button>
                  <Divider borderColor="black" />
                </Box>
              ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      {/* デスクトップ用メニュー */}
      <Box display={{ base: "none", sm: "block" }}>
        <UnorderedList display="flex">
          {links.map((link, index) => (
            <ListItem
              key={index}
              p={{ sm: "0 12px", md: "0 18px", lg: "0 24px", xl: "0 30px" }}
              listStyleType="none"
            >
              <Link
                as={NextLink}
                href={link.href}
                fontWeight="600"
                fontSize={{ sm: "14px", md: "17px" }}
                // ヘッダーの高さ変えたらここを変える
                lineHeight="100px"
                color={color}
                textDecoration="none"
                bgImage="linear-gradient(90deg, teal.400, teal.400)"
                bgRepeat="no-repeat"
                bgPosition="left bottom"
                bgSize="0 2px"
                transition="background-size 0.3s, color 0.3s ease"
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
