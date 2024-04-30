import { Box, Stack, Image } from "@chakra-ui/react";
import BoxAnggota from "./BoxAnggota";
import { useState } from "react";
import Footer from "./Footer";
import Search from "./Search";
import Hero from "./Hero";

export default function Home() {
  const [filter, setFilter] = useState("");

  return (
    <>
      <Box bg="red"></Box>
      <Stack spacing="4" zIndex="2">
        <Hero />
        <Search setFilter={setFilter} />
        <BoxAnggota filter={filter} />
        <Footer />
      </Stack>
    </>
  );
}
