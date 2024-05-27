import Protected from "../../templates/Protected";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useUserStore } from "../../helpers/User";
import { useState } from "react";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AddAdmin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { addAdmin } = useUserStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addAdmin({
        username,
        password,
      });
      swal.fire({
        title: "Success",
        text: "Admin berhasil ditambahkan",
        icon: "success",
      });
      setUsername("");
      setPassword("");
      navigate("-1");
    } catch (error) {
      swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  };

  return (
    <Protected>
      <Box rounded={"lg"} bg="white" p={4} color="black">
        <Stack as="form" spacing="4" onSubmit={handleSubmit} autoComplete="off">
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="green" w="fit-content">
            Tambah Admin
          </Button>
        </Stack>
      </Box>
    </Protected>
  );
}
