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
import Section from "../section";

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
  return (
    <Section anchor="about" heading="O filmu" bg="white">
      <Box className="center">
        <Text fontSize="xl">
          &quot;To bylo už dávno. To jsem byl ještě mladý a krásný. Teď už jsem
          jenom krásný...&quot;
        </Text>
        <Text>- Imrich Špitálský</Text>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        gap={{ base: 4, xl: 12 }}
        px={{ base: 4, xl: 12 }}
      >
        <Box p={{ base: 4, xl: 12 }} textAlign={{ base: "center", md: "left" }}>
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
          <Text mb={4}>
            Před padesáti lety si pronajal Imrich pozemek na okraji Ústí nad
            Orlicí v zahrádkářské osadě. V té době ovšem pozemek nebyl ničím než
            kopřivami zarostlou bažinou. Pocházeje z jižního Slovenska, kde půda
            znamenala vše, Imrich věnoval většinu svého života zkultivování své
            zahrady, která se stala jeho láskou a náplní volného času.
          </Text>
          <Text mb={4}>
            Od jara do zimy, rok za rokem se o ni staral a vedl zahrádkářský
            výbor. Mezitím přišly děti, vnoučata a změna režimu. Po revoluci se
            však pozemek stal předmětem církevních restitucí a veškerá snaha o
            jeho odkoupení narazila na nepřátelský odpor. Imrich byl tímto
            rozhodnutím zdrcen, ale dodnes nadále aktivně pečuje o zahrádku.
          </Text>
          <Text mb={4}>
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
        <Box p={{ base: 4, xl: 12 }} textAlign={{ base: "center", md: "left" }}>
          <Heading
            as="h3"
            className="ordinary-font"
            mb={4}
            mt={{ base: 0, md: 6 }}
          >
            Tým
          </Heading>
          <VStack gap={12}>
            <TeamMember
              name="Michal Špitálský"
              role="režisér"
              image="/img/avatars/michal.webp"
            >
              <Text>
                Michal je studentem oboru Film and TV Production na
                Northumbrijské univerzitě a s příběhem byl od samého začátku a
                měl šanci pozorovat Imricha v dobrém i zlém. Michal je v týmu
                ten &quot;kreativní&quot;.
              </Text>
            </TeamMember>
            <TeamMember
              name="Jakub Tesařík"
              role="producent"
              image="/img/avatars/jakub.webp"
            >
              <Text>
                Jakub studuje Management v kreativním průmyslu na VŠKK a s
                Michalem pracuje už nějaký ten pátek. Jeho profesní zaměření mu
                umožňuje být komunikační a organizační složkou týmu.
              </Text>
            </TeamMember>
            <TeamMember
              name="Sam Enticknap"
              role="hudba"
              image="/img/avatars/sam.webp"
            >
              <Text>
                Sam vystudoval obor Film Music na konzervatoři v Yorku a k
                projektu se dostal úplnou náhodou. I přesto se s nadšením vrhnul
                do skládání, aby za pomoci originální hudby vhodně dokreslil
                atmosféru.
              </Text>
            </TeamMember>
          </VStack>
        </Box>
      </SimpleGrid>
    </Section>
  );
};

export default AboutSection;
