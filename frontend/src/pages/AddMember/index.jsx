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
import { useDataStore } from "../../helpers/Data";
import { useState } from "react";
import swal from "sweetalert2";

export default function AddMember() {
  const [nama, setNama] = useState("");
  const [nbm, setNbm] = useState("");
  const [profesi, setProfesi] = useState("");
  const [pendidikan, setPendidikan] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [foto, setFoto] = useState("");

  const { postData } = useDataStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postData({
        nama,
        nbm,
        profesi,
        pendidikan,
        alamat,
        jabatan,
        foto,
      });
      swal.fire({
        title: "Success",
        text: "Anggota berhasil ditambahkan",
        icon: "success",
      });
      setNama("");
      setNbm("");
      setProfesi("");
      setPendidikan("");
      setAlamat("");
      setJabatan("");
      setFoto("");
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
          <FormControl id="nama" isRequired>
            <FormLabel>Nama</FormLabel>
            <Input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </FormControl>
          <FormControl id="nbm" isRequired>
            <FormLabel>NBM</FormLabel>
            <Input
              type="text"
              value={nbm}
              onChange={(e) => setNbm(e.target.value)}
            />
          </FormControl>
          <FormControl id="profesi" isRequired>
            <FormLabel>Profesi</FormLabel>
            <Input
              type="text"
              value={profesi}
              onChange={(e) => setProfesi(e.target.value)}
            />
          </FormControl>
          <FormControl id="pendidikan" isRequired>
            <FormLabel>Pendidikan</FormLabel>
            <Input
              type="text"
              value={pendidikan}
              onChange={(e) => setPendidikan(e.target.value)}
            />
          </FormControl>
          <FormControl id="alamat" isRequired>
            <FormLabel>Alamat</FormLabel>
            <Textarea
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            />
          </FormControl>
          <FormControl id="jabatan" isRequired>
            <FormLabel>Jabatan</FormLabel>
            <Input
              type="text"
              value={jabatan}
              onChange={(e) => setJabatan(e.target.value)}
            />
          </FormControl>
          <FormControl id="foto" isRequired>
            <FormLabel>Foto</FormLabel>
            <Input
              type="text"
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="green" w="fit-content">
            Tambah Anggota
          </Button>
        </Stack>
      </Box>
    </Protected>
  );
}
