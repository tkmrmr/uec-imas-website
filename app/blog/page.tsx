"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  Spinner,
  Center,
  Button,
  SimpleGrid,
  Text,
  Container,
} from "@chakra-ui/react";
import PageHeader from "../../components/page-title";
import ArticleCard from "../../components/article-card";
import useNote from "../../lib/use-note";

export default function Blog() {
  const { noteData, isLoading } = useNote();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  if (isLoading) {
    return (
      <Box>
        <PageHeader pathname="blog" />
        <Container maxW="1100px">
          <Box>
            <Center height="50vh">
              <Spinner size="xl" />
            </Center>
          </Box>
        </Container>
      </Box>
    );
  }

  if ((noteData?.pageEmbedLinks ?? []).length === 0) {
    return (
      <Box>
        <PageHeader pathname="blog" />
        <Container maxW="1100px">
          <Box>
            <Center height="50vh">
              <Text fontSize="xl">記事はまだありません。</Text>
            </Center>
          </Box>
        </Container>
      </Box>
    );
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const CurrentPosts = noteData?.pageEmbedLinks?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Box>
      <PageHeader pathname="blog" />
      <Container maxW="1100px">
        <Box m={{ base: "40px 0", sm: "40px 30px" }}>
          {/* 記事表示部分 */}
          <SimpleGrid columns={[null, 1, 2]} mb="20px">
            {CurrentPosts?.map((post, index) => (
              <ArticleCard
                key={index}
                post={post}
                index={index}
                boxShadow="md"
                margin={{ base: "6px 0", sm: "12px 10px" }}
              />
            ))}
          </SimpleGrid>

          {/* ページネーション */}
          <Flex justify="center">
            {[
              ...Array(Math.ceil((noteData?.totalCount || 0) / postsPerPage)),
            ].map((_, num) => (
              <Button
                key={num}
                m="10px 5px 5px"
                p="5px 10px"
                bg={currentPage === num + 1 ? "orange.400" : "gray.300"}
                color="white"
                borderRadius="full"
                onClick={() => paginate(num + 1)}
              >
                {num + 1}
              </Button>
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
