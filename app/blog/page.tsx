"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Spinner,
  Center,
  Icon,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import { EditIcon, ChevronRightIcon } from "@chakra-ui/icons";
import useNote from "../../lib/use-note";

export default function Blog() {
  const { noteData, isLoading } = useNote();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  if (isLoading) {
    return (
      <Box>
        <Center height="50vh">
          <Spinner size="xl" />
        </Center>
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
      {/* 記事表示部分 */}
      {/* <Flex wrap="wrap" p="30px 0" justify="center"> */}
      <SimpleGrid columns={[null, 1, 2]} p="30px 0">
        {CurrentPosts?.map((post, index) => (
          <Card
            overflow="hidden"
            variant="outline"
            key={index}
            m="15px 12px"
            transition="transform 0.2s ease"
            _hover={{ boxShadow: "lg" }}
          >
            <Box p="10px">
              <CardHeader height="6.2em">
                <Heading fontSize="24px" noOfLines={2}>
                  {post.title}
                </Heading>
              </CardHeader>
              <CardBody>
                <Text color="gray.400" noOfLines={3}>
                  {post.contentSnippet}
                </Text>
              </CardBody>
            </Box>
            <Divider />
            <CardFooter>
              <Flex alignItems="center" justify="space-between" w="100%">
                <Flex color="gray.500">
                  <Icon as={EditIcon} m="4px" />
                  {post.date}
                </Flex>
                <Flex
                  as="a"
                  href={post.link}
                  alignItems="center"
                  transition="transform 0.2s ease"
                  _hover={{
                    transform: "scale(1.05)",
                    textDecoration: "underline",
                  }}
                >
                  <Text>続きを読む</Text>
                  <Icon as={ChevronRightIcon} mt="4px" boxSize="22px" />
                </Flex>
              </Flex>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>

      {/* ページネーション */}
      <Flex justify="center">
        {[...Array(Math.ceil((noteData?.totalCount || 0) / postsPerPage))].map(
          (_, num) => (
            <Button
              key={num}
              m="5px"
              p="5px 10px"
              bg={currentPage === num + 1 ? "teal.400" : "gray.300"}
              color="white"
              borderRadius="full"
              onClick={() => paginate(num + 1)}
            >
              {num + 1}
            </Button>
          )
        )}
      </Flex>
    </Box>
  );
}
