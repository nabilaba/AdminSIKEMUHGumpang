import {
  HStack,
  VStack,
  Image,
  Text,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

export default function BoxAnggota() {
  return (
    <Stack
      divider={<StackDivider />}
      spacing={4}
      w="full"
      bg="white"
      p="5"
      color="black"
    >
      {dummy.map((item) => (
        <HStack
          key={item.id}
          spacing={4}
          w="full"
          pos="relative"
          overflow="hidden"
        >
          <Image boxSize="175px" src={item.foto} alt={item.nama} borderRadius="2xl" />
          <VStack align="start" spacing={0} flex="1" fontSize="xl">
            <Text fontWeight="bold" color="red" textTransform="uppercase">
              {item.nama}
            </Text>
            <Text>NBM: {item.nbm}</Text>
            <Text>Profesi: {item.profesi}</Text>
            <Text>Pendidikan: {item.pendidikan}</Text>
            <Text>Alamat: {item.alamat}</Text>
            <Text>Jabatan: {item.jabatan}</Text>
          </VStack>
        </HStack>
      ))}
    </Stack>
  );
}

const dummy = [
  {
    id: 1,
    nama: "Nabil Aziz Bima Anggita",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Sukoharjo",
    jabatan: "Ketua Pimpinan",
    foto: "/assets/nabil.jpg",
  },
  {
    id: 2,
    nama: "Dewi Khoirunnisa",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Tawangmangu",
    jabatan: "Anggota",
    foto: "/assets/dewi.jpg",
  },
  {
    id: 3,
    nama: "Anggota 2",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Sukoharjo",
    jabatan: "Ketua Pimpinan",
    foto: "/assets/default.jpg",
  },
  {
    id: 4,
    nama: "Anggota 3",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Tawangmangu",
    jabatan: "Anggota",
    foto: "/assets/default.jpg",
  },
  {
    id: 5,
    nama: "Anggota 4",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Sukoharjo",
    jabatan: "Ketua Pimpinan",
    foto: "/assets/default.jpg",
  },
  {
    id: 6,
    nama: "Anggota 5",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Tawangmangu",
    jabatan: "Anggota",
    foto: "/assets/default.jpg",
  },
  {
    id: 7,
    nama: "Anggota 6",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Sukoharjo",
    jabatan: "Ketua Pimpinan",
    foto: "/assets/default.jpg",
  },
  {
    id: 8,
    nama: "Anggota 7",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Tawangmangu",
    jabatan: "Anggota",
    foto: "/assets/default.jpg",
  },
  {
    id: 9,
    nama: "Anggota 8",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Sukoharjo",
    jabatan: "Ketua Pimpinan",
    foto: "/assets/default.jpg",
  },
  {
    id: 10,
    nama: "Anggota 9",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Tawangmangu",
    jabatan: "Anggota",
    foto: "/assets/default.jpg",
  },
];
