import { Box, Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Search({ setFilter }) {
  return (
    <Box w="full">
      <InputGroup bg="white" borderRadius="full" color="black">
        <Input
          placeholder="Cari anggota..."
          onChange={(e) => setFilter(e.target.value)}
        />
        <InputRightElement>
          <Icon as={SearchIcon} color="gray.500" />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}
