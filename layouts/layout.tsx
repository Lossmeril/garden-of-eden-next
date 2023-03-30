import { ChakraProvider, LightMode } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";

import theme from "../styles/theme";
import Footer from "../components/footer";

const Layout = ({ children }: any) => {
  // determined if page has scrolled and if the view is on mobile
  const [scrolled, setScrolled] = useState(false);

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <ChakraProvider theme={theme}>
      <LightMode>
        <Navbar dataActive={scrolled} />
        <main>{children}</main>
        <Footer />
      </LightMode>
    </ChakraProvider>
  );
};

export default Layout;
