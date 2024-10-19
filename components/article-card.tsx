import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Icon,
  Text,
  Heading,
} from "@chakra-ui/react";
import { EditIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import type { Post } from "../lib/types";

export default function ArticleCard({
  post,
  index,
  boxShadow,
  margin,
}: {
  post: Post;
  index: number;
  boxShadow: string;
  margin: { base?: string; sm?: string; md?: string };
}) {
  return (
    <Card
      key={index}
      overflow="hidden"
      variant="outline"
      m={margin}
      transition="transform 0.2s ease"
      boxShadow={boxShadow}
      _hover={{ boxShadow: "lg" }}
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
            <Icon as={ExternalLinkIcon} pl="2px" boxSize="20px" />
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  );
}
