import { Box, Center, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      as="footer"
      w="100%"
      h={{ base: "70px", md: "100px" }}
      // borderTop={"1px solid #eee"}
    >
      <Center>
        <Text lineHeight={{ base: "70px", md: "100px" }}>
          &copy; 電気通信大学アイドルマスター研究会
        </Text>
      </Center>
    </Box>
  );
}
