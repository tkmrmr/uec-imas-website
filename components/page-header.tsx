import { Box, Center, Heading } from "@chakra-ui/react";

export default function PageHeader({ pathname }: { pathname: string }) {
  return (
    <Box
      h={{ base: "100px", md: "140px" }}
      w="100%"
      mt={{ base: "70px", md: "100px" }}
    >
      <Center>
        <Heading
          lineHeight={{ base: "100px", md: "140px" }}
          fontSize={{ base: "36px", md: "48px" }}
          textTransform="uppercase"
          textDecor="underline"
          color="gray.900"
          textUnderlineOffset="15px"
          textDecorationColor="teal.400"
        >
          {pathname}
        </Heading>
      </Center>
    </Box>
  );
}
