import {
  SimpleGrid,
  Heading,
  Box,
  Text,
  VStack,
  Avatar,
  Card,
  CardBody,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Section from "../section";

const TeamMember = ({ name, image, role, children }: any) => {
  return (
    <Box w="100%" my={2}>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <Avatar size="2xl" name={name} src={image} />
        </GridItem>
        <GridItem colSpan={4} w="100%" p={4}>
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
  return (
    <Section anchor="about" heading="O filmu" bg="white">
      <Box className="center">
        <Text>
          &quot;To bylo už dávno. To jsem byl ještě mladý a krásný. Teď už jsem
          jenom krásný...&quot;
        </Text>
        <Text>- Imrich Špitálský</Text>
      </Box>
      <SimpleGrid columns={2} gap={12}>
        <Box p={12}>
          <Heading as="h3" className="ordinary-font" mb={4} mt={6}>
            Treatment
          </Heading>
          <Text>
            Dokumentární snímek zachycující intimní portrét muže smiřujícího se
            se svým věkem a ztrátou celoživotního díla. Prožívající podzim svého
            života pečuje o svou zahradu, vtipkuje se svou ženou a vzpomíná na
            celoživotní cestu plnou lásky k přírodě, radosti, strastí a cibulí.
          </Text>
          <Heading as="h3" className="ordinary-font" mb={4} mt={6}>
            Synopse
          </Heading>
          <Text>
            Před padesáti lety si pronajal Imrich pozemek na okraji Ústí nad
            Orlicí v zahrádkářské osadě. V té době ovšem pozemek nebyl ničím než
            kopřivami zarostlou bažinou. Pocházeje z jižního Slovenska, kde půda
            znamenala vše, Imrich věnoval většinu svého života zkultivování své
            zahrady, která se stala jeho láskou a náplní volného času.
          </Text>
          <Text>
            Od jara do zimy, rok za rokem se o ni staral a vedl zahrádkářský
            výbor. Mezitím přišly děti, vnoučata a změna režimu. Po revoluci se
            však pozemek stal předmětem církevních restitucí a veškerá snaha o
            jeho odkoupení narazila na nepřátelský odpor. Imrich byl tímto
            rozhodnutím zdrcen, ale dodnes nadále aktivně pečuje o zahrádku.
          </Text>
          <Text>
            Ve svém boji musí čelit stáří, počasí, škůdcům, vlastníkům půdy a
            zhoršujícímu se zdravotnímu stavu. Existuje šance, že se Imrich „na
            stará kolena“ vzdá zahrady a prodá ji, nebo se mu stane tento kus
            země osudným?
          </Text>
          <Text>
            Dokumentární film nabízí intimní portrét stárnoucího člověka s
            láskou k přírodě, který se smiřiuje se svým věkem a ztrátou
            celoživotního díla. Mezitím vzpomíná s humorem na své mládí,
            vtipkuje se svou ženou a pyšní se z každého výsledku a malého
            vítězství, které mu půda a život dopřeje.
          </Text>
        </Box>
        <Box p={12}>
          <Heading as="h3" className="ordinary-font" mb={4} mt={6}>
            Tým
          </Heading>
          <VStack gap={4}>
            <TeamMember
              name="Michal Špitálský"
              role="režisér"
              image="/img/avatars/michal.webp"
            >
              <Text>Michal lorem ipsum dolor sit amet</Text>
            </TeamMember>
            <TeamMember
              name="Jakub Tesařík"
              role="produkce"
              image="/img/avatars/jakub.webp"
            >
              <Text>Kuba lorem ipsum dolor sit amet</Text>
            </TeamMember>
            <TeamMember
              name="Sam Enticknap"
              role="hudba"
              image="/img/avatars/sam.webp"
            >
              <Text>Sam lorem ipsum dolor sit amet</Text>
            </TeamMember>
          </VStack>
        </Box>
      </SimpleGrid>
    </Section>
  );
};

export default AboutSection;
