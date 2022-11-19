import { SimpleGrid, Heading, Box, Text } from "@chakra-ui/react";
import Section from "../section";

const AboutSection = () => {
  return (
    <Section anchor="about" heading="O filmu" bg="white">
      <SimpleGrid columns={2}>
        <Box>
          <Text>
            &quot;To bylo už dávno. To jsem byl ještě mladý a krásný. Teď už
            jsem jenom krásný...&quot;
          </Text>
          <Text>- Imrich Špitálský</Text>
          <Heading as="h3">Treatment</Heading>
          <Text>
            Dokumentární snímek zachycující intimní portrét muže smiřujícího se
            se svým věkem a ztrátou celoživotního díla. Prožívající podzim svého
            života pečuje o svou zahradu, vtipkuje se svou ženou a vzpomíná na
            celoživotní cestu plnou lásky k přírodě, radosti, strastí a cibulí.
          </Text>
          <Heading as="h3">Synopse</Heading>
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
        <Box>
          <Heading as="h3">Tým</Heading>
          <Heading as="h4">Michal Špitálský</Heading>
          <Heading as="h4">Jakub Tesařík</Heading>
          <Heading as="h4">Sam Enticknap</Heading>
        </Box>
      </SimpleGrid>
    </Section>
  );
};

export default AboutSection;
