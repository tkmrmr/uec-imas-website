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
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Sun, Moon } from "lucide-react";
import { links } from "../lib/links";

export default function Navi({
  color = "gray.900",
  darkColor = "white",
  pathname,
  isClear = false,
}: {
  color?: string;
  darkColor?: string;
  pathname: string;
  isClear?: boolean;
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
                    color={link.href === pathname ? "orange.400" : "gray.700"}
                    bgColor={link.href === pathname ? "orange.50" : "white"}
                    m="10px 0"
                    justifyContent="flex-start"
                    fontSize="lg"
                    fontWeight="normal"
                    _hover={{ color: "orange.400", bgColor: "orange.50" }}
                    _active={{
                      WebkitTapHighlightColor: "transparent",
                    }}
                    _dark={{
                      color: link.href === pathname ? "orange.300" : "gray.100",
                      bgColor:
                        link.href === pathname ? "orange.800" : "gray.800",
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
                icon={colorMode === "light" ? <Moon /> : <Sun />}
                aria-label="Toggle color mode"
              />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
      {/* デスクトップ用メニュー */}
      <Box
        display={{ base: "none", sm: "block" }}
        pointerEvents={isClear ? "none" : "auto"}
      >
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
                bgImage="linear-gradient(90deg, orange.400, orange.400)"
                bgRepeat="no-repeat"
                bgPosition="left bottom"
                bgSize="0 2px"
                transition="background-size 0.3s, color 0.3s ease"
                _hover={{ color: "orange.400", bgSize: "100% 2px" }}
                _dark={{
                  color: darkColor,
                  bgImage: "linear-gradient(90deg, orange.300, orange.300)",
                  _hover: {
                    color: "orange.300",
                  },
                }}
              >
                {link.text}
              </Link>
            </ListItem>
          ))}
          <ListItem
            listStyleType="none"
            alignContent="center"
            pr={{ sm: "12px", md: "18px", lg: "24px", xl: "30px" }}
            py={9}
          >
            <Divider
              orientation="vertical"
              borderColor={color}
              _dark={{ borderColor: darkColor }}
            />
          </ListItem>
          <ListItem listStyleType="none" alignContent="center">
            <IconButton
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <Moon /> : <Sun />}
              aria-label="Toggle color mode"
              aria-disabled={isClear}
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
