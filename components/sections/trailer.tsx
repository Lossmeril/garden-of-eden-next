import { AspectRatio, Box } from "@chakra-ui/react";
import Section from "../section";

const TrailerSection = () => {
  return (
    <Section
      anchor="trailer"
      heading="Trailer"
      bg="rgba(103,71,11,0.5)"
      color="white"
    >
      <Box m={4}>
        <AspectRatio
          maxW={{ base: "100%", lg: "75%", xl: "50%" }}
          ratio={16 / 9}
          ml="auto"
          mr="auto"
        >
          <iframe
            title="Zahrada Boží Trailer"
            src="https://www.youtube.com/embed/5LBdLa9f_zI"
            allowFullScreen
          />
        </AspectRatio>
      </Box>
    </Section>
  );
};
export default TrailerSection;
