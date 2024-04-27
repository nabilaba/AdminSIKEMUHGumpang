import { Stack } from "@chakra-ui/react";
import Home from "./pages/Home";

function App() {
  return (
    <Stack
      align="center"
      justify="center"
      bg="gray.700"
      color="white"
      minH="100vh"
    >
      <Home />
    </Stack>
  );
}

export default App;
