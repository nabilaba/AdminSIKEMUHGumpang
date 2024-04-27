import { Stack, Heading, Icon, Text, Box, Image } from "@chakra-ui/react";
import BoxAnggota from "./BoxAnggota";
import { FaLocationDot } from "react-icons/fa6";

export default function Home() {
  return (
    <Stack
      py={{ base: 6, lg: 10 }}
      px={{ base: 4, lg: 16 }}
      w="full"
      bg="#2e2e2e url(assets/bg.png) no-repeat left top"
    >
      <Image
        boxSize="200px"
        src="/assets/logo.png"
        alt="logo"
        pos="absolute"
        top="5"
        right="5"
        filter="invert(1)"
        zIndex="1"
        opacity="0.4"
      />
      <Stack w="full" spacing="4" zIndex="2">
        <Box textAlign={{ base: "center", lg: "left" }}>
          <Heading>SISTEM INFORMASI</Heading>
          <Heading color="blue.200">KEANGGOTAAN MUHAMMADIYAH</Heading>
          <Heading color="yellow.200">GUMPANG</Heading>
          <Text mt="2">
            <Icon as={FaLocationDot} /> Gumpang, Kecamatan Kartasura, Kabupaten
            Sukoharjo
          </Text>
        </Box>
        <BoxAnggota />
        <Text color="gray.400" fontSize="93%">
          Copyright © &copy; 2024 Sistem Informasi Keanggotaan Muhammadiyah
          Gumpang.
        </Text>
      </Stack>
    </Stack>
  );
}
