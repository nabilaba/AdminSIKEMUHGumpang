import { useEffect } from "react";
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
  Text,
} from "@chakra-ui/react";

export default function ListAdmin() {
  const { data, loading, getData } = useUserStore();

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Stack spacing={4} m={"auto"} w="full" zIndex="2">
      <Box rounded={"lg"} bg="white" p={2} color="black">
        <Box p="2">
          <Heading fontSize={"xl"}>ADMIN</Heading>
          <Text fontSize={"sm"} color="gray.500">
            Jumlah Admin: {data.length}
          </Text>
        </Box>
        <Box overflow="auto">
          <Table>
            <Thead>
              <Tr>
                <Th>Username</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.username}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Stack>
  );
}
