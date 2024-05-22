import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack spacing={4} m={"auto"} w="full" maxW="xl" zIndex="2">
      <Heading fontSize={"4xl"}>Login Page</Heading>
      <Box rounded={"lg"} bg="white" boxShadow={"lg"} p={8} color="black">
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Username</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Kata Sandi</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Masuk
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
