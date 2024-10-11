import { Box, Center, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      as="footer"
      w="100%"
      h={{ base: "80px", md: "110px" }}
      bgColor="gray.100"
      // borderTop={"1px solid #eee"}
      mt="4rem"
    >
      <Center>
        <Text
          lineHeight={{ base: "80px", md: "100px" }}
          color="gray.600"
          fontSize={{ base: "14px", md: "16px" }}
        >
          &copy; 2024 D@NPEN
        </Text>
      </Center>
    </Box>
  );
}
