import Script from "next/script";
// import { Skelton } from "antd";
import { Box } from "@chakra-ui/react";

export default function TwitterTimeline() {
  return (
    <Box>
      <a
        class="twitter-timeline"
        href="https://twitter.com/uec_imas?ref_src=twsrc%5Etfw"
      >
        Tweets by uec_imas
      </a>
      <Script async src="https://platform.twitter.com/widgets.js"></Script>
    </Box>
  );
}
