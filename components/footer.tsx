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
        <Stack gap={14} h="100%" alignItems="center" justifyContent="center">
          <Flex
            gap={{ base: 10, md: 16 }}
            wrap="wrap"
            rowGap={5}
            justifyContent="center"
          >
            <Link href="/" _hover={{ textDecor: "none", color: "gray.400" }}>
              トップ
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
              ブログ
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
              制作物
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
              旧サイト
              <Icon as={ExternalLinkIcon} pl="2px" boxSize="20px" mt="2px" />
            </Flex>
          </Link>
          <Flex gap={10}>
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
      <Box h="120px">
        <Center>
          <Text color="white" lineHeight="120px">
            &copy; 2024 D@NPEN
          </Text>
        </Center>
      </Box>
    </Box>
  );
}
