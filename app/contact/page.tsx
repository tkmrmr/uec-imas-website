"use client";

import { Box, Stack, Heading, Text, Link } from "@chakra-ui/react";
import QA from "../../components/qa";
import Form from "../../components/form";

export default function Contact() {
  return (
    <Box m="40px">
      <Text pb="30px">
        D@NPENでは、通年で新規入会者を募集しています。
        <br />
        お問い合わせ・入会希望は以下のフォーム、もしくは
        <Link href="https://twitter.com/uec_imas" color="teal.400">
          公式Twitterアカウント
        </Link>
        のDMまでお願いいたします。
      </Text>
      <Stack spacing={5}>
        <Box
          bgColor="white"
          border="1px solid #E2E8F0"
          borderRadius="2xl"
          boxShadow="lg"
          p="30px"
        >
          <Heading py="5px" pb="8px">
            お問い合わせ
          </Heading>
          <Form />
        </Box>
        <Box
          bgColor="white"
          border="1px solid #E2E8F0"
          borderRadius="2xl"
          boxShadow="lg"
          p="30px"
        >
          <Heading py="5px">Q&A</Heading>
          <QA />
        </Box>
      </Stack>
    </Box>
  );
}
