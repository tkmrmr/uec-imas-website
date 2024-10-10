import { Box, Flex } from "@chakra-ui/react";

export default function HeaderWrapper({
  children,
  bgColor = "white",
}: {
  children: React.ReactNode;
  bgColor: string;
}) {
  return (
    <Box
      as="header"
      bg={bgColor}
      h={{ base: "70px", md: "100px" }}
      w="100%"
      position="fixed"
      top={0}
      zIndex="docked"
      p={{ base: "0 10px", md: "0 40px" }}
      transition="background-color 0.3s ease"
    >
      <nav>
        <Flex
          justify="space-between"
          alignItems="center"
          maxWidth="1536px"
          margin="0 auto"
        >
          {children}
        </Flex>
      </nav>
    </Box>
  );
}
