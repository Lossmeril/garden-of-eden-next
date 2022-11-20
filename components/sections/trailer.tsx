import { AspectRatio, Box, Center, Spinner } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Section from "../section";

const LazyYouTube = dynamic(() => import("../youtube"), {
  suspense: true,
});

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
    </Section>
  );
};
export default TrailerSection;
