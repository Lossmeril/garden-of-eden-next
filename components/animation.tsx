import * as React from "react";
import { Box, Image } from "@chakra-ui/react";

const Animation = () => {
  return (
    <Box className="animation-box">
      <Box className="elements">
        <Image
          className="imrich"
          src="img/imrich.webp"
          alt="Imrich, protagonista filmu Zahrada Boží"
        />
        <Box className="aether" w="100%" h="100%">
          <Image className="rotating" src="img/aether.webp" alt="" />
        </Box>
        <Box className="clock" w="100%" h="100%">
          <Image className="rotating-slow" src="img/clock.webp" alt="" />
        </Box>
        <Image className="smoke pulsing" src="img/smoke.webp" alt="" />
      </Box>
    </Box>
  );
};

export default Animation;
