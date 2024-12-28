import { Box, Stack, Heading, Text, Link, Container } from "@chakra-ui/react";
import PageHeader from "../../components/page-title";
import QA from "../../components/qa";
import Form from "../../components/form";

export default function Contact() {
  return (
    <Box>
      <PageHeader pathname="contact" />
      <Container maxW="1100px">
        <Box m={{ base: "40px 0", md: "40px 30px" }}>
          <Text
            pb="30px"
            px={{ base: 7, sm: 10 }}
            fontSize={{ base: "md", sm: "lg" }}
          >
            D@NPENでは、通年で新規入会者を募集しています。
            <br />
            お問い合わせ・入会希望は以下のフォーム、もしくは
            <Link href="https://twitter.com/uec_imas" color="orange.400">
              公式Twitterアカウント
            </Link>
            のDMまでお願いいたします。
          </Text>
          <Stack spacing={5}>
            <Box
              bgColor="white"
              outline="1px solid #E2E8F0"
              borderRadius="2xl"
              boxShadow="md"
              p={{ base: 7, sm: 10 }}
              _dark={{ bgColor: "gray.800", outline: "1px solid #3F444E" }}
            >
              <Heading fontSize={{ base: "28px", sm: "30px", md: "36px" }}>
                お問い合わせ
              </Heading>
              <Form />
            </Box>
            <Box
              bgColor="white"
              outline="1px solid #E2E8F0"
              borderRadius="2xl"
              boxShadow="md"
              p={{ base: 7, sm: 10 }}
              _dark={{ bgColor: "gray.800", outline: "1px solid #3F444E" }}
            >
              <Heading fontSize={{ base: "28px", sm: "30px", md: "36px" }}>
                Q&A
              </Heading>
              <QA />
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
