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

const DownloadCard = ({ name, image, children }: any) => {
  return (
    <Card maxW="sm">
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
        <Button colorScheme="green" rightIcon={<BiChevronDown />}>
          Stáhnout (.zip)
        </Button>
      </CardFooter>
    </Card>
  );
};

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
          <DownloadCard name="Logotyp" image="/img/Impuls HK black.png">
            O fortuna velut luna, statu variabilis, semper screscis aut
            decrescis, vita detestabilis.
          </DownloadCard>
        </WrapItem>

        {/* KARTA PRO STÁHNUTÍ PLAKÁTŮ */}
        <WrapItem>
          <DownloadCard name="Plakáty" image="/img/Impuls HK black.png">
            O fortuna velut luna, statu variabilis, semper screscis aut
            decrescis, vita detestabilis.
          </DownloadCard>
        </WrapItem>

        {/* KARTA PRO STÁHNUTÍ PRESS-KITU */}
        <WrapItem>
          <DownloadCard name="Press-kit" image="/img/Impuls HK black.png">
            O fortuna velut luna, statu variabilis, semper screscis aut
            decrescis, vita detestabilis.
          </DownloadCard>
        </WrapItem>
      </Wrap>
    </Section>
  );
};

export default DownloadsSection;