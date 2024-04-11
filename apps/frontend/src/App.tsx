import React from "react";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import axios from "axios";

function App() {
  const handleClick = async () => {
    const response = await axios.get("http://localhost:3025");
    console.log("RESPONSE", response);
  };
  return (
    <ChakraProvider>
      <Box>HI FROM APP</Box>
      <Button colorScheme="purple" onClick={handleClick}>
        BUTTON
      </Button>
    </ChakraProvider>
  );
}

export default App;
