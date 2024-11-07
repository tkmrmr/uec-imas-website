import { Box, Center, Heading } from "@chakra-ui/react";

export default function PageHeader({ pathname }: { pathname: string }) {
  return (
    <Box
      h={{ base: "120px", sm: "160px" }}
      w="100%"
      mt={{ base: "70px", sm: "100px" }}
    >
      <Center>
        <Heading
          lineHeight={{ base: "120px", sm: "160px" }}
          fontSize={{ base: "36px", sm: "48px" }}
          textTransform="uppercase"
          textDecor="underline"
          textUnderlineOffset="12px"
          textDecorationColor="teal.400"
          textDecorationThickness="7px"
          mt="10px"
          _dark={{ textDecorationColor: "teal.300" }}
        >
          {pathname}
        </Heading>
      </Center>
    </Box>
  );
}
