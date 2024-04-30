import { Button, HStack, Text } from "@chakra-ui/react";

export default function Pagination({ page, setPage, totalPage }) {
  return (
    <HStack justify="center" align="center">
      <Button
        rounded="full"
        colorScheme="yellow"
        isDisabled={page === 1}
        onClick={() => {
          setPage((prev) => prev - 1);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        &lt;
      </Button>
      <Text mx="4">
        {page} / {totalPage}
      </Text>
      <Button
        rounded="full"
        colorScheme="yellow"
        isDisabled={page === totalPage}
        onClick={() => {
          setPage((prev) => prev + 1);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        &gt;
      </Button>
    </HStack>
  );
}
