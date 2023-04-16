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
  AspectRatio,
  Spinner,
} from "@chakra-ui/react";
import Section from "../section";
import Link from "next/link";

/*IMPORT ICONS*/
import { BiChevronRight } from "react-icons/bi";
import { IoHeartCircleOutline } from "react-icons/io5";
import { RiArrowRightSFill } from "react-icons/ri";

/*IMPORT TRANSLATIONS*/
import { useTranslation } from "react-i18next";

/*IMPORT LINKS*/
import links from "../../datasets/links";

import Balancer from "react-wrap-balancer";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const LazyYouTube = dynamic(() => import("../youtube-support"), {
  suspense: true,
});

const SupportCard = ({ name, image, children }: any) => {
  const { t } = useTranslation();
  return (
    <Card
      maxW="md"
      mx={{ base: 6, sm: 0 }}
      bg="white"
      textAlign="left"
      variant="outlined"
      justify="bottom"
    >
      <CardBody h="475px" flex="unset">
        <Image src={image} borderRadius="lg" alt={name} />
        <Stack mt="6" spacing="3">
          <Heading
            as="h3"
            size="md"
            className="ordinary-font"
            textAlign="center"
          >
            {name}
          </Heading>
          <Text textAlign="center">
            <Balancer>{children}</Balancer>
          </Text>
        </Stack>
      </CardBody>
      <CardFooter h="100px" justify="center">
        <Link href={links.hitHit} target="_blank">
          <Button colorScheme="green" rightIcon={<BiChevronRight />}>
            {t("wantThisReward")}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const SupportSection = () => {
  const { t } = useTranslation();
  return (
    <Section
      anchor="support"
      heading={t("supportTitle")}
      bg="rgba(103,71,11,0.5)"
      color="white"
    >
      <Box textAlign="center" p={{ base: 4, xl: 12 }}>
        <Box mt="-50px" mb={8}>
          <AspectRatio
            maxW={{ base: "100%", lg: "66%", xl: "33%" }}
            ratio={16 / 9}
            ml="auto"
            mr="auto"
          >
            <Suspense
              fallback={
                <Box bgColor="blackAlpha.400">
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="whiteAlpha.800"
                    color="green.500"
                    size="xl"
                  />
                </Box>
              }
            >
              <LazyYouTube />
            </Suspense>
          </AspectRatio>
        </Box>
        <Container maxW="container.xl">
          <Text fontSize="lg" mb={4}>
            <Balancer>{t("supportPar1")}</Balancer>
          </Text>
          <Text fontSize="lg" mb={8}>
            <Balancer>{t("supportPar2")}</Balancer>
          </Text>
          <Link href={links.hitHit} target="_blank">
            <Button
              size={{ base: "md", lg: "lg" }}
              colorScheme="green"
              leftIcon={<IoHeartCircleOutline />}
              rightIcon={<RiArrowRightSFill />}
              mb={8}
            >
              {t("supportButton1")}
            </Button>
          </Link>
        </Container>
        <Wrap
          align="center"
          spacing={{ base: 2, md: 8 }}
          justify="center"
          py={5}
        >
          <WrapItem w={{ base: "100%", sm: "75%", lg: "50%", xl: "20%" }}>
            <SupportCard
              name={t("thankYouLetter")}
              image="/img/mockups/letter.jpg"
            >
              {t("thankYouLetterDesc")}
            </SupportCard>
          </WrapItem>
          <WrapItem w={{ base: "100%", sm: "75%", lg: "50%", xl: "20%" }}>
            <SupportCard name={t("a3Poster")} image="/img/mockups/poster.jpg">
              {t("a3PosterDesc")}
            </SupportCard>
          </WrapItem>
          <WrapItem w={{ base: "100%", sm: "75%", lg: "50%", xl: "20%" }}>
            <SupportCard name={t("pieceOfLand")} image="/img/mockups/land.jpg">
              {t("pieceOfLandDesc")}
            </SupportCard>
          </WrapItem>
        </Wrap>
      </Box>
    </Section>
  );
};

export default SupportSection;
