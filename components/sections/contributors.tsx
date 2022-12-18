import {
  Heading,
  Center,
  Stack,
  Wrap,
  WrapItem,
  Box,
  Text,
  Image,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import contributors from "../../datasets/contributors";
import Section from "../section";

const ContributorsSection = () => {
  return (
    <Section anchor="donations" heading="Projekt podporují" bg="white">
      <Heading
        as="h3"
        size="lg"
        mt="4rem"
        mb={6}
        className="center ordinary-font"
      >
        Generální partneři
      </Heading>
      <Center>
        <Link href="">
          <Box
            px={5}
            py={10}
            borderRadius="1rem"
            w={{ base: "100%", md: "100%" }}
            bg="green.100"
          >
            <Text textAlign="center">Vaše logo, nebo jméno může být tady!</Text>
          </Box>
        </Link>
        <Box mx={{ base: 4, md: 12 }}>
          <Image
            className="partner-logo"
            src="/img/Impuls HK black.png"
            alt="Centrum uměleckých aktivit Impuls Hradec Králové"
            mx="auto"
          />
        </Box>
      </Center>

      <Heading
        as="h3"
        size="lg"
        mt="5rem"
        mb={6}
        className="center ordinary-font"
      >
        Za podpory
      </Heading>
      <Stack
        my={6}
        direction={{ base: "column", md: "row" }}
        spacing={12}
        justify="center"
      >
        <Box mx={{ base: 4, md: 12 }}>
          <Image
            className="partner-logo"
            src="/img/nu.png"
            alt="Northumbria University v Newcastle upon Tyne"
            mx="auto"
          />
        </Box>
        <Box mx={{ base: 4, md: 12 }}>
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
        </Box>
      </Stack>

      <Heading
        as="h3"
        size="lg"
        mt="5rem"
        mb={4}
        className="center ordinary-font"
      >
        Skrze HitHit přispěli
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
            w={{ base: "90%", sm: "50%", md: "unset" }}
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
              <Link href="">
                <Box px={5} py={3} borderRadius="md" bg="green.100">
                  <Text
                    className="contributor"
                    textAlign="center"
                    fontSize="lg"
                  >
                    Vaše jméno může být tady!
                  </Text>
                </Box>
              </Link>
            </Center>
          </Box>
        </WrapItem>
      </Wrap>
    </Section>
  );
};

export default ContributorsSection;
