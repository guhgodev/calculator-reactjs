import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import Calculator from "./components/Calculator";

function App() {
  return (
    <ChakraProvider>
      <Calculator></Calculator>
    </ChakraProvider>
  );
}

export default App;
