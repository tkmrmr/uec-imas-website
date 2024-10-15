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
import { TwitterTimelineEmbed } from "react-twitter-embed";
import ArticleCard from "../components/article-card";
import useNote from "../lib/use-note";

export default function Home() {
  const { noteData, isLoading } = useNote();
  const NewPosts = noteData?.pageEmbedLinks?.slice(0, 2);

  preload("/top.png", {
    as: "image",
  });

  return (
    <Box>
      {/* トップ */}
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
        <Box position="relative" zIndex={2} textAlign={"center"}>
          <Heading fontSize={{ base: "6xl", md: "8xl" }} color="white">
            D@NPEN
          </Heading>
          <Heading fontSize={{ base: "1xl", md: "2xl" }} color="white">
            電気通信大学アイドルマスター研究会
          </Heading>
        </Box>
      </Box>
      <Container maxW="1000px" flex="1">
        <Stack spacing={5}>
          <Box p={4}>
            <Heading textAlign="center" py={6}>
              News
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
          <SimpleGrid columns={[null, 1, 2]}>
            <Box p={4}>
              <Heading textAlign="center" py={6}>
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
                            ? "6px 0 0 0 "
                            : "0 6px 0 0"
                        }
                      />
                    ))}
                  </SimpleGrid>
                )}
              </Box>
            </Box>
            <Box p={4}>
              <Heading textAlign="center" py={6}>
                Twitter
              </Heading>
              <Box
                bgColor="white"
                border="1px solid #E2E8F0"
                borderRadius="2xl"
                boxShadow="lg"
                p={7}
              >
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="uec_imas"
                  options={{ height: 600 }}
                />
              </Box>
            </Box>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
