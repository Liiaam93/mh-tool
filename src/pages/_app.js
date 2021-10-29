import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider bg="grey">
        <Component {...pageProps} />{" "}
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
