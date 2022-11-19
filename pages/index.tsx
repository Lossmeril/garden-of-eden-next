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
        <SimpleGrid columns={{ base: 1, lg: 2 }} h="100vh">
          <Box h="100%" overflow="hidden" position="relative">
            <Box className="headings">
              <VStack gap={8}>
                <Image src="/img/logo-cz.png" alt="Zahrada Boží" width="50%" />
                <Heading as="h1" display="none">
                  Zahrada Boží
                </Heading>
                <Heading as="p" color="white">
                  dokumentární film
                </Heading>

                <Stack direction={{ base: "column", xl: "row" }}>
                  <Button
                    size="lg"
                    colorScheme="green"
                    leftIcon={<IoHeartCircleOutline />}
                    rightIcon={<RiArrowRightSFill />}
                  >
                    Podpořte film na HitHitu!
                  </Button>

                  <Link href="#about">
                    <Button
                      size="lg"
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
