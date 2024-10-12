"use client";

import { Box, Text, Heading, Stack, chakra } from "@chakra-ui/react";

const Dl = chakra("dl");
const Dt = chakra("dt");
const Dd = chakra("dd");

export default function About() {
  return (
    <Box m="40px">
      <Stack spacing={5}>
        <Box
          bgColor="white"
          border="1px solid #E2E8F0"
          borderRadius="2xl"
          boxShadow="lg"
          p="30px"
        >
          <Heading>D@NPENについて</Heading>
          <Text whiteSpace="pre-line" mt="1.5rem">
            {`D@NPEN（電気通信大学アイドルマスター研究会）は、電気通信大学のプロデューサー有志により結成された学友会公認サークルです。

              2015年頃から学内の一部プロデューサーたちの間で話が持ち寄られ、2016年8月から本格的に活動を開始しました。2019年度から学友会準公認、2023年度から学友会公認として活動しています。

              MOIW2015へ電通大P一同よりフラワースタンドを贈ったことが結成のきっかけです。
              当時から、学内のPは分散して活動しており、一堂に会して活動することがあまり多くはありませんでした。また、TwitterやLINEなど、SNSとメッセージツールの普及で交流の幅が広がっても、ライブの感想やアイマスに対する熱意を語り合うには貧弱な環境でした。

              同僚と語りたいことはあるのに語る場所がない。自分を表現したいのにする場所がない。他の同僚と話したいけど勇気がない。自分が成し得たことを残しておきたい。そんなPたちが集まれる場所として、D@NPENは存在してほしいと願っております。`}
          </Text>
        </Box>
        <Box
          bgColor="white"
          border="1px solid #E2E8F0"
          borderRadius="2xl"
          boxShadow="lg"
          p="30px"
        >
          <Heading>活動内容</Heading>
          <Dl mt="1.5rem">
            <Dt fontWeight="bold" my={2}>
              部会（月1回）
            </Dt>
            <Dd>
              月に1回、調布市文化会館たづくりの一室を借りて、アイマスに関する情報交換や、楽曲・ライブの鑑賞会、ライブの感想共有、雑談など雑多な活動を行っています。
            </Dd>
            <Dt fontWeight="bold" my={2}>
              会報の発行・頒布
            </Dt>
            <Dd>
              主に毎年冬開催のコミックマーケットで会員の有志が書いた記事をまとめた会報を頒布しています。また、調布祭（大学祭）での頒布も行っています。
            </Dd>
            <Dt fontWeight="bold" my={2}>
              調布祭（大学祭）への企画参加
            </Dt>
            <Dd>
              毎年11月に開催される電気通信大学の大学祭「調布祭」において、様々な企画を行っています。
              <br />
              近年はバーチャルライブ研究会、電々。通信とともに「ニコニコ御三家調会議」を開催しています。
            </Dd>
          </Dl>
        </Box>
        <Box
          bgColor="white"
          border="1px solid #E2E8F0"
          borderRadius="2xl"
          boxShadow="lg"
          p="30px"
        >
          <Heading>会費</Heading>
          <Text mt="1.5rem">
            会費はかかりません。ただし、部会参加時には会場の利用料の一部を徴収する場合があります。
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
