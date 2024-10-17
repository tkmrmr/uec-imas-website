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
      px={{ base: "10px", sm: "20px" }}
      borderTop="1px solid"
      color="white"
      bgColor="gray.700"
    >
      <Box h={{ base: "400px", sm: "350px" }} py="12px">
        <Stack align="center" gap={14} justify="center" h="100%">
          <Flex gap={10} wrap="wrap" rowGap={5} justify="center">
            <Link href="/" _hover={{ textDecor: "none", color: "gray.400" }}>
              ホーム
            </Link>
            <Link
              href="/about"
              _hover={{ textDecor: "none", color: "gray.400" }}
            >
              D@NPENについて
            </Link>
            <Link
              href="/blog"
              _hover={{ textDecor: "none", color: "gray.400" }}
            >
              ブログ&emsp;
            </Link>
            <Link
              href=""
              w="100%"
              display={{ base: "block", md: "none" }}
            ></Link>
            <Link
              href="/works"
              _hover={{ textDecor: "none", color: "gray.400" }}
            >
              制作物&emsp;
            </Link>
            <Link
              href="/contact"
              _hover={{ textDecor: "none", color: "gray.400" }}
            >
              お問い合わせ
            </Link>
          </Flex>
          <Link
            href="https://uec-imas.tumblr.com"
            _hover={{ textDecor: "none", color: "gray.400" }}
          >
            <Flex>
              <Text>旧サイト</Text>{" "}
              <Icon as={ExternalLinkIcon} pl="2px" boxSize="20px" mt="2px" />
            </Flex>
          </Link>
          <Flex gap={10} justify="center">
            <Link
              href="https://twitter.com/uec_imas"
              _hover={{ color: "gray.400" }}
            >
              <Twitter size={48} />
            </Link>
            <Link href="" _hover={{ color: "gray.400" }}>
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
          <Text lineHeight={{ base: "80px", md: "100px" }}>
            &copy; 2024 D@NPEN
          </Text>
        </Center>
      </Box>
    </Box>
  );
}
