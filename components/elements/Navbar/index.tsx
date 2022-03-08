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

  const wrapperPadding = !scroll ? "py-0" : "lg:py-2 lg:px-6";
  const largeJaggedWidth = !scroll ? "w-full" : "lg:w-[calc(100%+30px)] w-full";

  return (
    <nav
      className={`${wrapperPadding} flex flex-col w-full h-20 justify-center items-center transition-200-ease-in-out min-w-full sticky top-0 duration-500`}
    >
      <div
        className={`${largeJaggedWidth} grid lg:grid-cols-12 h-20 md:grid-cols-8 grid-cols-4 bg-surface transition-200-ease-in-out md:py-0 bg-black duration-500`}
      >
        <p>TES</p>
      </div>
    </nav>
  );
};

export default NavbarContainer;
