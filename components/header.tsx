import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import HeaderWrapper from "./header-wrapper";
import Logo from "./logo";
import Navi from "./navi";

export default function Header({ pathname }: { pathname: string }) {
  const [color, setColor] = useState("white");
  const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0)");
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
      setBgColor("rgba(0, 0, 0, 0)");
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
          <Navi color={color} />
        </HeaderWrapper>
      ) : (
        <HeaderWrapper bgColor="white">
          <Logo />
          <Navi />
        </HeaderWrapper>
      )}
    </>
  );
}
