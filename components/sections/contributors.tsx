import Section from "../section";
import {
  Heading,
  Center,
  Stack,
  Wrap,
  WrapItem,
  Box,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";

/*IMPORT TRANSLATIONS*/
import { useTranslation } from "react-i18next";

/*IMPORT DATA*/
import links from "../../datasets/links";
import contributors from "../../datasets/contributors";

const ContributorsSection = () => {
  const { t } = useTranslation();
  return (
    <Section anchor="donations" heading={t("suportersTitle")} bg="white">
      <Heading
        as="h3"
        size="lg"
        mt="4rem"
        mb={6}
        className="center ordinary-font"
      >
        {t("generalPartners")}
      </Heading>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify="center"
        w={{ base: "100%", md: "100%" }}
        spacing={12}
      >
        <Link href="https://mkpsychology.cz" target="_blank">
          <Box mx={{ base: 4, md: 12 }}>
            <Image
              className="general-partner-logo"
              src="/img/sponsors/mkpsychology.webp"
              alt="MK Psychology"
              mx="auto"
            />
          </Box>
        </Link>
      </Stack>

      <Heading
        as="h3"
        size="lg"
        mt="5rem"
        mb={6}
        className="center ordinary-font"
      >
        {t("supporting")}
      </Heading>
      <Stack
        my={6}
        direction={{ base: "column", md: "row" }}
        spacing={6}
        justify="center"
      >
        <Link href="https://www.cuahk.cz" target="_blank">
          <Box mx={{ base: 4, md: 12 }}>
            <Image
              className="partner-logo"
              src="/img/sponsors/Impuls HK black.png"
              alt="Centrum uměleckých aktivit Impuls Hradec Králové"
              mx="auto"
            />
          </Box>
        </Link>
        <Link href="https://www.northumbria.ac.uk" target="_blank">
          <Box mx={{ base: 4, md: 12 }}>
            <Image
              className="partner-logo"
              src="/img/sponsors/nu.png"
              alt="Northumbria University v Newcastle upon Tyne"
              mx="auto"
            />
          </Box>
        </Link>
        <Link href="https://www.coalios.cz" target="_blank">
          <Box mx={{ base: 4, md: 12 }}>
            <Image
              className="partner-logo"
              src="/img/sponsors/coalios.webp"
              alt="coalios"
              mx="auto"
            />
          </Box>
        </Link>
        <Link href="https://www.rozinet.net" target="_blank">
          <Box mx={{ base: 4, md: 12 }} h="100%">
            <Flex align="center" h="100%">
              <Heading
                as="p"
                size="xl"
                className="ordinary-font"
                textTransform="uppercase"
                lineHeight="1em"
              >
                Rozinet s.r.o.
              </Heading>
            </Flex>
          </Box>
        </Link>

        {/* <Box mx={{ base: 4, md: 12 }}>
          <HStack gap={3} justify="center">
            <Image
              className="partner-logo"
              src="/img/bab.webp"
              alt="Obec Báb"
            />
            <Heading
              as="p"
              size="lg"
              className="ordinary-font"
              textTransform="uppercase"
              lineHeight="1em"
            >
              Obec
              <br />
              Báb
            </Heading>
          </HStack>
        </Box> */}
      </Stack>

      <Heading
        as="h3"
        size="lg"
        mt="6rem"
        mb={4}
        className="center ordinary-font"
      >
        {t("crowdfundingSupporters")}
      </Heading>

      <Wrap
        className="contributor-wrap"
        align="center"
        spacing={0}
        justify="center"
        mb={10}
      >
        {contributors.map((contributor) => (
          <WrapItem
            h="80px"
            key={contributor}
            w={{ base: "90%", sm: "60%", md: "40%", lg: "unset", "2xl": "15%" }}
            pl={{ base: 8, md: 0 }}
          >
            <Box p={2} w="100%" h="100%" position="relative">
              <Image
                src="/img/plant.webp"
                alt=""
                position="absolute"
                width="50px"
                height="50px"
                top="10px"
                left="-20px"
                transform={
                  "rotate(" + Math.floor(Math.random() * (40 + 1) - 20) + "deg)"
                }
              />
              <Center w="100%" h="100%">
                <Box pl={4} pr={10} py={3} borderRadius="md">
                  <Text
                    className="contributor"
                    textAlign="center"
                    fontSize="lg"
                    fontWeight="600"
                  >
                    {contributor}
                  </Text>
                </Box>
              </Center>
            </Box>
          </WrapItem>
        ))}

        <WrapItem h="80px">
          <Box p={5} w="100%" h="100%" position="relative">
            <Image
              src="/img/sad-little-cup.webp"
              alt=""
              position="absolute"
              width="50px"
              height="50px"
              top="10px"
              left="-30px"
              transform={
                "rotate(" + Math.floor(Math.random() * (20 + 1) - 10) + "deg)"
              }
            />
            <Center w="100%" h="100%">
              <Link href={links.hitHit} target="_blank">
                <Box px={5} py={3} borderRadius="md" bg="green.100">
                  <Text
                    className="contributor"
                    textAlign="center"
                    fontSize="lg"
                  >
                    {t("yourLogoCrowdufunding")}
                  </Text>
                </Box>
              </Link>
            </Center>
          </Box>
        </WrapItem>
      </Wrap>

      <Heading
        as="h3"
        size="lg"
        mt="5rem"
        mb={6}
        className="center ordinary-font"
      >
        {t("publicity")}
      </Heading>
      <Stack
        my={6}
        direction={{ base: "column", md: "row" }}
        spacing={3}
        justify="center"
      >
        <Link
          href="https://online.fliphtml5.com/epjzk/dfvn/#p=8"
          target="_blank"
        >
          <Box mx={{ base: 4, md: 12 }}>
            <Image
              className="media-logo"
              src="/img/sponsors/koridor.webp"
              alt="koridor"
              mx="auto"
            />
          </Box>
        </Link>
        <Link
          href="https://www.idnes.cz/pardubice/zpravy/usti-nad-orlici-dokument-film-filmari-spitalsky-tesarik-zahrada-bozi.A211223_643006_pardubice-zpravy_mvo"
          target="_blank"
        >
          <Box mx={{ base: 4, md: 12 }}>
            <Image
              className="media-logo"
              src="/img/sponsors/idnes.webp"
              alt="iDnes"
              mx="auto"
            />
          </Box>
        </Link>
        <Link
          href="https://program.rozhlas.cz/zaznamy#/pardubice/35/2023-01-26"
          target="_blank"
        >
          <Box mx={{ base: 4, md: 12 }}>
            <Image
              className="media-logo"
              src="/img/sponsors/ceskyrozhlas.webp"
              alt="Český Rozhlas Pardubice"
              mx="auto"
            />
          </Box>
        </Link>
      </Stack>
    </Section>
  );
};

export default ContributorsSection;
