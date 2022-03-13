import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useUserContext } from "../../context/UserContext";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { LogoutIcon, DocumentAddIcon } from "@heroicons/react/outline";

const NavbarContainer = () => {
  const [scroll, setScroll] = useState(false);
  const {
    setModalOpen,
    token,
    user,
    logoutUser,
    customRole,
    setModalAdminOpen,
  } = useUserContext();
  useEffect(() => {
    window.addEventListener("scroll", () =>
      !window.scrollY ? setScroll(false) : setScroll(true)
    );
  }, []);

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
        <div className="flex space-x-5 items-center">
          <Link href="/">
            <p className="text-red-300 font-bold cursor-pointer text-2xl">
              BEEHUB
            </p>
          </Link>
          <Link href="/articles">
            <p className="text-orange-300 cursor-pointer hover:text-orange-200 hidden md:block">
              Articles
            </p>
          </Link>
        </div>
        <div className="flex space-x-5">
          {token ? (
            <Menu>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <p className="text-white">Hai, {user.username}</p>
                <ChevronDownIcon
                  className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-4 top-10 w-40 lg:w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    {customRole == "admin" && (
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => setModalAdminOpen(true)}
                            className={`${
                              active ? "bg-red-300 text-white" : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <DocumentAddIcon
                                className="w-5 h-5 mr-2"
                                aria-hidden="true"
                              />
                            ) : (
                              <DocumentAddIcon
                                className="w-5 h-5 mr-2"
                                aria-hidden="true"
                              />
                            )}
                            Add New Article
                          </button>
                        )}
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => logoutUser()}
                          className={`${
                            active ? "bg-red-300 text-white" : "text-gray-900"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <LogoutIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                          ) : (
                            <LogoutIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                          )}
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <button
              className="bg-cyan-400 px-2 rounded-md py-0.5"
              onClick={() => setModalOpen(true)}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarContainer;
