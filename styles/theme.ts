import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: { color: "gray.700" },
    },
    Heading: {
      baseStyle: { color: "gray.800" },
    },
  },
  styles: {
    global: {
      "dl, dt, dd, form": {
        color: "gray.700",
      },
    },
  },
});

export default theme;
