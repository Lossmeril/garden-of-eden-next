import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";

/*IMPORT CUSTOM COMPONENTS*/
import Section from "../components/section";
import Animation from "../components/animation";

/*IMPORT ICONS*/
import { IoMdFilm } from "react-icons/io";
import { IoHeartCircleOutline } from "react-icons/io5";
import { RiArrowRightSFill } from "react-icons/ri";
import AboutSection from "../components/sections/about";
import TrailerSection from "../components/sections/trailer";
import ContributorsSection from "../components/sections/contributors";
import ContactsSection from "../components/sections/contacts";
import DownloadsSection from "../components/sections/downloads";

/*IMPORT SECTIONS*/

export default function Home() {
  return (
    <>
      <Head>
        <title>Zahrada Boží - dokumentární film</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box className="header-section" h="100vh">
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          h="100vh"
          pt={{ base: 6, lg: 0 }}
        >
          <Box
            h="100%"
            overflow={{ base: "visible", md: "hidden" }}
            position="relative"
          >
            <Box className="headings" pt={12} mt={4}>
              <VStack gap={{ base: 2, md: 4, xl: 8 }}>
                <Image
                  src="/img/logo-cz.png"
                  alt="Zahrada Boží"
                  width={{ base: "50%", lg: "50%" }}
                />
                <VisuallyHidden>
                  <Heading as="h1">Zahrada Boží</Heading>
                </VisuallyHidden>
                <Heading
                  as="p"
                  color="white"
                  size={{ base: "md", md: "lg", lg: "xl" }}
                >
                  dokumentární film
                </Heading>

                <Stack direction={{ base: "column", xl: "row" }}>
                  <Button
                    size={{ base: "md", md: "lg" }}
                    colorScheme="green"
                    leftIcon={<IoHeartCircleOutline />}
                    rightIcon={<RiArrowRightSFill />}
                  >
                    Podpořte film na HitHitu!
                  </Button>

                  <Link href="#about">
                    <Button
                      size={{ base: "md", md: "lg" }}
                      w={{ base: "100%", xl: "auto" }}
                      leftIcon={<IoMdFilm />}
                      rightIcon={<RiArrowRightSFill />}
                    >
                      Chci zjistit více!
                    </Button>
                  </Link>
                </Stack>
              </VStack>
            </Box>
          </Box>
          <Box position="relative">
            <Animation />
          </Box>
        </SimpleGrid>
      </Box>

      <AboutSection />

      <TrailerSection />

      <ContributorsSection />

      <ContactsSection />

      <DownloadsSection />
    </>
  );
}
