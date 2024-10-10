"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
  Container,
  // Text,
} from "@chakra-ui/react";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Box>
      {/* トップ */}
      <Box
        bgImage="/top.png"
        bgSize="cover"
        bgPosition="center 0px"
        bgRepeat="no-repeat"
        color="black"
        height="700px"
        width="100%"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bg: "rgba(0, 0, 0, 0.4)" /* 半透明の黒をオーバーレイ */,
          zIndex: 1,
        }}
        filter="brightness(90%)"
      >
        <Box position="relative" zIndex={2} textAlign={"center"}>
          <Heading fontSize={{ base: "6xl", md: "8xl" }} color="white">
            D@NPEN
          </Heading>
          <Heading fontSize={{ base: "1xl", md: "2xl" }} color="white">
            電気通信大学アイドルマスター研究会
          </Heading>
        </Box>
      </Box>
      <Container maxW="1100px">
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex
            direction="column"
            background={formBackground}
            padding={12}
            rounded={6}
          >
            <Heading mb={6}>Log in</Heading>
            <Input
              placeholder="sample@sample.com"
              variant="filled"
              mb={3}
              type="email"
            />
            <Input
              placeholder="********"
              variant="filled"
              mb={6}
              type="password"
            />
            <Button mb={6} colorScheme="teal">
              Log in
            </Button>
            <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
