"use client";

import { preload } from "react-dom";
import {
  Box,
  Heading,
  Container,
  Stack,
  Text,
  SimpleGrid,
  Spinner,
  Center,
} from "@chakra-ui/react";
import ArticleCard from "../components/article-card";
import useNote from "../lib/use-note";
import TwitterTimeline from "@/components/twitter-timeline";

export default function Home() {
  const { noteData, isLoading } = useNote();
  const NewPosts = noteData?.pageEmbedLinks?.slice(0, 2);

  preload("/top2023.png", {
    as: "image",
  });

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
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: 'url("/top2023.png")',
          backgroundSize: "cover",
          backgroundPosition: "center 0px",
          backgroundRepeat: "no-repeat",
          filter: "brightness(90%)", // ここでbrightnessを適用
          zIndex: 0,
        }}
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bg: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      >
        <Box
          position="relative"
          zIndex={2}
          textAlign={"center"}
          bgGradient="linear(to-r, teal.50, teal.400)"
          bgClip="text"
        >
          <Heading fontSize={{ base: "7xl", sm: "8xl", lg: "9xl" }}>
            D@NPEN
          </Heading>
          <Heading fontSize={{ base: "1xl", lg: "2xl" }}>
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
                color="gray.900"
                textUnderlineOffset="14px"
                textDecorationColor="teal.400"
              >
                お知らせ
              </Heading>
              <Box
                bgColor="white"
                border="1px solid #E2E8F0"
                borderRadius="2xl"
                boxShadow="md"
                p={7}
              >
                <Text textAlign="center" fontSize="lg">
                  特にお知らせはありません。
                </Text>
              </Box>
            </Box>
            {/* note */}
            <SimpleGrid columns={[null, 1, 2]} gap={{ base: 0, md: 6 }}>
              <Box pb={5}>
                <Heading
                  textAlign="center"
                  pt={6}
                  pb={12}
                  textDecor="underline"
                  color="gray.900"
                  textUnderlineOffset="14px"
                  textDecorationColor="teal.400"
                >
                  新着記事
                </Heading>
                <Box
                  bgColor="white"
                  border="1px solid #E2E8F0"
                  borderRadius="2xl"
                  boxShadow="md"
                  p={7}
                >
                  {isLoading ? (
                    <Center h="600px">
                      <Spinner size="xl" />
                    </Center>
                  ) : (NewPosts ?? []).length > 0 ? (
                    <SimpleGrid h="600px">
                      {NewPosts?.map((post, index) => (
                        <ArticleCard
                          key={index}
                          post={post}
                          index={index}
                          boxShadow="none"
                          margin={
                            index < NewPosts.length / 2
                              ? { base: " 0 0 6px " }
                              : { base: "6px  0 " }
                          }
                        />
                      ))}
                    </SimpleGrid>
                  ) : (
                    <Box h="600px">
                      <Text textAlign="center" fontSize="lg" lineHeight="600px">
                        記事はまだありません。
                      </Text>
                    </Box>
                  )}
                </Box>
              </Box>
              {/* Twitter */}
              <Box pb={5}>
                <Heading
                  textAlign="center"
                  pt={6}
                  pb={12}
                  textDecor="underline"
                  color="gray.900"
                  textUnderlineOffset="14px"
                  textDecorationColor="teal.400"
                >
                  Twitter
                </Heading>
                <Box
                  bgColor="white"
                  border="1px solid #E2E8F0"
                  borderRadius="2xl"
                  boxShadow="md"
                  p={7}
                  minHeight="657.33px"
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
