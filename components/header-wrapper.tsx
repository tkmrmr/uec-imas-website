import { Box, Flex } from "@chakra-ui/react";

export default function HeaderWrapper({
  children,
  bgColor = "whiteAlpha.800",
  darkBgColor = "blackAlpha.400",
  boxShadow = "md",
  isMovingHeader = true,
  isBlur = true,
  isClear = false,
}: {
  children: React.ReactNode;
  bgColor?: string;
  darkBgColor?: string;
  boxShadow?: string;
  isMovingHeader?: boolean;
  isBlur?: boolean;
  isClear?: boolean;
}) {
  return (
    <Box
      as="header"
      bg={bgColor}
      backdropFilter={isBlur ? "blur(5px)" : "none"}
      h={{ base: "70px", sm: "100px" }}
      w="100%"
      position={isMovingHeader ? "fixed" : "absolute"}
      top={0}
      zIndex="docked"
      p={{ base: "0 20px", md: "0 40px", lg: "0 60px" }}
      transition="opacity 0.2s ease-out"
      boxShadow={boxShadow}
      opacity={isClear ? 0 : 1}
      _dark={{ bgColor: darkBgColor }}
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
