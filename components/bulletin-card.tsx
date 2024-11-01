import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import { Bulletin } from "../lib/types";

export default function BulletinCard({ bulletin }: { bulletin: Bulletin }) {
  return (
    <Card
      m={{ base: "6px 0", sm: "12px 10px" }}
      variant="outline"
      boxShadow="md"
    >
      <CardBody>
        <Image src={bulletin.image.url} alt="" />
      </CardBody>
      <CardFooter>
        <Stack>
          <Heading fontSize="2xl">
            {bulletin.title.slice(0, 8) === "D@NPEN会報"
              ? bulletin.title.split("").map((char, index) => (
                  <Text
                    as="span"
                    color={index === 9 ? bulletin.color : "inherit"}
                    key={index}
                  >
                    {char}
                  </Text>
                ))
              : bulletin.title}
          </Heading>
          <Text>{bulletin.publishedYear}</Text>
        </Stack>
      </CardFooter>
    </Card>
  );
}
