import { useEffect } from "react";
import { Box, Stack, Heading, Text, Button } from "@chakra-ui/react";
import { useUserStore } from "../../helpers/User";
import Protected from "../../templates/Protected";

export default function ChangeAccount() {
  const { data, getData, loading } = useUserStore();

  useEffect(() => {
    getData();
  }, []);

  return (
    <Protected>
      <Box>
        <Heading>Change Account</Heading>
        <Stack spacing={4} mt={4}>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            data?.map((item) => (
              <Box key={item._id} p={4} shadow="md" borderWidth="1px">
                <Text>{item.username}</Text>
                <Text>{item.email}</Text>
              </Box>
            ))
          )}
        </Stack>
      </Box>
    </Protected>
  );
}
