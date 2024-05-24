import { useEffect } from "react";
import { useDataStore } from "../../helpers/Data";
import { useUserStore } from "../../helpers/User";
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
  AvatarGroup,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import Protected from "../../templates/Protected";
import { Link as RouterLink } from "react-router-dom";

export default function Dashboard() {
  const { data, loading, getData } = useDataStore();
  const {
    data: userData,
    loading: userLoading,
    getData: getUserData,
  } = useUserStore();

  useEffect(() => {
    getData();
    getUserData();
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
                {data?.slice(0, 3).map((item, index) => (
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
          <HStack justify="space-between" p="2" mt="2">
            <AvatarGroup>
              {data.length > 3 &&
                data
                  ?.slice(3, 6)
                  .map((avatar) => (
                    <Avatar
                      src={avatar.foto}
                      size="sm"
                      position="relative"
                      zIndex={2}
                    />
                  ))}
            </AvatarGroup>
            <RouterLink to="/data">
              <Link color="blue.500">Lihat Semua &gt;</Link>
            </RouterLink>
          </HStack>
        </Box>
      </Stack>
    </Protected>
  );
}
