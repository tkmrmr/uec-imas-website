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
          color="gray.900"
          textUnderlineOffset="17px"
          textDecorationColor="teal.400"
          textDecorationThickness="5px"
          mt="10px"
        >
          {pathname}
        </Heading>
      </Center>
    </Box>
  );
}
