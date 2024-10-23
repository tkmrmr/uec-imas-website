import NextLink from "next/link";
import { Box, Link, Image } from "@chakra-ui/react";

export default function Logo({ isFiltered = false }: { isFiltered?: boolean }) {
  return (
    <Box
      m={{ base: "0 10px", md: "0 20px" }}
      p={{ base: "0 5px", md: "0 10px" }}
    >
      <Link as={NextLink} href="/">
        <Image
          src="/logo.webp"
          alt="icon"
          maxWidth="60px"
          w={{ base: "40px", md: "60px" }}
          filter={isFiltered ? "invert(100%)" : "none"}
          transition="filter 0.3s ease"
        />
      </Link>
    </Box>
  );
}
