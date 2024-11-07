"use client";

import Script from "next/script";
import { Box, Spinner, useColorMode } from "@chakra-ui/react";

export default function TwitterTimeline() {
  const { colorMode } = useColorMode();

  return (
    <Box
      textAlign="center"
      lineHeight="600px"
      overflow="hidden"
      borderRadius="13px"
    >
      <a
        className="twitter-timeline"
        href="https://twitter.com/uec_imas?ref_src=twsrc%5Etfw"
        data-height="600px"
        data-theme={colorMode == "light" ? "light" : "dark"}
      >
        <Spinner size="xl" />
      </a>
      <Script async src="https://platform.twitter.com/widgets.js"></Script>
    </Box>
  );
}
