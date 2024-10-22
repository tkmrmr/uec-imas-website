import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import BulletinCard from "../../components/bulletin-card";
import { bulletins } from "../../lib/bulletins";

export default function Works() {
  return (
    <Box m={{ base: "40px 0", md: "40px 30px" }}>
      <Text
        mb="30px"
        px={{ base: 8, sm: 10 }}
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
