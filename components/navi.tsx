import NextLink from "next/link";
import {
  Box,
  Link,
  ListItem,
  UnorderedList,
  IconButton,
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { links } from "../lib/links";

export default function Navi({
  color = "gray.900",
  darkColor = "white",
  pathname,
}: {
  color?: string;
  darkColor?: string;
  pathname: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

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
          _dark={{ color: darkColor }}
        />
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent _dark={{ bgColor: "gray.800" }}>
            <DrawerCloseButton />
            <DrawerHeader
              p="30px 0 20px"
              textAlign="center"
              color="gray.800"
              _dark={{ color: "white" }}
            >
              Menu
            </DrawerHeader>
            <DrawerBody>
              {links.map((link, index) => (
                <Box key={index}>
                  <Button
                    as={NextLink}
                    href={link.href}
                    w="100%"
                    onClick={onClose}
                    color={link.href === pathname ? "teal.400" : "gray.700"}
                    bgColor={link.href === pathname ? "teal.50" : "white"}
                    m="10px 0"
                    justifyContent="flex-start"
                    fontSize="lg"
                    fontWeight="normal"
                    _hover={{ color: "teal.400", bgColor: "teal.50" }}
                    _active={{
                      WebkitTapHighlightColor: "transparent",
                    }}
                    _dark={{
                      color: link.href === pathname ? "teal.300" : "gray.100",
                      bgColor: link.href === pathname ? "teal.800" : "gray.800",
                    }}
                  >
                    {link.text}
                  </Button>
                </Box>
              ))}
            </DrawerBody>
            <DrawerFooter>
              <IconButton
                onClick={toggleColorMode}
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                aria-label="Toggle color mode"
              />
            </DrawerFooter>
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
                _dark={{
                  color: darkColor,
                  bgImage: "linear-gradient(90deg, teal.300, teal.300)",
                  _hover: {
                    color: "teal.300",
                  },
                }}
              >
                {link.text}
              </Link>
            </ListItem>
          ))}
          <ListItem listStyleType="none" alignContent="center">
            <IconButton
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              aria-label="Toggle color mode"
              variant="ghost"
              color={color}
              _dark={{ color: darkColor }}
            />
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}
