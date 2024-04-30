import { Outlet } from "react-router-dom";
import { Stack, Image } from "@chakra-ui/react";

export default function Root() {
  return (
    <Stack
      py={{ base: 6, lg: 10 }}
      px={{ base: 4, lg: 16 }}
      w="full"
      bg="#2e2e2e url(/assets/bg.png) no-repeat left top"
      minH="100vh"
      color="white"
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
      <Outlet />
    </Stack>
  );
}
