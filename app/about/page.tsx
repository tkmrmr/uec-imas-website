import { Box, Text, Heading, Stack, Link } from "@chakra-ui/react";

export default function About() {
  return (
    <Box m={{ base: "40px 0", md: "40px 30px" }}>
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
            D@NPENについて
          </Heading>
          <Text
            whiteSpace="pre-line"
            mt="1.5rem"
            mx={{ base: 0, md: 7 }}
            my={{ base: 3, md: 6 }}
            fontSize={{ base: "md", md: "lg" }}
          >
            D@NPEN（電気通信大学アイドルマスター研究会）は、電気通信大学のアイマスP有志により結成された学友会公認サークルです。
            <br />
            2015年頃から学内の一部Pたちの間で話が持ち寄られ、2016年8月から本格的に活動を開始しました。2019年度から学友会準公認、2023年度から学友会公認として活動しています。
            <br />
            <br />
            D@NPENは、学内の有志よりMOIW2015にフラワースタンドを贈ったことをきっかけとして結成されました。
            <br />
            当時から学内のPは分散して活動しており、一堂に会して活動することがあまり多くはありませんでした。また、TwitterやLINEなど、SNSとメッセージツールの普及で交流の幅が広がっても、ライブの感想やアイマスに対する熱意を語り合うには貧弱な環境でした。
            <br />
            <br />
            同僚と語りたいことはあるのに語る場所がない。自分を表現したいのにする場所がない。他の同僚と話したいけれど勇気がない。自分が成し得たことを残しておきたい。そんなアイマスPたちが集まれる場所として、D@NPENは存在してほしいと願っております。
          </Text>
          <Text textAlign="right">
            （
            <Link href="https://uec-imas.tumblr.com/about" color="teal.400">
              旧サイト
            </Link>
            より改変）
          </Text>
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
            活動内容
          </Heading>
          <Box
            mx={{ base: 0, md: 7 }}
            my={{ base: 3, md: 6 }}
            fontSize={{ base: "md", md: "lg" }}
          >
            <Box as="dl">
              <Stack gap={3}>
                <Box>
                  <Text
                    as="dt"
                    fontWeight="bold"
                    fontSize={{ base: "18px", md: "22px" }}
                    marginBottom="8px"
                  >
                    部会（月1回）
                  </Text>
                  <Text as="dd">
                    月に1回、調布市文化会館たづくりの一室を借りて、アイマスに関する情報交換や、楽曲・ライブの鑑賞会、ライブの感想共有、雑談など雑多な活動を行っています。
                  </Text>
                </Box>
                <Box>
                  <Text
                    as="dt"
                    fontWeight="bold"
                    fontSize={{ base: "18px", md: "22px" }}
                    marginBottom="8px"
                  >
                    会報の発行・頒布
                  </Text>
                  <Text as="dd">
                    主に毎年冬開催のコミックマーケットで会員の有志が書いた記事をまとめた会報を頒布しています。また、調布祭（大学祭）での頒布も行っています。
                  </Text>
                </Box>
                <Box>
                  <Text
                    as="dt"
                    fontWeight="bold"
                    fontSize={{ base: "18px", md: "22px" }}
                    marginBottom="8px"
                  >
                    調布祭（大学祭）への企画参加
                  </Text>
                  <Text as="dd">
                    毎年11月に開催される電気通信大学の大学祭「調布祭」において、様々な企画を行っています。
                    <br />
                    近年はバーチャルライブ研究会、電々。通信とともに「ニコニコ御三家調会議」を開催しています。
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Box>
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
            会費
          </Heading>
          <Text
            mx={{ base: 0, md: 7 }}
            my={{ base: 3, md: 6 }}
            fontSize={{ base: "md", md: "lg" }}
          >
            会費はかかりません。
            <br />
            ただし、部会参加時には会場の利用料の一部を徴収する場合があります。
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
