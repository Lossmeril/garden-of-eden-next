import {
  Wrap,
  WrapItem,
  Card,
  CardBody,
  Stack,
  Heading,
  CardFooter,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import Section from "../section";

const DownloadsSection = () => {
  return (
    <Section anchor="press" heading="Ke stažení" bg="white">
      <Wrap
        align="center"
        spacing={8}
        justify="center"
        py={5}
        className="downloads-wrap"
      >
        {/* KARTA PRO STÁHNUTÍ LOGA */}
        <WrapItem>
          <Card maxW="sm">
            <CardBody>
              <Image src="/img/Impuls HK black.png" borderRadius="lg" alt="" />
              <Stack mt="6" spacing="3">
                <Heading as="h3" size="md">
                  Logotyp
                </Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Button colorScheme="green" rightIcon={<BiChevronDown />}>
                Stáhnout (.zip)
              </Button>
            </CardFooter>
          </Card>
        </WrapItem>

        {/* KARTA PRO STÁHNUTÍ PLAKÁTŮ */}
        <WrapItem>
          <Card maxW="sm">
            <CardBody>
              <Image src="/img/Impuls HK black.png" borderRadius="lg" alt="" />
              <Stack mt="6" spacing="3">
                <Heading as="h3" size="md">
                  Plakáty
                </Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Button colorScheme="green" rightIcon={<BiChevronDown />}>
                Stáhnout (.zip)
              </Button>
            </CardFooter>
          </Card>
        </WrapItem>

        {/* KARTA PRO STÁHNUTÍ PRESS-KITU */}
        <WrapItem>
          <Card maxW="sm">
            <CardBody>
              <Image src="/img/Impuls HK black.png" borderRadius="lg" alt="" />
              <Stack mt="6" spacing="3">
                <Heading as="h3" size="md">
                  Press-kit
                </Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Button colorScheme="green" rightIcon={<BiChevronDown />}>
                Stáhnout (.zip)
              </Button>
            </CardFooter>
          </Card>
        </WrapItem>
      </Wrap>
    </Section>
  );
};

export default DownloadsSection;
