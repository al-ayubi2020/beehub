import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useUserContext } from "../../context/UserContext";

const NavbarContainer = () => {
  const [scroll, setScroll] = useState(false);
  const { modalOpen, setModalOpen } = useUserContext();

  useEffect(() => {
    window.addEventListener("scroll", () =>
      !window.scrollY ? setScroll(false) : setScroll(true)
    );
  }, []);

  console.log(scroll);

  const wrapperPadding = !scroll ? "py-0" : "py-2 px-6";
  const largeJaggedWidth = !scroll
    ? "w-full"
    : "w-[calc(100%+30px)] w-full rounded-md";

  return (
    <nav
      className={`${wrapperPadding} flex flex-col w-full h-16 md:h-14 justify-center items-center transition-200-ease-in-out min-w-full sticky top-0 duration-500 z-40`}
    >
      <div
        className={`${largeJaggedWidth} flex justify-between items-center px-5 h-16 md:h-14 md:grid-cols-8 grid-cols-4 bg-surface transition-200-ease-in-out md:py-0 bg-[#2b3d53] duration-500`}
      >
        <div className="flex space-x-5">
          <Link href="/">
            <p className="text-red-300 font-bold cursor-pointer text-2xl">
              BEEHUB
            </p>
          </Link>
        </div>
        <div className="flex space-x-5">
          <Link href="/articles">
            <p className="text-orange-300 cursor-pointer hover:text-orange-200">
              Articles
            </p>
          </Link>
          <button
            className="bg-cyan-400 px-2 rounded-md"
            onClick={() => setModalOpen(true)}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarContainer;
