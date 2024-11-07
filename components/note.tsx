"use client";

import { Box, Text, Spinner, Center, SimpleGrid } from "@chakra-ui/react";
import ArticleCard from "./article-card";
import useNote from "../lib/use-note";

export default function Note() {
  const { noteData, isLoading } = useNote();
  const newPosts = noteData?.pageEmbedLinks?.slice(0, 2);

  return (
    <Box
      bgColor="white"
      outline="1px solid #E2E8F0"
      borderRadius="2xl"
      boxShadow="md"
      p={{ base: 4, sm: 6 }}
      _dark={{ bgColor: "gray.800", outline: "1px solid #3F444E" }}
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
              margin={index % 2 ? { base: "6px 0 0 " } : { base: " 0 0 6px " }}
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
  );
}
