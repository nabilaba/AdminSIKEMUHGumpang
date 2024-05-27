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
import { useEffect } from "react";

export default function EditProfile() {
  const navigate = useNavigate();

  const [username, setUseername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, getProfileByToken, editProfileByToken } = useUserStore();

  const fetchData = async () => {
    const response = await getProfileByToken();
    setUseername(response.username);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editProfileByToken({ username, password });
      swal.fire("Berhasil!", "Data berhasil diubah.", "success");
      navigate("-1");
    } catch (error) {
      swal.fire("Gagal!", error.message, "error");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Protected>
      <Box rounded={"lg"} bg="white" p={4} color="black">
        <Stack as="form" spacing="4" onSubmit={handleSubmit} autoComplete="off">
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUseername(e.target.value)}
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
            Simpan
          </Button>
        </Stack>
      </Box>
    </Protected>
  );
}
