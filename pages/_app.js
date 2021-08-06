import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import {RecoilRoot} from "recoil";


const theme = {
    colors: {
        primaryBlue: "#56CCF2",
        secondaryBlue: "#0644CC",
    },
};
function MyApp({ Component, pageProps }) {

  return (
      <>
      <ChakraProvider>
        <ThemeProvider theme={theme}>
              <RecoilRoot>
            <Component {...pageProps} />
              </RecoilRoot>
        </ThemeProvider>
      </ChakraProvider>
      </>
)
}

export default MyApp
