import { useTranslation } from "react-i18next";
import {
  Box,
  Container,
  Stack,
  Image,
  Spacer,
  Button,
  Center,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { IoHeartCircleOutline } from "react-icons/io5";
import { RiArrowRightSFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import i18n from "../modules/i18n";
import Link from "next/link";

const changeLang = () => {
  return () => {
    i18n.language === "cs"
      ? i18n?.changeLanguage("en")
      : i18n?.changeLanguage("cs");
  };
};

const NavbarItem = ({ link, target, children, mobile }: any) => {
  if (!mobile) {
    return (
      <NextLink href={link} target={target}>
        <Text
          fontSize={{ base: "md", lg: "lg", xl: "xl" }}
          mr={{ base: 4, xl: 12 }}
        >
          {children}
        </Text>
      </NextLink>
    );
  } else {
    return (
      <MenuItem>
        <NextLink href={link} target={target}>
          <Text>{children}</Text>
        </NextLink>
      </MenuItem>
    );
  }
};

const MobileMenu = () => {
  const { t } = useTranslation();
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<GiHamburgerMenu />} />
      <MenuList w="100vw" borderRadius="0">
        <NavbarItem link="/" mobile="true">
          {t("home")}
        </NavbarItem>
        <NavbarItem link="#about" mobile="true">
          {t("about")}
        </NavbarItem>
        <NavbarItem link="#trailer" mobile="true">
          {t("trailer")}
        </NavbarItem>
        <NavbarItem link="#donations" mobile="true">
          {t("supporters")}
        </NavbarItem>
        <NavbarItem link="#contacts" mobile="true">
          {t("contacts")}
        </NavbarItem>
        <NavbarItem link="#press" mobile="true">
          {t("downloads")}
        </NavbarItem>
      </MenuList>
    </Menu>
  );
};

