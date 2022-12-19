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
import { SiReact } from "react-icons/si";

const Footer = () => {
  return (
    <Box
      w="100%"
      bgColor="white"
      h="75px"
      className="footer"
      py={{ base: 12, md: 6 }}
    >
      <Center h="100%">
        <Container maxW="container.xl" mx={{ base: 12, md: 5, xl: 0 }}>
          <Stack
            direction={{ base: "column", md: "row" }}
            display="flex"
            justify="center"
            alignItems="center"
          >
            <Text>Michal Špitálský, &copy; 2022</Text>
            <Spacer display={{ base: "none", md: "block" }} />
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
