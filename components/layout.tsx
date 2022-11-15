import { ChakraProvider } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";

//import theme from "../@chakra-ui/gatsby-plugin/theme";
import Footer from "./footer";

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
    <ChakraProvider>
      <Navbar dataActive={scrolled} />
      <main>{children}</main>
      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
