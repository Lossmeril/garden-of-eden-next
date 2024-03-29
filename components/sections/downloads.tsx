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
  Link,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { BiChevronDown } from "react-icons/bi";
import Section from "../section";
import Balancer from "react-wrap-balancer";
import links from "../../datasets/links";

const DownloadCard = ({ name, image, href, children }: any) => {
  const { t } = useTranslation();

  return (
    <Card mx={{ base: 6, sm: 0 }} maxW="md" textAlign="center">
      <CardBody>
        <Image src={image} borderRadius="lg" alt="" />
        <Stack mt="6" spacing="3">
          <Heading as="h3" size="md" className="ordinary-font">
            {name}
          </Heading>
          <Text>{children}</Text>
        </Stack>
      </CardBody>
      <CardFooter justifyContent="center">
        <Link href={href} target="_blank">
          <Button colorScheme="green" rightIcon={<BiChevronDown />}>
            {t("download")} (.zip)
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const DownloadsSection = () => {
  const { t } = useTranslation();

  return (
    <Section anchor="press" heading={t("downloadsTitle")} bg="white">
      <Wrap
        align="center"
        spacing={{ base: 4, sm: 8 }}
        justify="center"
        py={5}
        className="downloads-wrap"
      >
        {/* KARTA PRO STÁHNUTÍ LOGA */}
        <WrapItem
          w={{ base: "100%", sm: "55%", md: "30%" }}
          justifyContent="center"
        >
          <DownloadCard
            name={t("logotype")}
            image="/img/mockups/logotype.webp"
            href={links.logotype}
          >
            <Balancer>{t("logotypeDesc")}</Balancer>
          </DownloadCard>
        </WrapItem>

        {/* KARTA PRO STÁHNUTÍ PLAKÁTŮ */}
        {/* <WrapItem
          w={{ base: "100%", sm: "55%", md: "30%" }}
          justifyContent="center"
        >
          <DownloadCard name={t("posters")} image="/img/mockups/blank.png">
            <Balancer>
              O fortuna velut luna, statu variabilis, semper screscis aut
              decrescis, vita detestabilis.
            </Balancer>
          </DownloadCard>
        </WrapItem> */}

        {/* KARTA PRO STÁHNUTÍ PRESS-KITU */}
        {/* <WrapItem
          w={{ base: "100%", sm: "55%", md: "30%" }}
          justifyContent="center"
        >
          <DownloadCard name={t("pressKit")} image="/img/mockups/blank.png">
            <Balancer>
              {" "}
              O fortuna velut luna, statu variabilis, semper screscis aut
              decrescis, vita detestabilis.
            </Balancer>
          </DownloadCard>
        </WrapItem> */}
      </Wrap>
    </Section>
  );
};

export default DownloadsSection;
