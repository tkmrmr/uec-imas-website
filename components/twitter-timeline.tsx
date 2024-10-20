import Script from "next/script";
import { Box, Spinner } from "@chakra-ui/react";

export default function TwitterTimeline() {
  return (
    <Box textAlign="center" lineHeight="600px">
      <a
        className="twitter-timeline"
        href="https://twitter.com/uec_imas?ref_src=twsrc%5Etfw"
        data-height="600px"
      >
        <Spinner size="xl" />
      </a>
      <Script async src="https://platform.twitter.com/widgets.js"></Script>
    </Box>
  );
}
