import { Box, Flex } from "@chakra-ui/react";
import Logo from "./logo";
import Menu from "./menu";

export default function Header() {
  return (
    <Box
      as="header"
      bg="whiteAlpha.50"
      h="100px"
      w="100%"
      position="fixed"
      top={0}
      zIndex="docked"
      p="0 100px"
    >
      <nav>
        <Flex
          justify="space-between"
          alignItems="center"
          maxWidth="1920px"
          margin="0 auto"
        >
          <Logo />
          <Menu />
        </Flex>
      </nav>
    </Box>
  );
}
