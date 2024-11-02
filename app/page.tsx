import Image from "next/image";
import { Box, Heading, Container, Stack, SimpleGrid } from "@chakra-ui/react";
import TwitterTimeline from "../components/twitter-timeline";
import Notice from "../components/notice";
import Note from "../components/note";

export default function Home() {
  return (
    <Box>
      {/* ヒーローセクション */}
      <Box
        position="relative"
        height="100vh"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="black"
        zIndex={1}
      >
        <Image
          src="/top.webp"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="52.5% 0%"
          priority={true}
          style={{ filter: "brightness(90%)" }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex={1}
        />
        <Box position="relative" zIndex={2} textAlign={"center"}>
          <Heading
            fontSize={{ base: "7xl", sm: "8xl", lg: "9xl" }}
            bgGradient="linear(to-r, teal.50, teal.400)"
            bgClip="text"
          >
            D@NPEN
          </Heading>
          <Heading
            fontSize={{ base: "1xl", lg: "2xl" }}
            bgGradient="linear(to-r, teal.50, teal.400)"
            bgClip="text"
          >
            電気通信大学アイドルマスター研究会
          </Heading>
        </Box>
      </Box>

      {/* メインコンテンツ */}
      <Container maxW="1200px">
        <Box m="40px 0px">
          <Stack spacing={5}>
            {/* お知らせ */}
            <Notice />
            <SimpleGrid columns={[null, 1, 2]} gap={{ base: 0, md: 6 }}>
              {/* note */}
              <Note />
              {/* Twitter */}
              <Box pb={5}>
                <Heading
                  textAlign="center"
                  pt={6}
                  pb={12}
                  textDecor="underline"
                  textUnderlineOffset="10px"
                  textDecorationColor="teal.400"
                  textDecorationThickness="5px"
                >
                  Twitter
                </Heading>
                <Box
                  bgColor="white"
                  border="1px solid #E2E8F0"
                  borderRadius="2xl"
                  boxShadow="md"
                  p={{ base: 4, sm: 6 }}
                >
                  <TwitterTimeline />
                </Box>
              </Box>
            </SimpleGrid>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
