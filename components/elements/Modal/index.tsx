import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { ModalProps } from "./interface";
import { useUserContext } from "../../context/UserContext";
import { Tab } from "@headlessui/react";
import CircularProgress from "@mui/material/CircularProgress";

const Modal: React.FC<ModalProps> = ({ children }) => {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  const { modalOpen, setModalOpen } = useUserContext();
  const [tabIndex, setTabIndex] = useState(1);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");

  const { login, register, loading } = useUserContext();

  const handleRegister = async (e: any) => {
    e.preventDefault();

    register(`${username}`, `${email}`, `${password}`, "basic", `${fullname}`);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();

    login(`${email}`, `${password}`);
  };

  const TabHandler = (i: any) => {
    switch (i) {
      case 1:
        return (
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-normal mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                v-model="form.email"
                type="email"
                placeholder="Email"
                required
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-normal mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                v-model="form.password"
                type="password"
                placeholder="Password"
                name="password"
                required
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              {loading ? (
                <div className="bg-red-300 px-2 py-1 rounded-md shadow-sm h-8 w-24 flex items-center justify-center">
                  <CircularProgress size={20} />
                </div>
              ) : (
                <button
                  className="px-4 py-2 rounded text-white inline-block shadow-lg bg-red-300 focus:bg-red-400"
                  type="submit"
                  onClick={handleLogin}
                >
                  Login
                </button>
              )}
              <a
                className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        );

      case 2:
        return (
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-normal mb-2">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="username"
                v-model="form.username"
                type="usename"
                required
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.currentTarget.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-normal mb-2">
                Fullname
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="fullname"
                v-model="form.fullname"
                type="fullname"
                required
                placeholder="Fullname"
                onChange={(e) => {
                  setFullname(e.currentTarget.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-normal mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                v-model="form.email"
                type="email"
                required
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-normal mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                v-model="form.password"
                type="password"
                placeholder="Password"
                name="password"
                required
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              {loading ? (
                <div className="bg-orange-300 px-2 py-1 rounded-md shadow-sm h-8 w-24 flex items-center justify-center">
                  <CircularProgress size={20} />
                </div>
              ) : (
                <button
                  className="px-4 py-2 rounded text-white inline-block shadow-lg bg-orange-300  focus:bg-orange-400"
                  type="submit"
                  onClick={handleRegister}
                >
                  Register
                </button>
              )}
            </div>
          </form>
        );
    }
  };

  return (
    <>
      {children}
      <Transition appear show={modalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => {
            setModalOpen(false);
            setTabIndex(1);
          }}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Authenticate
                </Dialog.Title>
                <div className="mt-2">
                  <Tab.Group>
                    <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                      <div
                        className="h-full w-full"
                        onClick={() => setTabIndex(1)}
                      >
                        <Tab
                          key={1}
                          className={({ selected }) =>
                            classNames(
                              "w-full py-2.5 text-sm leading-5 font-medium text-red-300 rounded-lg",
                              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-red-300 ring-white ring-opacity-60",
                              selected
                                ? "bg-white shadow"
                                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                            )
                          }
                        >
                          Login
                        </Tab>
                      </div>
                      <div
                        className="h-full w-full"
                        onClick={() => setTabIndex(2)}
                      >
                        <Tab
                          key={2}
                          className={({ selected }) =>
                            classNames(
                              "w-full py-2.5 text-sm leading-5 font-medium text-orange-300 rounded-lg",
                              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-orange-300 ring-white ring-opacity-60",
                              selected
                                ? "bg-white shadow"
                                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                            )
                          }
                          onClick={() => setTabIndex(2)}
                        >
                          Register
                        </Tab>
                      </div>
                    </Tab.List>
                  </Tab.Group>
                </div>

                <div className="mt-4">{TabHandler(tabIndex)}</div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Modal;
