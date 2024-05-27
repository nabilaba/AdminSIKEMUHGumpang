import { useEffect, useState } from "react";
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
  IconButton,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { SearchIcon, AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function ListAdmin() {
  const navigate = useNavigate();
  
  const [filter, setFilter] = useState("");

  const { data, loading, getData } = useUserStore();

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredData = data.filter((item) =>
    item.username.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Stack spacing={4} m={"auto"} w="full" zIndex="2">
      <Box rounded={"lg"} bg="white" p={2} color="black">
        <Box p="2">
          <Heading fontSize={"xl"}>DATA ADMIN</Heading>
          <Text fontSize={"sm"} color="gray.500">
            Jumlah Admin: {data.length}
          </Text>
          <HStack mt="2">
            <InputGroup bg="white" color="black" size="sm">
              <Input
                placeholder="Cari admin..."
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
              onClick={() => navigate("/dashboard/add-admin")}
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
                  <Th>Username</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredData.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.username}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        )}
      </Box>
    </Stack>
  );
}
