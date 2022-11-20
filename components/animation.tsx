import * as React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

const Animation = () => {
  return (
    <Box className="animation-box">
      <Box className="elements">
        <Image
          className="imrich"
          src="/img/imrich.webp"
          alt="Imrich, protagonista filmu Zahrada Boží"
          width={637}
          height={845}
        />
        <Box className="aether" w="100%" h="100%">
          <Image
            className="rotating"
            src="/img/aether.webp"
            alt=""
            width={933}
            height={933}
          />
        </Box>
        <Box className="clock" w="100%" h="100%">
          <Image
            className="rotating-slow"
            src="/img/clock.webp"
            alt=""
            width={933}
            height={933}
          />
        </Box>
        <Box className="smoke">
          <Image src="/img/smoke.webp" alt="" width={933} height={933} />
        </Box>
      </Box>
    </Box>
  );
};

export default Animation;
