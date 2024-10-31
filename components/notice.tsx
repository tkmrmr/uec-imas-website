import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import dayjs from "dayjs";
import { client } from "../lib/client";

export default async function Notice() {
  const data = await client.get({
    // customRequestInit: {
    //   cache: "no-store",
    // },
    endpoint: "notices",
    queries: { limit: 1, orders: "-publishedAt" },
  });

  return (
    <Box pb={5}>
      <Heading
        textAlign="center"
        pt={6}
        pb={12}
        textDecor="underline"
        textUnderlineOffset="10px"
        textDecorationColor="teal.400"
        textDecorationThickness="5px"
      >
        お知らせ
      </Heading>
      <Box
        bgColor="white"
        border="1px solid #E2E8F0"
        borderRadius="2xl"
        boxShadow="md"
        p={{ base: 7, sm: 9 }}
        minH="100px"
      >
        {data.totalCount ? (
          <Box>
            <Text fontSize={{ base: "xs", sm: "sm" }} mb={1}>
              {dayjs(data.contents[0].publishedAt).format("YYYY/MM/DD")}
            </Text>
            <Text fontSize={{ base: "lg", sm: "xl" }}>
              {data.contents[0].title}
            </Text>
            <Divider my={3} borderColor="teal.400" borderWidth="2px" />
            <Text
              fontSize={{ base: "md", sm: "lg" }}
              mt={6}
              whiteSpace="pre-wrap"
            >
              {data.contents[0].content}
            </Text>
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
    </Box>
  );
}
