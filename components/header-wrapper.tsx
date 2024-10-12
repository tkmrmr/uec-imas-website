import { Box, Flex } from "@chakra-ui/react";

export default function HeaderWrapper({
  children,
  bgColor = "whiteAlpha.800",
  boxShadow = "md",
}: {
  children: React.ReactNode;
  bgColor: string;
  boxShadow: string;
}) {
  return (
    <Box
      as="header"
      bg={bgColor}
      backdropFilter="blur(4px)"
      h={{ base: "70px", sm: "100px" }}
      w="100%"
      position="fixed"
      top={0}
      zIndex="docked"
      p={{ base: "0 10px", md: "0 40px" }}
      transition="background-color 0.3s ease, box-shadow 0.3s ease"
      boxShadow={boxShadow}
    >
      <Flex
        justify="space-between"
        alignItems="center"
        maxWidth="1536px"
        margin="0 auto"
      >
        {children}
      </Flex>
    </Box>
  );
}
