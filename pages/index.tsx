import React, { Suspense } from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import NextImage from "next/image";

import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";

/*IMPORT ICONS*/
import { IoMdFilm } from "react-icons/io";
import { IoHeartCircleOutline } from "react-icons/io5";
import { RiArrowRightSFill } from "react-icons/ri";
import AboutSection from "../components/sections/about";
import TrailerSection from "../components/sections/trailer";
import ContributorsSection from "../components/sections/contributors";
import ContactsSection from "../components/sections/contacts";
import DownloadsSection from "../components/sections/downloads";

const LazyAnimation = dynamic(() => import("../components/animation"), {
  suspense: true,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Zahrada Boží - dokumentární film</title>
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box className="header-section" h="100vh">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          h="100vh"
          pt={{ base: 6, lg: 0 }}
        >
          <Box
            h="100%"
            overflow={{ base: "visible", xl: "hidden" }}
            position="relative"
          >
            <Box className="headings" pt={12} mt={4} overflow="visible">
              <VStack gap={{ base: 2, md: 4, xl: 8 }} overflow="visible">
                <Image
                  src="/img/logos/cz_white.png"
                  alt="Zahrada Boží"
                  width={{ base: "50%", sm: "45%", md: "75%", lg: "50%" }}
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

                <Stack
                  direction={{
                    base: "column",
                    lg: "column",
                    xl: "row",
                  }}
                >
                  <Button
                    size={{ base: "md", lg: "lg" }}
                    colorScheme="green"
                    leftIcon={<IoHeartCircleOutline />}
                    rightIcon={<RiArrowRightSFill />}
                  >
                    Podpořte film na HitHitu!
                  </Button>

                  <Link href="#about">
                    <Button
                      size={{ base: "md", lg: "lg" }}
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
            <Suspense
              fallback={
                <Center w="100%" h="100%">
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="whiteAlpha.800"
                    color="green.500"
                    size="xl"
                  />
                </Center>
              }
            >
              <LazyAnimation />
            </Suspense>
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
