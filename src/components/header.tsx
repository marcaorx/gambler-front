"use client";
import {
  Box,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { primaryColor } from "@/types/colors";
import { HamburgerIcon } from "@chakra-ui/icons";
import { signOutUser } from "@/api/auth";

export default function Header({ isHome = false }) {
  async function logout() {
    await signOutUser();
  }
  return (
    <Flex
      width="100%"
      height="100px"
      padding="20px"
      align="center"
      justify="space-between"
    >
      {!isHome ? (
        <Link href="/">
          <ArrowBackIcon sx={{ color: primaryColor, fontSize: 30 }} />
        </Link>
      ) : (
        <Box></Box>
      )}
      <Image src="/logo.png" alt="Gambler AI" width="200px" />
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList backgroundColor="#000" _hover={{ backgroundColor: "#001" }}>
          <MenuItem
            onClick={logout}
            backgroundColor="#000"
            _hover={{ backgroundColor: "#001" }}
          >
            Sair
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
