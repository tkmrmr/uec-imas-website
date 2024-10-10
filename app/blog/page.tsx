"use client";

import {
  Box,
  Flex,
  Card,
  CardHeader,
  CardFooter,
  AspectRatio,
  Spinner,
  Center,
} from "@chakra-ui/react";
import useNote from "../../lib/use-note";

export default function Blog() {
  const { noteData, isLoading } = useNote();
  if (isLoading) {
    return (
      <Box>
        <Center height="50vh">
          <Spinner size="xl" />
        </Center>
      </Box>
    );
  }
  return (
    <Box>
      <Flex wrap="wrap" p="30px 0" alignItems="center">
        {noteData?.pageEmbedLinks?.map((post, index) => (
          <AspectRatio
            key={index}
            ratio={9 / 5}
            w={{ base: "100%", md: "45%" }}
            m="15px"
          >
            <Card as="a" href={post.link} bgColor="teal.300">
              <CardHeader>{post.title}</CardHeader>
              <CardFooter>{post.date}</CardFooter>
            </Card>
          </AspectRatio>
        ))}
      </Flex>
    </Box>
  );
}
