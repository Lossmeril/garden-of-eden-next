import * as React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Section = ({ anchor, heading, bg, color, children }: any) => {
  return (
    <Box
      minH="100vh"
      className="section"
      id={anchor}
      p={12}
      bgColor={bg ? bg : "transparent"}
      color={color ? color : "black"}
    >
      <Heading my={10} size="4xl">
        {heading}
      </Heading>
      {children}
    </Box>
  );
};

export default Section;
