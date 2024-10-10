"use client";

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
} from "@chakra-ui/react";
import { CalendarIcon, ArrowForwardIcon } from "@chakra-ui/icons";
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
      <Flex wrap="wrap" p="30px 0">
        {noteData?.pageEmbedLinks?.map((post, index) => (
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
    </Box>
  );
}
