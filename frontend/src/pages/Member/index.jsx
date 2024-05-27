import { useEffect, useState } from "react";
import { useDataStore } from "../../helpers/Data";
import {
  Box,
  Stack,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  Text,
  IconButton,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import Protected from "../../templates/Protected";
import { DeleteIcon, EditIcon, SearchIcon, AddIcon } from "@chakra-ui/icons";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Member() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

  const { data, loading, getAllData, deleteData } = useDataStore();

  useEffect(() => {
    getAllData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredData = data.filter((item) =>
    item.nama.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      swal
        .fire({
          title: "Apakah Anda yakin?",
          text: "Data yang dihapus tidak dapat dikembalikan!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ya, hapus!",
          cancelButtonText: "Batal",
          reverseButtons: true,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            await deleteData(id);
            swal.fire("Terhapus!", "Data berhasil dihapus.", "success");
          }
        });
    } catch (error) {
      swal.fire("Gagal!", error.message, "error");
    }
  };

  return (
    <Protected>
      <Stack spacing={4} m={"auto"} w="full" zIndex="2">
        <Box rounded={"lg"} bg="white" p={2} color="black">
          <Box p="2">
            <Heading fontSize={"xl"}>DATA ANGGOTA</Heading>
            <Text fontSize={"sm"} color="gray.500">
              Jumlah Anggota: {data.length}
            </Text>
            <HStack mt="2">
              <InputGroup bg="white" color="black" size="sm">
                <Input
                  placeholder="Cari anggota..."
                  onChange={(e) => setFilter(e.target.value)}
                  value={filter}
                  borderRadius="full"
                />
                <InputRightElement>
                  <Icon as={SearchIcon} color="gray.500" />
                </InputRightElement>
              </InputGroup>
              <IconButton
                aria-label="add"
                icon={<AddIcon />}
                colorScheme="green"
                borderRadius="full"
                size="sm"
                onClick={() => navigate("/dashboard/add-member")}
              />
            </HStack>
          </Box>
          {filteredData.length === 0 && (
            <Box p="2">
              <Text>Data tidak ditemukan</Text>
            </Box>
          )}
          {filteredData.length > 0 && (
            <Box overflow="auto">
              <Table>
                <Thead>
                  <Tr>
                    <Th>Foto</Th>
                    <Th>Nama</Th>
                    <Th>NBM</Th>
                    <Th>Profesi</Th>
                    <Th>Pendidikan</Th>
                    <Th>Alamat</Th>
                    <Th>Jabatan</Th>
                    <Th>Opsi</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredData.map((item, index) => (
                    <Tr key={index}>
                      <Td>
                        <Avatar src={item.foto} size="sm" />
                      </Td>
                      <Td>{item.nama}</Td>
                      <Td>{item.nbm}</Td>
                      <Td>{item.profesi}</Td>
                      <Td>{item.pendidikan}</Td>
                      <Td>{item.alamat}</Td>
                      <Td>{item.jabatan}</Td>
                      <Td>
                        <HStack>
                          <IconButton
                            aria-label="edit"
                            icon={<EditIcon />}
                            size="sm"
                            colorScheme="blue"
                            borderRadius="full"
                            onClick={() =>
                              navigate(`/dashboard/edit-member/${item._id}`)
                            }
                          />
                          <IconButton
                            aria-label="delete"
                            icon={<DeleteIcon />}
                            size="sm"
                            colorScheme="red"
                            borderRadius="full"
                            onClick={() => handleDelete(item._id)}
                          />
                        </HStack>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          )}
        </Box>
      </Stack>
    </Protected>
  );
}
