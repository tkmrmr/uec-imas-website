import { Box, Center } from "@chakra-ui/react";

export default function PageHeader({ pathname }: { pathname: string }) {
  return (
    <Box
      h={{ base: "100px", md: "140px" }}
      w="100%"
      bgColor="teal.400"
      color="white"
      mt={{ base: "70px", md: "100px" }}
    >
      <Center>
        <Box
          lineHeight={{ base: "100px", md: "140px" }}
          fontSize={{ base: "36px", md: "48px" }}
          textTransform="uppercase"
          textDecor="underline"
          textUnderlineOffset="8px"
        >
          {pathname}
        </Box>
      </Center>
    </Box>
  );
}
