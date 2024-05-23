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
} from "@chakra-ui/react";

export default function Dashboard() {
  const { data, loading, getData } = useDataStore();

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Stack spacing={4} m={"auto"} w="full" zIndex="2">
      <Heading fontSize={"4xl"}>Dashboard</Heading>
      <Box
        rounded={"lg"}
        bg="white"
        p={2}
        color="black"
        overflow="auto"
      >
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
    </Stack>
  );
}
