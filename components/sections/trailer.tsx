import { AspectRatio } from "@chakra-ui/react";
import Section from "../section";

const TrailerSection = () => {
  return (
    <Section
      anchor="trailer"
      heading="Trailer"
      bg="rgba(103,71,11,0.5)"
      color="white"
    >
      <AspectRatio maxW="50vw" ratio={16 / 9} ml="auto" mr="auto">
        <iframe
          title="Zahrada Boží Trailer"
          src="https://www.youtube.com/embed/5LBdLa9f_zI"
          allowFullScreen
        />
      </AspectRatio>
    </Section>
  );
};
export default TrailerSection;
