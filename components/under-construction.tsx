import NextLink from "next/link";
import { Box, Heading, Center, Link, Button, Flex } from "@chakra-ui/react";

export default function UnderConstruction() {
  return (
    <Box>
      <Center height="50vh">
        <Flex direction="column" align="center" gap="7">
          <Heading>このページは準備中です</Heading>
          <Link
            as={NextLink}
            href="/"
            fontWeight="600"
            fontSize={{ md: "13px", lg: "15px", xl: "17px" }}
          >
            <Button bgColor="orange.400" _hover={{ bgColor: "orange.500" }}>
              トップページに戻る
            </Button>
          </Link>
        </Flex>
      </Center>
    </Box>
  );
}
