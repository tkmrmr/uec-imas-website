import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import HeaderWrapper from "./header-wrapper";
import Logo from "./logo";
import Navi from "./navi";
import useStorage from "../lib/use-storage";

export default function Header({ pathname }: { pathname: string }) {
  const [color, setColor] = useState("white");
  const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0)");
  const [boxShadow, setBoxShadow] = useState("none");
  const [scrollY, setScrollY] = useStorage("howScroll", "0");

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (scrollY > 0) {
      setColor("black");
      setBgColor("whiteAlpha.800");
      setBoxShadow("md");
    } else {
      setColor("white");
      setBgColor("rgba(0, 0, 0, 0)");
      setBoxShadow("none");
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      {pathname === "/" ? (
        <HeaderWrapper bgColor={bgColor} boxShadow={boxShadow}>
          <Logo />
          <Navi color={color} />
        </HeaderWrapper>
      ) : (
        <HeaderWrapper bgColor="whiteAlpha.800" boxShadow="md">
          <Logo />
          <Navi />
        </HeaderWrapper>
      )}
    </>
  );
}
