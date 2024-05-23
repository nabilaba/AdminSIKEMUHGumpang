import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useAuthStore } from "../../helpers/Auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, LOGIN } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await LOGIN(username, password);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Stack spacing={4} m={"auto"} w="full" maxW="xl" zIndex="2">
      <Heading fontSize={"4xl"}>Login Page</Heading>
      <Box rounded={"lg"} bg="white" boxShadow={"lg"} p={8} color="black">
        <Stack as="form" spacing={4} onSubmit={handleSubmit} autoComplete="off">
          <FormControl id="email" isRequired>
            <FormLabel>Username</FormLabel>
            <Input type="text" onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Kata Sandi </FormLabel>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">Masuk</Button>
        </Stack>
      </Box>
    </Stack>
  );
}
