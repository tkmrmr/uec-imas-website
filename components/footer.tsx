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
          &copy; 2024 D@NPEN
        </Text>
      </Center>
    </Box>
  );
}
