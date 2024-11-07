import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  components: {
    Text: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: props.colorMode === "dark" ? "gray.100" : "gray.700",
      }),
    },
    Heading: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: props.colorMode === "dark" ? "gray.50" : "gray.800",
      }),
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      "dl, dt, dd, form": {
        color: props.colorMode === "dark" ? "gray.100" : "gray.700",
      },
    }),
  },
});

export default theme;
