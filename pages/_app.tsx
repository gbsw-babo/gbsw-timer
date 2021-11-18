import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, theme, CSSReset, ColorModeProvider, ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import t from "../theme"
function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <ColorModeScript initialColorMode={t.config.initialColorMode} />
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}
export default App;
