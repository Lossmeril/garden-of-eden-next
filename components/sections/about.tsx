import {
  SimpleGrid,
  Heading,
  Box,
  Text,
  VStack,
  Avatar,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Section from "../section";
import Balancer from "react-wrap-balancer";

const TeamMember = ({ name, image, role, children }: any) => {
  return (
    <Box w="100%">
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={{ base: 2, md: 6 }}
        alignItems="center"
      >
        <GridItem colSpan={{ base: 5, md: 1 }}>
          <Avatar size={{ base: "xl", md: "2xl" }} name={name} src={image} />
        </GridItem>
        <GridItem colSpan={{ base: 5, md: 4 }} w="100%" px={4}>
          <Heading as="h4" size="md" className="ordinary-font">
            {name}
          </Heading>
          <Heading as="p" size="sm" className="ordinary-font">
            {role}
          </Heading>
          <Box mt={2}>{children}</Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <Section anchor="about" heading={t("aboutTitle")} bg="white">
      <Box className="center">
        <Text fontSize="xl">&quot;{t("quote")}&quot;</Text>
        <Text>- Imrich Špitálský</Text>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        gap={{ base: 4, xl: 12 }}
        px={{ base: 4, xl: 12 }}
      >
        <Box p={{ base: 4, xl: 12 }} textAlign={{ base: "center", md: "left" }}>
          <Heading as="h3" className="ordinary-font" mb={4} mt={6}>
            {t("treatment")}
          </Heading>
          <Text>{t("treatmentContent")}</Text>
          <Heading as="h3" className="ordinary-font" mb={4} mt={6}>
            {t("synopsis")}
          </Heading>
          <Text mb={4}>
            <Balancer>{t("synopsisPar1")}</Balancer>
          </Text>
          <Text mb={4}>
            <Balancer>{t("synopsisPar2")}</Balancer>
          </Text>
          <Text mb={4}>
            <Balancer>{t("synopsisPar3")}</Balancer>
          </Text>
          <Text>
            <Balancer>{t("synopsisPar4")}</Balancer>
          </Text>
        </Box>
        <Box p={{ base: 4, xl: 12 }} textAlign={{ base: "center", md: "left" }}>
          <Heading
            as="h3"
            className="ordinary-font"
            mb={4}
            mt={{ base: 0, md: 6 }}
          >
            {t("crew")}
          </Heading>
          <VStack gap={12}>
            <TeamMember
              name="Michal Špitálský"
              role={t("director")}
              image="/img/avatars/michal.webp"
            >
              <Text>
                <Balancer>{t("directorDesc")}</Balancer>
              </Text>
            </TeamMember>
            <TeamMember
              name="Jakub Tesařík"
              role={t("producer")}
              image="/img/avatars/jakub.webp"
            >
              <Text>
                <Balancer>{t("producerDesc")}</Balancer>
              </Text>
            </TeamMember>
            <TeamMember
              name="Sam Enticknap"
              role={t("composer")}
              image="/img/avatars/sam.webp"
            >
              <Text>
                <Balancer>{t("composerDesc")}</Balancer>
              </Text>
            </TeamMember>
          </VStack>
        </Box>
      </SimpleGrid>
    </Section>
  );
};

export default AboutSection;
