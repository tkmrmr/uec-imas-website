import {
  Box,
  Center,
  Text,
  Divider,
  Flex,
  Link,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Twitter, Rss } from "lucide-react";

export default function Footer() {
  return (
    <Box
      as="footer"
      w="100%"
      mt="4rem"
      p="15px"
      borderTop="1px solid"
      color="white"
      bgColor="gray.700"
    >
      <Box h="350px" py="12px">
        <Stack align="center" gap={14} justify="center" h="100%">
          <Flex gap={10} wrap="wrap" rowGap={7} justify="center">
            <Link href="/" _hover={{ textDecor: "none" }}>
              ホーム
            </Link>
            <Link href="/about" _hover={{ textDecor: "none" }}>
              D@NPENについて
            </Link>
            <Link href="/blog" _hover={{ textDecor: "none" }}>
              ブログ
            </Link>
            <Link
              href=""
              w="100%"
              display={{ base: "block", md: "none" }}
            ></Link>
            <Link href="/works" _hover={{ textDecor: "none" }}>
              制作物
            </Link>
            <Link href="/contact" _hover={{ textDecor: "none" }}>
              お問い合わせ
            </Link>
          </Flex>
          <Link
            href="https://uec-imas.tumblr.com"
            _hover={{ textDecor: "none" }}
          >
            <Flex>
              <Text>旧サイト</Text>{" "}
              <Icon as={ExternalLinkIcon} pl="2px" boxSize="20px" />
            </Flex>
          </Link>
          <Flex gap={10} justify="center">
            <Link href="https://twitter.com/uec_imas">
              <Twitter size={48} />
            </Link>
            <Link href="">
              <Rss size={48} />
            </Link>
          </Flex>
        </Stack>
      </Box>
      <Divider colorScheme="gray" />
      <Box
        h={{ base: "80px", md: "110px" }}
        // borderTop={"1px solid #eee"}
      >
        <Center>
          <Text
            lineHeight={{ base: "80px", md: "100px" }}
            fontSize={{ base: "14px", md: "16px" }}
          >
            &copy; 2024 D@NPEN
          </Text>
        </Center>
      </Box>
    </Box>
  );
}
