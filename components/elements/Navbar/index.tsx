import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NavbarContainerProps } from "./interface";

const NavbarContainer = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      !window.scrollY ? setScroll(false) : setScroll(true)
    );
  }, []);

  console.log(scroll);
  const { pathname } = useRouter();

  const wrapperPadding = !scroll ? "py-0" : "py-2 px-6";
  const largeJaggedWidth = !scroll
    ? "w-full"
    : "w-[calc(100%+30px)] w-full rounded-md";

  return (
    <nav
      className={`${wrapperPadding} flex flex-col w-full h-16 md:h-14 justify-center items-center transition-200-ease-in-out min-w-full sticky top-0 duration-500 z-40`}
    >
      <div
        className={`${largeJaggedWidth} grid lg:grid-cols-12 h-16 md:h-14 md:grid-cols-8 grid-cols-4 bg-surface transition-200-ease-in-out md:py-0 bg-black duration-500`}
      >
        <p>TES</p>
      </div>
    </nav>
  );
};

export default NavbarContainer;
