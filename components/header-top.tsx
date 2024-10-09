import { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Logo from "./logo";
import Menu from "./menu";

export default function Header() {
  const [color, setColor] = useState("white");
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (scrollY > 740) {
      setColor("black");
    } else {
      setColor("white");
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <Box
      as="header"
      bg="whiteAlpha.50"
      h="100px"
      w="100%"
      position="fixed"
      top={0}
      zIndex="docked"
      p="0 100px"
    >
      <nav>
        <Flex
          justify="space-between"
          alignItems="center"
          maxWidth="1920px"
          margin="0 auto"
        >
          <Logo />
          <Menu color={color} />
        </Flex>
      </nav>
    </Box>
  );
}
