import {
  Box,
  Container,
  Stack,
  Link,
  Spacer,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { IoHeartCircleOutline } from "react-icons/io5";
import { RiArrowRightSFill } from "react-icons/ri";

const NavbarItem = ({ link, target, children }: any) => {
  return (
    <NextLink href={link} target={target}>
      <Text fontSize={{ base: "12px", md: "20px" }} mr={12}>
        {children}
      </Text>
    </NextLink>
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
      <Container display="flex" p={2} maxW="container.xl" flexWrap="wrap">
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", lg: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="left"
          flexGrow={1}
          my={4}
        >
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
      </Container>
    </Box>
  );
};

export default Navbar;
