import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";

export default function Hero() {
  return (
    <Box w="full">
      <Heading>SISTEM INFORMASI</Heading>
      <Heading color="blue.200">KEANGGOTAAN MUHAMMADIYAH</Heading>
      <Heading color="yellow.200">GUMPANG</Heading>
      <Text mt="2">
        <Icon as={FaLocationDot} /> Gumpang, Kec. Kartasura, Kab. Sukoharjo
      </Text>
    </Box>
  );
}
