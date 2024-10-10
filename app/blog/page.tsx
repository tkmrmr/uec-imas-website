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
  Image,
  Icon,
  Divider,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { CalendarIcon, ArrowForwardIcon } from "@chakra-ui/icons";
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
      <Flex wrap="wrap" p="30px 0">
        {CurrentPosts?.map((post, index) => (
          <Card
            as="a"
            href={post.link}
            overflow="hidden"
            variant="outline"
            key={index}
            w={{ base: "100%", md: "45%" }}
            m="15px"
            role="group"
            _hover={{ boxShadow: "lg" }}
          >
            <Box p="10px">
              <CardHeader>
                <Flex justify="space-between">
                  <Image src="/note_logo.png" alt="" w="15%" />
                  <Flex alignItems="center" color="gray.500">
                    <Icon as={CalendarIcon} m="4px" />
                    {post.date}
                  </Flex>
                </Flex>
              </CardHeader>
              <CardBody>
                <Heading fontSize="24px">{post.title}</Heading>
              </CardBody>
            </Box>
            <Divider />
            <CardFooter>
              <Flex alignItems="center" justify="space-between" w="100%">
                <Text>続きを読む</Text>
                <Icon
                  as={ArrowForwardIcon}
                  fontSize="24px"
                  _groupHover={{ transform: "translateX(4px)" }}
                />
              </Flex>
            </CardFooter>
          </Card>
        ))}
      </Flex>

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
