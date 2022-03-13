import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { ModalAdminProps } from "./interface";
import { useUserContext } from "../../context/UserContext";
import { CircularProgress } from "@mui/material";

const ModalAdmin: React.FC<ModalAdminProps> = ({ children }) => {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  const { modalAdminOpen, setModalAdminOpen, loading, postArticle } =
    useUserContext();
  const [tabIndex, setTabIndex] = useState(1);

  const titleRef = useRef();
  const bodyRef = useRef();
  const imageRef = useRef();

  const handlePost = async (e: any) => {
    e.preventDefault();

    postArticle(
      `${titleRef.current.value}`,
      `${bodyRef.current.value}`,
      `${imageRef.current.value}`
    );
  };

  return (
    <>
      {children}
      <Transition appear show={modalAdminOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => {
            setModalAdminOpen(false);
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
              <div className="inline-block w-full max-w-md md:max-w-xl lg:max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add New Article
                </Dialog.Title>
                <div className="mt-2">
                  <form>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-normal mb-2">
                        Title
                      </label>
                      <input
                        className="relative top-0 bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                        name="title"
                        v-model="form.title"
                        type="title"
                        placeholder="Title"
                        required
                        ref={titleRef}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-normal mb-2">
                        Image URL
                      </label>
                      <input
                        className="relative top-0 bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                        name="imageURL"
                        v-model="form.image"
                        type="text"
                        placeholder="https://www."
                        required
                        ref={imageRef}
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-normal mb-2">
                        Article
                      </label>
                      <textarea
                        className=" relative top-0 bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-60  md:h-80 py-2 px-3 placeholder-gray-700 focus:outline-none focus:bg-white"
                        name="body"
                        placeholder=""
                        required
                        ref={bodyRef}
                      ></textarea>
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
                          onClick={handlePost}
                        >
                          Post
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default ModalAdmin;
