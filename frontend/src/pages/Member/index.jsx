import { useEffect } from "react";
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
} from "@chakra-ui/react";
import Protected from "../../templates/Protected";

export default function Member() {
  const { data, loading, getData } = useDataStore();

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Protected>
      <Stack spacing={4} m={"auto"} w="full" zIndex="2">
        <Box rounded={"lg"} bg="white" p={2} color="black">
          <Box p="2">
            <Heading fontSize={"xl"}>DATA ANGGOTA</Heading>
            <Text fontSize={"sm"} color="gray.500">Jumlah Anggota: {data.length}</Text>
          </Box>
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
                </Tr>
              </Thead>
              <Tbody>
                {data?.map((item, index) => (
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
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Stack>
    </Protected>
  );
}
