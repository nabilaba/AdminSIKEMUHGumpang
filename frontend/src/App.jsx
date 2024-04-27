import { useState } from "react";
import {
  Button,
  Code,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import logo from "./logo.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Stack
      align="center"
      justify="center"
      bg="gray.700"
      color="white"
      minH="100vh"
    >
      <Stack maxW="lg" textAlign="center" align="center" spacing="4">
        <Image src={logo} alt="logo" boxSize="250px" />
        <Heading>Nabil Aba React</Heading>
        <Text>
          Includes: <Code>Chakra UI</Code>, <Code>Chakra UI Icons</Code>,{" "}
          <Code>Framer Motion</Code>, <Code>axios</Code>,{" "}
          <Code>React Helmet Async</Code>, <Code>React Icons</Code>,{" "}
          <Code>React Router DOM</Code>, <Code>Sweetalert</Code>
        </Text>
        <Text>
          Edit <Code>App.jsx</Code> and save to test HMR updates.
        </Text>
        <Text>
          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
          {" | "}
          <Link
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </Link>
        </Text>
        <Text>
          Last updated on <Code>10 Sep 2023</Code>.
        </Text>
      </Stack>
    </Stack>
  );
}

export default App;
