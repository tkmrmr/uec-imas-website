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
import { Timeline, eagerLoadTwitterLibrary } from "react-twitter-widgets";
import ArticleCard from "../components/article-card";
import useNote from "../lib/use-note";

export default function Home() {
  const { noteData, isLoading } = useNote();
  const NewPosts = noteData?.pageEmbedLinks?.slice(0, 2);

  preload("/top.png", {
    as: "image",
  });

  eagerLoadTwitterLibrary();

  return (
    <Box>
      {/* ヒーローセクション */}
      <Box
        bgImage="/top.png"
        bgSize="cover"
        bgPosition="center 0px"
        bgRepeat="no-repeat"
        color="black"
        height="100vh"
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
          bg: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
        filter="brightness(90%)"
      >
        <Box
          position="relative"
          zIndex={2}
          textAlign={"center"}
          bgGradient="linear(to-r, teal.50, teal.500)"
          bgClip="text"
        >
          <Heading fontSize={{ base: "6xl", sm: "7xl", md: "8xl" }}>
            D@NPEN
          </Heading>
          <Heading fontSize={{ base: "1xl", md: "2xl" }}>
            電気通信大学アイドルマスター研究会
          </Heading>
        </Box>
      </Box>

      {/* メインコンテンツ */}
      <Container maxW="1100px">
        <Box m="40px 10px">
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
                boxShadow="lg"
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
                  boxShadow="lg"
                  p={7}
                >
                  {isLoading ? (
                    <Center h="600px">
                      <Spinner size="xl" />
                    </Center>
                  ) : (
                    <SimpleGrid h="600px">
                      {NewPosts?.map((post, index) => (
                        <ArticleCard
                          key={index}
                          post={post}
                          index={index}
                          boxShadow="none"
                          margin={
                            index < NewPosts.length / 2
                              ? " 0 0 6px "
                              : "6px  0 "
                          }
                        />
                      ))}
                    </SimpleGrid>
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
                  boxShadow="lg"
                  p={7}
                  minHeight="657.33px"
                >
                  <Timeline
                    dataSource={{
                      sourceType: "profile",
                      screenName: "uec_imas",
                    }}
                    options={{ height: 600 }}
                  />
                </Box>
              </Box>
            </SimpleGrid>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
