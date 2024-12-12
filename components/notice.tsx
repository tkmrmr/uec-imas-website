import { Box, Text, Divider, Image, Center } from "@chakra-ui/react";
import dayjs from "dayjs";
import { client } from "../lib/client";

type Notice = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  title: string;
  content: string;
  image?: {
    url: string;
    height: number;
    width: number;
  };
};

export default async function Notice() {
  const data = await client.get({
    customRequestInit: {
      next: { tags: ["notices"] },
    },
    endpoint: "notices",
    queries: { limit: 1, orders: "-publishedAt" },
  });
  const notice: Notice = data.contents[0];

  return (
    <Box
      bgColor="white"
      outline="1px solid #E2E8F0"
      borderRadius="2xl"
      boxShadow="md"
      p={{ base: 7, sm: 9 }}
      minH="100px"
      _dark={{ bgColor: "gray.800", outline: "1px solid #3F444E" }}
    >
      {data.totalCount ? (
        <Box>
          <Text fontSize={{ base: "xs", sm: "sm" }} mb={1}>
            {dayjs(notice.publishedAt).format("YYYY/MM/DD")}
          </Text>
          <Text fontSize={{ base: "lg", sm: "xl" }}>{notice.title}</Text>
          <Divider
            my={3}
            borderColor="teal.400"
            borderWidth="2px"
            _dark={{ borderColor: "teal.300" }}
          />
          <Text
            fontSize={{ base: "md", sm: "lg" }}
            mt={6}
            whiteSpace="pre-wrap"
          >
            {notice.content}
          </Text>
          <Center mt={5}>
            <Image src={notice.image?.url} alt="" maxH="624px" />
          </Center>
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
  );
}
