"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import HeaderWrapper from "./header-wrapper";
import Logo from "./logo";
import Navi from "./navi";
import useStorage from "../lib/use-storage";

export default function Header() {
  const pathname = usePathname();
  const [, setScrollY] = useStorage("howScroll", 0);
  const [isClear, setIsClear] = useState(true);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, [setScrollY]);

  useEffect(() => {
    const initialScrollY = window.scrollY;
    setScrollY(initialScrollY);

    if (initialScrollY > window.innerHeight) {
      setIsClear(false);
    } else {
      setIsClear(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, setScrollY]);

  return (
    <>
      {pathname === "/" ? (
        <>
          {/* 追従 */}
          <HeaderWrapper isClear={isClear}>
            <Logo />
            <Navi pathname={pathname} />
          </HeaderWrapper>
          {/* 一番上 */}
          <HeaderWrapper
            bgColor="rgba(0, 0, 0, 0)"
            darkBgColor="rgba(0, 0, 0, 0)"
            boxShadow="none"
            isMovingHeader={false}
            isBlur={false}
          >
            <Logo isFiltered={true} />
            <Navi color="white" pathname={pathname} />
          </HeaderWrapper>
        </>
      ) : (
        <HeaderWrapper>
          <Logo />
          <Navi pathname={pathname} />
        </HeaderWrapper>
      )}
    </>
  );
}
