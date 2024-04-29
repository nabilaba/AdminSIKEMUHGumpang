import {
  Stack,
  Heading,
  Icon,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import BoxAnggota from "./BoxAnggota";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import Footer from "./Footer";
import Search from "./Search";

export default function Home() {
  const [filter, setFilter] = useState("");

  return (
    <Stack
      py={{ base: 6, lg: 10 }}
      px={{ base: 4, lg: 16 }}
      w="full"
      bg="#2e2e2e url(assets/bg.png) no-repeat left top"
      minH="100vh"
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
      <Stack spacing="4" zIndex="2">
        <Box w="full">
          <Heading>SISTEM INFORMASI</Heading>
          <Heading color="blue.200">KEANGGOTAAN MUHAMMADIYAH</Heading>
          <Heading color="yellow.200">GUMPANG</Heading>
          <Text mt="2">
            <Icon as={FaLocationDot} /> Gumpang, Kec. Kartasura, Kab. Sukoharjo
          </Text>
        </Box>
        <Search setFilter={setFilter} />
        <BoxAnggota filter={filter} />
        <Footer />
      </Stack>
    </Stack>
  );
}
