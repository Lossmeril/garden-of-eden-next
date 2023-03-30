import { extendTheme } from "@chakra-ui/react";

const theme = {
  fonts: {
    body: "Space Grotesk, Helvetica, Arial, sans-serif",
    heading: "kawoszeh, sans-serif",
  },

  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
};

export default extendTheme(theme);
