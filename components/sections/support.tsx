import {
  Wrap,
  WrapItem,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Button,
  CardFooter,
  Image,
  Box,
  Container,
} from "@chakra-ui/react";
import Section from "../section";

import { BiChevronRight } from "react-icons/bi";
import { IoHeartCircleOutline } from "react-icons/io5";
import { RiArrowRightSFill } from "react-icons/ri";
import Link from "next/link";

const SupportCard = ({ name, image, children }: any) => {
  return (
    <Card mx={{ base: 6, sm: 0 }} bg="white" textAlign="left">
      <CardBody>
        <Image src={image} borderRadius="lg" alt="" />
        <Stack mt="6" spacing="3">
          <Heading as="h3" size="md" className="ordinary-font">
            {name}
          </Heading>
          <Text>{children}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button colorScheme="green" rightIcon={<BiChevronRight />}>
          Chci tuto odměnu!
        </Button>
      </CardFooter>
    </Card>
  );
};

const SupportSection = () => {
  return (
    <Section
      anchor="support"
      heading="Podpořte film"
      bg="rgba(103,71,11,0.5)"
      color="white"
    >
      <Box textAlign="center" p={{ base: 4, xl: 12 }}>
        <Container maxW="container.xl">
          <Text fontSize="lg" mb={4}>
            Film můžete podpořit finančně skrze crowdufundingovou platformu{" "}
            <strong>HitHit</strong>. Níže naleznete stručný popis odměn, ze
            kterých si můžete na <strong>HitHitu</strong> vybrat.
          </Text>
          <Text fontSize="lg" mb={8}>
            Chcete pomoci nefinanční cestou? Pošlete náš film příbuzným, nebo o
            něm povězte kamarádům!
          </Text>
          <Button
            size={{ base: "md", lg: "lg" }}
            colorScheme="green"
            leftIcon={<IoHeartCircleOutline />}
            rightIcon={<RiArrowRightSFill />}
            mb={8}
          >
            Podpořte film na HitHitu!
          </Button>
        </Container>
        <Wrap
          align="center"
          spacing={{ base: 2, lg: 8 }}
          justify="center"
          py={5}
          className="downloads-wrap"
        >
          <WrapItem w={{ base: "100%", sm: "75%", lg: "50%", xl: "20%" }}>
            <SupportCard
              name="Jakub Tesařík"
              image="/img/mockups/blank.png"
              role="producent"
            ></SupportCard>
          </WrapItem>
        </Wrap>
      </Box>
    </Section>
  );
};

export default SupportSection;
