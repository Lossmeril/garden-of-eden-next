import {
  Box,
  Center,
  Spacer,
  Stack,
  Text,
  Icon,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { SiReact, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <Box w="100%" bgColor="white" h="75px">
      <Center h="100%">
        <Container maxW="container.xl">
          <Stack direction={{ base: "column", md: "row" }} display="flex">
            <Text>Michal Špitálský, &copy; 2022</Text>
            <Spacer />
            <Text>
              Made with <Icon as={SiReact} />
            </Text>
          </Stack>
        </Container>
      </Center>
    </Box>
  );
};

export default Footer;
