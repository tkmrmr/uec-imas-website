import NextLink from "next/link";
import { Box, Link, Image } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Box
      m={{ base: "0 10px", md: "0 20px" }}
      p={{ base: "0 5px", md: "0 10px" }}
    >
      <Link as={NextLink} href="/">
        <Image
          src="/icon.jpg"
          alt="icon"
          maxWidth="60px"
          w={{ base: "50px", md: "60px" }}
          borderRadius="full"
        />
      </Link>
    </Box>
  );
}
