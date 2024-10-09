import NextLink from "next/link";
import { Box, Link, Image } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Box m="0 20px" p="0 10px">
      <Link as={NextLink} href="/">
        <Image src="/icon.jpg" alt="icon" maxWidth="60px" borderRadius="full" />
      </Link>
    </Box>
  );
}
