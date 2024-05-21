import {
  HStack,
  VStack,
  Image,
  Text,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

export default function BoxAnggota({ data }) {
  if (data?.length < 1) {
    return (
      <VStack
        w="full"
        h="full"
        justify="center"
        align="center"
        bg="white"
        color="black"
        p="5"
      >
        <Text>Anggota tidak ditemukan</Text>
      </VStack>
    );
  }

  return (
    <Stack
      divider={<StackDivider />}
      spacing={4}
      w="full"
      bg="white"
      p="5"
      color="black"
    >
      {data?.map((item, index) => (
        <HStack
          key={index}
          spacing={4}
          w="full"
          pos="relative"
          overflow="hidden"
        >
          <Image
            boxSize="175px"
            src={item.foto}
            alt={item.nama}
            borderRadius="2xl"
          />
          <Stack
            align="start"
            spacing={0}
            flex="1"
            fontSize={{ base: "14px", lg: "xl" }}
          >
            <Text fontWeight="bold" color="red" textTransform="uppercase">
              {item.nama}
            </Text>
            <Text>NBM: {item.nbm}</Text>
            <Text>Profesi: {item.profesi}</Text>
            <Text>Pendidikan: {item.pendidikan}</Text>
            <Text>Alamat: {item.alamat}</Text>
            <Text>Jabatan: {item.jabatan}</Text>
          </Stack>
        </HStack>
      ))}
    </Stack>
  );
}
