import NextLink from "next/link";
import { Box, Heading, Center, Link, Button, Flex } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Box m={{ base: "40px 10px", sm: "40px" }}>
      <Center height="50vh">
        <Flex direction="column" align="center" gap="7">
          <Heading>ページが見つかりません</Heading>
          <Link
            as={NextLink}
            href="/"
            fontWeight="600"
            fontSize={{ md: "13px", lg: "15px", xl: "17px" }}
          >
            <Button bgColor="teal.400" _hover={{ bgColor: "teal.500" }}>
              トップページに戻る
            </Button>
          </Link>
        </Flex>
      </Center>
    </Box>
  );
}
