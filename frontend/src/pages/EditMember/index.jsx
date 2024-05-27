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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function EditMember() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [nama, setNama] = useState("");
  const [nbm, setNbm] = useState("");
  const [profesi, setProfesi] = useState("");
  const [pendidikan, setPendidikan] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [foto, setFoto] = useState("");

  const { loading, getData, editData } = useDataStore();

  const fetchData = async () => {
    const response = await getData(id);
    setNama(response.nama);
    setNbm(response.nbm);
    setProfesi(response.profesi);
    setPendidikan(response.pendidikan);
    setAlamat(response.alamat);
    setJabatan(response.jabatan);
    setFoto(response.foto);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editData(id, {
        nama,
        nbm,
        profesi,
        pendidikan,
        alamat,
        jabatan,
        foto,
      });
      swal.fire("Berhasil!", "Data berhasil diedit.", "success");
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
            Simpan
          </Button>
        </Stack>
      </Box>
    </Protected>
  );
}
