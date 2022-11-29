import {
  Box,
  Container,
  Stack,
  Image,
  Spacer,
  Button,
  Center,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { IoHeartCircleOutline } from "react-icons/io5";
import { RiArrowRightSFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarItem = ({ link, target, children, mobile }: any) => {
  if (!mobile) {
    return (
      <NextLink href={link} target={target}>
        <Text
          fontSize={{ base: "md", lg: "lg", xl: "xl" }}
          mr={{ base: 4, xl: 12 }}
        >
          {children}
        </Text>
      </NextLink>
    );
  } else {
    return (
      <MenuItem>
        <NextLink href={link} target={target}>
          <Text>{children}</Text>
        </NextLink>
      </MenuItem>
    );
  }
};

const MobileMenu = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<GiHamburgerMenu />} />
      <MenuList w="100vw" borderRadius="0">
        <NavbarItem link="/" mobile="true">
          Domů
        </NavbarItem>
        <NavbarItem link="#about" mobile="true">
          O filmu
        </NavbarItem>
        <NavbarItem link="#trailer" mobile="true">
          Trailer
        </NavbarItem>
        <NavbarItem link="#donations" mobile="true">
          Projekt podpořili
        </NavbarItem>
        <NavbarItem link="#contacts" mobile="true">
          Kontakty
        </NavbarItem>
        <NavbarItem link="#press" mobile="true">
          Ke stažení
        </NavbarItem>
      </MenuList>
    </Menu>
  );
};

const Navbar = ({ dataActive }: any) => {
  return (
    <Box
      as="nav"
      w="100%"
      zIndex={10}
      position="fixed"
      className="navbar"
      data-active={dataActive}
    >
      <Container display="flex" p={2} maxW="container.2xl" flexWrap="wrap">
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", lg: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="left"
          flexGrow={1}
          my={4}
          mx={12}
        >
          <Image
            src="/img/logos/cz_black.png"
            alt="Zahrada Boží"
            h="50px"
            style={{ transform: "scale(1.5)" }}
          />
          <Spacer />
          <Center height="100%">
            <NavbarItem link="/">Domů</NavbarItem>
            <NavbarItem link="#about">O filmu</NavbarItem>
            <NavbarItem link="#trailer">Trailer</NavbarItem>
            <NavbarItem link="#donations">Projekt podpořili</NavbarItem>
            <NavbarItem link="#contacts">Kontakty</NavbarItem>
            <NavbarItem link="#press">Ke stažení</NavbarItem>
          </Center>
          <Spacer />
          <Button
            size="lg"
            colorScheme="green"
            leftIcon={<IoHeartCircleOutline />}
            rightIcon={<RiArrowRightSFill />}
            m={0}
          >
            Podpořte film
          </Button>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          flexGrow={1}
          px={6}
          display={{ base: "flex", lg: "none" }}
        >
          <Image src="/img/logo-cz.png" alt="Zahrada Boží" h="40px" />
          <Spacer />
          <Box
            ml={2}
            display={{ base: "inline-block", lg: "none" }}
            alignItems="center"
          >
            <MobileMenu />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
