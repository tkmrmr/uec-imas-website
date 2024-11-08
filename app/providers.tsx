"use client";

import {
  ChakraProvider,
  cookieStorageManager,
  ColorModeScript,
} from "@chakra-ui/react";
import theme from "../styles/theme";

export function Providers({
  children,
  initialColorMode,
}: {
  children: React.ReactNode;
  initialColorMode: "light" | "dark" | undefined;
}) {
  const themeWithNewConfig = {
    ...theme,
    config: {
      ...theme.config,
      initialColorMode: initialColorMode || "light",
    },
  };

  return (
    <ChakraProvider
      colorModeManager={cookieStorageManager}
      theme={themeWithNewConfig}
    >
      <ColorModeScript
        type="cookie"
        initialColorMode={themeWithNewConfig.config.initialColorMode}
      />
      {children}
    </ChakraProvider>
  );
}
