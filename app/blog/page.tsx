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
// import { motion } from "framer-motion";
import useNote from "../../lib/use-note";

// const Motion = motion.div;

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
    <Box m={{ base: "40px 10px", sm: "40px" }}>
      {/* 記事表示部分 */}
      <SimpleGrid columns={[null, 1, 2]} mb="20px">
        {CurrentPosts?.map((post, index) => (
          // <Motion
          //   initial={{ y: 20, opacity: "0" }}
          //   whileInView={{ y: 0, opacity: 1 }}
          //   transition={{
          //     duration: 0.4,
          //   }}
          //   viewport={{ once: true }}
          // >
          <Card
            key={index}
            overflow="hidden"
            variant="outline"
            m="15px 12px"
            transition="transform 0.2s ease"
            boxShadow="lg"
            _hover={{ boxShadow: "xl" }}
          >
            <Box p="10px">
              <CardHeader height="6.2em" mb="-20px">
                <Heading fontSize="24px" noOfLines={2}>
                  {post.title}
                </Heading>
              </CardHeader>
              <CardBody>
                <Text color="gray.400" height="4.5em" noOfLines={3}>
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
          // </Motion>
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
