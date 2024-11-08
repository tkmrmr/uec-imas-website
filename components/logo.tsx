import NextLink from "next/link";
import { Box, Link, Image } from "@chakra-ui/react";

export default function Logo({ isFiltered = false }: { isFiltered?: boolean }) {
  return (
    <Box>
      <Link as={NextLink} href="/">
        <Image
          src="/logo.webp"
          alt="icon"
          maxWidth="60px"
          w={{ base: "40px", md: "60px" }}
          filter={isFiltered ? "invert(100%)" : "none"}
          transition="filter 0.3s ease"
          _dark={{ filter: "invert(100%)" }}
        />
      </Link>
    </Box>
  );
}
