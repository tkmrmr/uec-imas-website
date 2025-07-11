import Image from "next/image";
import { Box, Heading, Container, Stack, SimpleGrid } from "@chakra-ui/react";
import TwitterTimeline from "../components/twitter-timeline";
import Notice from "../components/notice";
import Note from "../components/note";
import { client } from "../lib/client";

type TopImage = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  image: {
    url: string;
    height: number;
    width: number;
  };
};

export default async function Home() {
  const data = await client.get({
    customRequestInit: {
      next: { tags: ["top-image"] },
    },
    endpoint: "top-image",
    queries: { limit: 1, orders: "-publishedAt" },
  });
  const topImage: TopImage = data.contents[0];

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
          src={topImage.image.url}
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
            bgGradient="linear(to-tr, white, orange.400)"
            bgClip="text"
            _dark={{ bgGradient: "linear(to-tr, orange.50, orange.500)" }}
          >
            D@NPEN
          </Heading>
          <Heading
            fontSize={{ base: "1xl", lg: "2xl" }}
            bgGradient="linear(to-tr, white, orange.400)"
            bgClip="text"
            _dark={{ bgGradient: "linear(to-tr, orange.50, orange.500)" }}
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
            <Box pb={5}>
              <Heading
                textAlign="center"
                pt={6}
                pb={12}
                textDecor="underline"
                textUnderlineOffset="10px"
                textDecorationColor="orange.400"
                textDecorationThickness="5px"
                _dark={{ textDecorationColor: "orange.300" }}
              >
                お知らせ
              </Heading>
              <Notice />
            </Box>
            <SimpleGrid columns={[null, 1, 2]} gap={{ base: 0, md: 6 }}>
              {/* note */}
              <Box pb={5}>
                <Heading
                  textAlign="center"
                  pt={6}
                  pb={12}
                  textDecor="underline"
                  textUnderlineOffset="10px"
                  textDecorationColor="orange.400"
                  textDecorationThickness="5px"
                  _dark={{ textDecorationColor: "orange.300" }}
                >
                  新着記事
                </Heading>
                <Note />
              </Box>
              {/* Twitter */}
              <Box pb={5}>
                <Heading
                  textAlign="center"
                  pt={6}
                  pb={12}
                  textDecor="underline"
                  textUnderlineOffset="10px"
                  textDecorationColor="orange.400"
                  textDecorationThickness="5px"
                  _dark={{ textDecorationColor: "orange.300" }}
                >
                  Twitter
                </Heading>
                <Box
                  bgColor="white"
                  outline="1px solid #E2E8F0"
                  borderRadius="2xl"
                  boxShadow="md"
                  p={{ base: 4, sm: 6 }}
                  _dark={{ bgColor: "gray.800", outline: "1px solid #3F444E" }}
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
