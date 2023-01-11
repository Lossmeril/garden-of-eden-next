import { Box, Button, Center, Heading, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Custom404() {
  const { t } = useTranslation();
  return (
    <>
      <Box className="header-section" h="100vh">
        <Box
          h="100vh"
          pt={{ base: 6, lg: 0 }}
          overflow={{ base: "visible", xl: "hidden" }}
          position="relative"
        >
          <Center h="100%">
            <VStack>
              <Heading as="h1" size="4xl">
                404
              </Heading>
              <Heading as="h2" size="2xl">
                {t("404")}
              </Heading>
              <Link href="/">
                <Button mt={12} size="lg" colorScheme="green">
                  {t("404return")}
                </Button>
              </Link>
            </VStack>
          </Center>
        </Box>
      </Box>
    </>
  );
}
