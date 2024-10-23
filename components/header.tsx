import { useState, useEffect, useCallback } from "react";
import HeaderWrapper from "./header-wrapper";
import Logo from "./logo";
import Navi from "./navi";
import useStorage from "../lib/use-storage";

export default function Header({ pathname }: { pathname: string }) {
  const [color, setColor] = useState("white");
  const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0)");
  const [boxShadow, setBoxShadow] = useState("none");
  const [, setScrollY] = useStorage("howScroll", 0);
  const [logoIsFiltered, setLogoIsFiltered] = useState(true);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, [setScrollY]);

  useEffect(() => {
    const initialScrollY = window.scrollY;
    setScrollY(initialScrollY);

    if (initialScrollY > 0) {
      setColor("gray.900");
      setBgColor("whiteAlpha.800");
      setBoxShadow("md");
      setLogoIsFiltered(false);
    } else {
      setColor("white");
      setBgColor("rgba(0, 0, 0, 0)");
      setBoxShadow("none");
      setLogoIsFiltered(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, setScrollY]);

  return (
    <>
      {pathname === "/" ? (
        <HeaderWrapper bgColor={bgColor} boxShadow={boxShadow}>
          <Logo isFiltered={logoIsFiltered} />
          <Navi color={color} pathname={pathname} />
        </HeaderWrapper>
      ) : (
        <HeaderWrapper bgColor="whiteAlpha.800" boxShadow="md">
          <Logo />
          <Navi pathname={pathname} />
        </HeaderWrapper>
      )}
    </>
  );
}
