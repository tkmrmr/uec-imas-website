import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import BulletinCard from "../../components/bulletin-card";
import { Bulletin } from "../../lib/types";
import { client } from "../../lib/client";

export default async function Works() {
  const data = await client.get({
    customRequestInit: {
      next: { tags: ["bulletins"] },
    },
    endpoint: "bulletins",
    queries: { limit: 100, orders: "-createdAt" },
  });
  const bulletins: Bulletin[] = data.contents;

  return (
    <Box m={{ base: "40px 0", md: "40px 30px" }}>
      <Text
        mb="30px"
        px={{ base: 7, sm: 10 }}
        fontSize={{ base: "md", sm: "lg" }}
      >
        D@NPENでは、創作活動として毎年冬のコミックマーケットで（2017年のみ夏のコミックマーケットでも）会報を発行・頒布しています。
        <br />
        また、毎年11月に行われる電気通信大学の大学祭「調布祭」でも過去に発行した会報を頒布しています。
        <br />
        冬のコミックマーケット、もしくは調布祭にお越しの際はぜひスペースまで足を運んでみてください。
      </Text>
      <SimpleGrid columns={[null, 1, 2]} mb="20px">
        {bulletins.map((bulletin, index) => (
          <BulletinCard key={index} bulletin={bulletin} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
