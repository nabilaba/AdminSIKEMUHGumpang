import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import {
  FiHome,
  FiMenu,
  FiChevronDown,
} from "react-icons/fi";
import { Outlet } from "react-router-dom";
import { useTokenStore } from "../helpers/Auth";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink, useLocation } from "react-router-dom";
import swal from "sweetalert2";

const LinkItems = [
  { name: "Home", icon: FiHome, to: "/dashboard" },
  { name: "Settings", icon: FiHome, to: "/settings" },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg="white"
      color="black"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          SIKEMUHGumpang
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Stack>
        {LinkItems.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            to={link.to}
            onClick={onClose}
          >
            {link.name}
          </NavItem>
        ))}
      </Stack>
    </Box>
  );
};

const NavItem = ({ icon, to, children, ...rest }) => {
  const location = useLocation();
  return (
    <Box
      as={RouterLink}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      to={to}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "green.500",
          color: "white",
        }}
        {...(location.pathname === to && { bg: "green.500", color: "white" })}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const navigate = useNavigate();
  const removeToken = () => {
    swal
      .fire({
        title: "Apakah kamu yakin?",
        text: "Kamu akan keluar dari aplikasi",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          useTokenStore.getState().removeToken();
          navigate("/");
        }
      });
  };

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="14"
      alignItems="center"
      bg="white"
      color="black"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        SIKEMUHGumpang
      </Text>

      <Flex alignItems={"center"}>
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
          >
            <HStack>
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
              >
                <Text fontSize="sm">Admin</Text>
              </VStack>
              <Box display={{ base: "none", md: "flex" }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList bg="white" color="black" borderColor="gray.200">
            <MenuItem>
              <RouterLink to="/dashboard/edit-profile">
                Ubah Info Akun
              </RouterLink>
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={removeToken}>Keluar</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg="gray.100">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Outlet />
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
