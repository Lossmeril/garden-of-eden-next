import * as React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Section = ({ anchor, heading, bg, color, children }: any) => {
  return (
    <Box
      minH="100vh"
      className="section"
      id={anchor}
      py={12}
      px={{ base: 0, sm: 4, md: 8, lg: 12 }}
      bg={bg ? bg : "transparent"}
      color={color ? color : "black"}
    >
      <Heading my={10} size="4xl" className="center">
        {heading}
      </Heading>
      {children}
    </Box>
  );
};

export default Section;
