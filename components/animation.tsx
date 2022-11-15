import * as React from "react";
import { Box } from "@chakra-ui/react";

const Animation = () => {
  return (
    <Box className="animation-box">
      <Box className="elements">
        <img className="imrich" src="img/imrich.webp" />
        <Box className="aether" w="100%" h="100%">
          <img className="rotating" src="img/aether.png" />
        </Box>
        <Box className="clock" w="100%" h="100%">
          <img className="rotating-slow" src="img/clock.png" />
        </Box>
        <img className="smoke pulsing" src="img/smoke.png" />
      </Box>
    </Box>
  );
};

export default Animation;
