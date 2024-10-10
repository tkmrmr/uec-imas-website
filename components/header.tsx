import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import HeaderWrapper from "./header-wrapper";
import Logo from "./logo";
import Menu from "./menu";

export default function Header({ pathname }: { pathname: string }) {
  const [color, setColor] = useState("white");
  const [bgColor, setBgColor] = useState("whiteAlpha.50");
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (scrollY > 0) {
      setColor("black");
      setBgColor("white");
    } else {
      setColor("white");
      setBgColor("whiteAlpha.50");
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      {pathname === "/" ? (
        <HeaderWrapper bgColor={bgColor}>
          <Logo />
          <Menu color={color} />
        </HeaderWrapper>
      ) : (
        <HeaderWrapper bgColor="white">
          <Logo />
          <Menu />
        </HeaderWrapper>
      )}
    </>
  );
}
