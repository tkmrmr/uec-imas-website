import { Box, Divider, Stack, Text } from "@chakra-ui/react";

type QA = {
  question: string;
  answer: string;
};

const QAList: QA[] = [
  {
    question: "どうすれば入会できますか？",
    answer:
      "上記フォーム、もしくは公式TwitterのDMまでご連絡ください。担当者よりDiscordサーバーのリンクをお送りしますので、サーバー参加で入会とみなします。",
  },
  {
    question: "新入生ではないのですが、入会可能ですか？",
    answer:
      "可能です。学部2年以降に加入した会員も多くおりますので、ご安心ください。",
  },
  {
    question: "新歓の時期以外も入会可能ですか？",
    answer: "可能です。新規入会者はいつでも歓迎です。",
  },
  {
    question: "電気通信大学以外の大学に在籍していますが、入会可能ですか？",
    answer: "可能です。なお、現在他大学生は在籍していません。",
  },
  {
    question: "修士・博士も入会できますか？",
    answer:
      "可能です。現在、学部1年から修士1年まで幅広い学年の会員が活動しています。",
  },
  {
    question: "他のサークルとの掛け持ちは可能ですか？",
    answer:
      "可能です。部会の頻度がそこまで高くないので、掛け持ちしやすいと思われます。",
  },
  {
    question: "アイドルマスターに興味はあるのですが、ついていけるか不安です。",
    answer:
      "同じ状況だった会員も今では複数のブランドに手を出すまでになっているので、大丈夫です。",
  },
  {
    question: "部室はありますか？",
    answer:
      "部室はありません。大学公認を得ると部室をもらえるため、申請に向けて動いています。現在、部会は調布市文化会館たづくりの一室を借りて行っています。",
  },
];

export default function QA() {
  return (
    <Box
      mx={{ base: 0, md: 7 }}
      my={{ base: 3, md: 6 }}
      fontSize={{ base: "md", sm: "lg" }}
    >
      <Stack>
        {QAList.map((qa, index) => (
          <Box key={index}>
            <Box as="dl" pb="16px" pt="8px">
              <Text
                as="dt"
                _before={{
                  content: "'Q '",
                  marginRight: ".7em",
                  color: "blue.400",
                  fontWeight: "600",
                }}
                display="flex"
                mb="0.3em"
              >
                {qa.question}
              </Text>
              <Text
                as="dd"
                _before={{
                  content: "'A '",
                  marginRight: ".7em",
                  color: "red.400",
                  fontWeight: "600",
                  px: "0.1em",
                }}
                display="flex"
              >
                {qa.answer}
              </Text>
            </Box>
            <Divider />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