const Navbar = ({ dataActive }: any) => {
  const { t } = useTranslation();
  return (
    <Box
      as="nav"
      w="100%"
      zIndex={10}
      position="fixed"
      className="navbar"
      data-active={dataActive}
    >
      <Container display="flex" p={2} maxW="container.2xl" flexWrap="wrap">
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", lg: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="left"
          flexGrow={1}
          my={4}
          mx={12}
        >
          <Link href="/">
            <Image
              src={"/img/logos/" + t("logoPrefix") + "black.png"}
              alt="Zahrada Boží"
              h="50px"
              style={{ transform: "scale(1.5)" }}
            />
          </Link>
          <Spacer />
          <Center height="100%">
            <NavbarItem link="/">{t("home")}</NavbarItem>
            <NavbarItem link="#about">{t("about")}</NavbarItem>
            <NavbarItem link="#trailer">{t("trailer")}</NavbarItem>
            <NavbarItem link="#donations">{t("supporters")}</NavbarItem>
            <NavbarItem link="#contacts">{t("contacts")}</NavbarItem>
            <NavbarItem link="#press">{t("downloads")}</NavbarItem>
          </Center>

          <Spacer />

          <Button
            size="lg"
            colorScheme="green"
            leftIcon={<IoHeartCircleOutline />}
            rightIcon={<RiArrowRightSFill />}
            m={0}
          >
            {t("supportButtonNavbar")}
          </Button>
          <Button colorScheme="white" onClick={changeLang()} m={0} size="lg">
            {i18n.language === "cs" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt="english flag"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrUlEQVR4nO2Wz08aURDH+d+8E8V40hiNHjx58aYHrya2aZsa2tQmrY2JTRp7qLa1WGloNaggqClYI2RBBfkpsPxaFthvMw/3rbDQVK3lwiTDJuS9+czOm/edNRg61rH7MuPkR7TDDfQjJ5NQzRcr4/k3EbOf0y2dzN7VxZzsT2vJ3+7kEA2n4JuZgau/XwM7e3sRWVkBFIUFksoKNrxFPFi7G/jp1wwOTktIWK1w9vUhYDajWixq4LRwCs/EBH6OjyMvCPztw+kKFraytwJ/OixAjCRwPD2Ng5ERZL1eHpeDWWZBCTGLhWUmzM2hUiiwRVQEyvrJeuavwK83swhflhFdXYWjpwfB+Xko5XKtkrKCdU9BA6ublugszhI4obMYGEBqd5dnmZMU9hatwI8tGWydSMidnvPqFQKBpr1jbASTP1xLs/NNutzYHxrCr6kplGIxHiCYKOvA7/fySGdlhJaW4OjuZk+1X1L5Kt45cnWMpmDVX9hE+EM5nC0ssOa7WF7mwRrBOZ8Ph2NjOJqchBSNsv+qCrDjl/Doiz62UQXfxq6Db2pGFawG+V9ubDu4baWebaI4e4ES7yWSVFUIRI9XBw6nKjxoxuXC/vAwuw3iWbipAhqbgemu5ktXREWpE4JoUsKiPasDU2DaV5Rr+0gw6BY4TSZ2Ky7iBby5poB14JffRX5HyYrnmhCIfgG2Yy3zRrAa0GzNwBOSeYxSPM7EyD04iEv7NqsiKSAHb/sldu9YtpVKnRAch0t41jCtWoFVJ8Eg4WhW/oQQ0jdX9ugIB6OjtQXBCJad9YpzkyFBwkESWrniV2UZ54uLcJhMGphGFY0sGhDxDSsrCWnvv5jH8zYRQlw7QikS0cA0nGlIB4NJvPqhH4N3/RAg/+DO86bl4LZ8+nSsY4Z7st/VsmGwPVLtawAAAABJRU5ErkJggg=="
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt="česká vlajka"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtklEQVR4nO3W3StDYRwH8PO/uXHl0k5udiEvQ4pyYWWOw7w9e01e5jWWlZDX7WCbkMaEvKQJkdTIsEN4EL5yzM0indmeC/nV9/rT7+l5fr+H4/7rz1e+2Yf20RU4pVWm4TL0bvDiDCaWT3D9CNw8pT7OT1gYDkPbuICSlgD2Tm/ZwUSS0eiJorQrBI04A6f/APLDKxuYxCKOnCHbHIDOtoCt42t2MFG6l1HWuw+N6IVjcheX9y9sYBKLcewcubYgckxzWD+MsoNJLOX9R+BrfDAPbiNy+8wOJpKMuskLFDavQVs/i0Aowg4msehdR8iq8aOqbw1h+ZEdTCQZDe4rFDs2kWX0wbsRZgsXNa2C14+hJ1OHpbQ01eESOmphGtXiECJmO6jVqjpLamDlctmD0BrcCDY4EgKpWlh5TsIUrNUDiFoS65Kqgd8HSJ5pEbmV49gibb8G6U/wx8jcg8YgocPowo3FljSUfgcrS6J+HgXCOEKkNakg/QpW1mLnDniDB67aPtxZkg/SeFj5CBj9KBVGcWhqThlI42G+wg1PXTfuU9gljYfLdHZ40zMSmj6/Cfdff77eAJWfW2IR9ZwPAAAAAElFTkSuQmCC"
              />
            )}
          </Button>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          flexGrow={1}
          px={6}
          display={{ base: "flex", lg: "none" }}
        >
          <Link href="/">
            <Image src="/img/logos/cz_black.png" alt="Zahrada Boží" h="50px" />
          </Link>
          <Spacer />
          <Box
            ml={2}
            display={{ base: "inline-block", lg: "none" }}
            alignItems="center"
          >
            <MobileMenu />
          </Box>
          <Spacer />
          <Button colorScheme="white" onClick={changeLang()} m={0} size="lg">
            {i18n.language === "cs" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt="english flag"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrUlEQVR4nO2Wz08aURDH+d+8E8V40hiNHjx58aYHrya2aZsa2tQmrY2JTRp7qLa1WGloNaggqClYI2RBBfkpsPxaFthvMw/3rbDQVK3lwiTDJuS9+czOm/edNRg61rH7MuPkR7TDDfQjJ5NQzRcr4/k3EbOf0y2dzN7VxZzsT2vJ3+7kEA2n4JuZgau/XwM7e3sRWVkBFIUFksoKNrxFPFi7G/jp1wwOTktIWK1w9vUhYDajWixq4LRwCs/EBH6OjyMvCPztw+kKFraytwJ/OixAjCRwPD2Ng5ERZL1eHpeDWWZBCTGLhWUmzM2hUiiwRVQEyvrJeuavwK83swhflhFdXYWjpwfB+Xko5XKtkrKCdU9BA6ublugszhI4obMYGEBqd5dnmZMU9hatwI8tGWydSMidnvPqFQKBpr1jbASTP1xLs/NNutzYHxrCr6kplGIxHiCYKOvA7/fySGdlhJaW4OjuZk+1X1L5Kt45cnWMpmDVX9hE+EM5nC0ssOa7WF7mwRrBOZ8Ph2NjOJqchBSNsv+qCrDjl/Doiz62UQXfxq6Db2pGFawG+V9ubDu4baWebaI4e4ES7yWSVFUIRI9XBw6nKjxoxuXC/vAwuw3iWbipAhqbgemu5ktXREWpE4JoUsKiPasDU2DaV5Rr+0gw6BY4TSZ2Ky7iBby5poB14JffRX5HyYrnmhCIfgG2Yy3zRrAa0GzNwBOSeYxSPM7EyD04iEv7NqsiKSAHb/sldu9YtpVKnRAch0t41jCtWoFVJ8Eg4WhW/oQQ0jdX9ugIB6OjtQXBCJad9YpzkyFBwkESWrniV2UZ54uLcJhMGphGFY0sGhDxDSsrCWnvv5jH8zYRQlw7QikS0cA0nGlIB4NJvPqhH4N3/RAg/+DO86bl4LZ8+nSsY4Z7st/VsmGwPVLtawAAAABJRU5ErkJggg=="
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt="česká vlajka"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtklEQVR4nO3W3StDYRwH8PO/uXHl0k5udiEvQ4pyYWWOw7w9e01e5jWWlZDX7WCbkMaEvKQJkdTIsEN4EL5yzM0indmeC/nV9/rT7+l5fr+H4/7rz1e+2Yf20RU4pVWm4TL0bvDiDCaWT3D9CNw8pT7OT1gYDkPbuICSlgD2Tm/ZwUSS0eiJorQrBI04A6f/APLDKxuYxCKOnCHbHIDOtoCt42t2MFG6l1HWuw+N6IVjcheX9y9sYBKLcewcubYgckxzWD+MsoNJLOX9R+BrfDAPbiNy+8wOJpKMuskLFDavQVs/i0Aowg4msehdR8iq8aOqbw1h+ZEdTCQZDe4rFDs2kWX0wbsRZgsXNa2C14+hJ1OHpbQ01eESOmphGtXiECJmO6jVqjpLamDlctmD0BrcCDY4EgKpWlh5TsIUrNUDiFoS65Kqgd8HSJ5pEbmV49gibb8G6U/wx8jcg8YgocPowo3FljSUfgcrS6J+HgXCOEKkNakg/QpW1mLnDniDB67aPtxZkg/SeFj5CBj9KBVGcWhqThlI42G+wg1PXTfuU9gljYfLdHZ40zMSmj6/Cfdff77eAJWfW2IR9ZwPAAAAAElFTkSuQmCC"
              />
            )}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
