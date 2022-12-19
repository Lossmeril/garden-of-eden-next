import {
  Wrap,
  WrapItem,
  Card,
  CardBody,
  Stack,
  Heading,
  Avatar,
  VStack,
  Square,
  Box,
  HStack,
} from "@chakra-ui/react";
import Section from "../section";

import { RiPhoneFill } from "react-icons/ri";
import { IoMailSharp } from "react-icons/io5";
import { SiLinkedin } from "react-icons/si";
import Link from "next/link";

const ContactCard = ({ name, image, role, children }: any) => {
  return (
    <Card mx={{ base: 6, sm: 0 }} w="100%" bg="white" textAlign="center">
      <CardBody p={10}>
        <Avatar size={{ base: "xl", md: "2xl" }} name={name} src={image} />
        <Stack mt="6" spacing="3">
          <Heading as="h2" size="lg" className="ordinary-font">
            {name}
          </Heading>
          <Heading as="h3" size="md" className="ordinary-font">
            {role}
          </Heading>
          <Box>{children}</Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

const ContactsSection = () => {
  return (
    <Section anchor="contacts" heading="Kontakty">
      <Wrap
        align="center"
        spacing={{ base: 2, lg: 8 }}
        justify="center"
        py={5}
        className="downloads-wrap"
      >
        <WrapItem w={{ base: "100%", sm: "75%", lg: "50%", xl: "30%" }}>
          <ContactCard
            name="Jakub Tesařík"
            image="/img/avatars/jakub.webp"
            role="producent"
          >
            <VStack
              mt={6}
              gap={3}
              align="left"
              w={{ base: "100%", md: "75%", lg: "50%" }}
              mx="auto"
            >
              <Box>
                <a href="tel:'+420724797522'">
                  <HStack>
                    <Square size="40px" bg="green.500" color="white" mr={3}>
                      <RiPhoneFill />
                    </Square>
                    <Heading
                      as="p"
                      className="ordinary-font"
                      size="sm"
                      fontWeight="normal"
                    >
                      +420 724 797 522
                    </Heading>
                  </HStack>
                </a>
              </Box>
              <Box>
                <a href="mailto:'jakub@tesarik.art'">
                  <HStack>
                    <Square size="40px" bg="green.500" color="white" mr={3}>
                      <IoMailSharp />
                    </Square>
                    <Heading
                      as="p"
                      className="ordinary-font"
                      size="sm"
                      fontWeight="normal"
                    >
                      jakub@tesarik.art
                    </Heading>
                  </HStack>
                </a>
              </Box>
              <Box>
                <Link
                  href="https://www.linkedin.com/in/tesarik-jakub/"
                  target="_blank"
                >
                  <HStack>
                    <Square size="40px" bg="green.500" color="white" mr={3}>
                      <SiLinkedin />
                    </Square>
                    <Heading
                      as="p"
                      className="ordinary-font"
                      size="sm"
                      fontWeight="normal"
                    >
                      {"/tesarik-jakub"}
                    </Heading>
                  </HStack>
                </Link>
              </Box>
            </VStack>
          </ContactCard>
        </WrapItem>
      </Wrap>
    </Section>
  );
};

export default ContactsSection;
