import React from "react";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Box>HI FROM APP</Box>
      <Button colorScheme="purple">BUTTON</Button>
    </ChakraProvider>
  );
}

export default App;
