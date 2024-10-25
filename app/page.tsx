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
  Divider,
} from "@chakra-ui/react";
import ArticleCard from "../components/article-card";
import useNote from "../lib/use-note";
import TwitterTimeline from "../components/twitter-timeline";
import { hasNotice, notices } from "../lib/notices";

export default function Home() {
  const { noteData, isLoading } = useNote();
  const newPosts = noteData?.pageEmbedLinks?.slice(0, 2);

  preload("/top2023.webp", {
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
          backgroundImage: 'url("/top2023.webp")',
          backgroundSize: "cover",
          backgroundPosition: { base: "52.5%", md: "center 0px" },
          backgroundRepeat: "no-repeat",
          filter: "brightness(90%)",
          zIndex: 0,
        }}
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bg: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      >
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
                お知らせ
              </Heading>
              <Box
                bgColor="white"
                border="1px solid #E2E8F0"
                borderRadius="2xl"
                boxShadow="md"
                p={{ base: 7, sm: 9 }}
                minH="100px"
              >
                {hasNotice ? (
                  <Box>
                    <Text fontSize={{ base: "xs", sm: "sm" }} mb={1}>
                      {notices[0].date}
                    </Text>
                    <Text fontSize={{ base: "lg", sm: "xl" }}>
                      {notices[0].title}
                    </Text>
                    <Divider my={3} borderColor="teal.400" borderWidth="2px" />
                    <Text
                      fontSize={{ base: "md", sm: "lg" }}
                      mt={6}
                      whiteSpace="pre-wrap"
                    >
                      {notices[0].content}
                    </Text>
                  </Box>
                ) : (
                  <Text
                    textAlign="center"
                    fontSize={{ base: "md", sm: "lg" }}
                    lineHeight="100px"
                  >
                    特にお知らせはありません。
                  </Text>
                )}
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
                  textUnderlineOffset="10px"
                  textDecorationColor="teal.400"
                  textDecorationThickness="5px"
                >
                  新着記事
                </Heading>
                <Box
                  bgColor="white"
                  border="1px solid #E2E8F0"
                  borderRadius="2xl"
                  boxShadow="md"
                  p={{ base: 4, sm: 6 }}
                >
                  {isLoading ? (
                    <Center minH={{ base: "294px", md: "600px" }}>
                      <Spinner size="xl" />
                    </Center>
                  ) : (newPosts ?? []).length > 0 ? (
                    <SimpleGrid minH={{ base: "294px", md: "600px" }}>
                      {newPosts?.map((post, index) => (
                        <ArticleCard
                          key={index}
                          post={post}
                          index={index}
                          boxShadow="none"
                          margin={
                            index % 2
                              ? { base: "6px 0 0 " }
                              : { base: " 0 0 6px " }
                          }
                        />
                      ))}
                      {newPosts?.length === 1 && (
                        <Box
                          h={{ md: "278.2px" }}
                          p={{ md: "1px" }}
                          mt={{ md: "6px" }}
                        ></Box>
                      )}
                    </SimpleGrid>
                  ) : (
                    <Box minH={{ base: "294px", md: "600px" }}>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "md", sm: "lg" }}
                        lineHeight={{ base: "294px", md: "600px" }}
                      >
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
