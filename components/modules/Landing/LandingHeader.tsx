import Image from "next/image";
import heroImage from "../../../public/img/2985860.jpg";

export const LandingHeader = () => {
  return (
    <div className="h-screen">
      <div className="hidden md:block">
        <Image src={heroImage} layout="fill" className="hidden" />
      </div>
      <div className="relative top-0 h-full w-full">
        <div className="h-full md:w-1/2 flex flex-col items-center justify-center ">
          <div className="h-fit w-fit  flex flex-col items-center justify-center pb-36 md:pb-0">
            <p className="text-3xl font-extrabold text-red-300">
              Welcome To BeeHub
            </p>
            <p className="text-md font-medium">
              a personal blog website by Bee
            </p>
            <button
              onClick={() => {
                let contentGallery = document.getElementById("content-biodata");
                contentGallery?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-red-300 rounded-lg px-2 py-1 mt-2 drop-shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-500"
            >
              Get to know Me
            </button>
            <p>or</p>
            <button
              onClick={() => {
                let contentGallery =
                  document.getElementById("content-articles");
                contentGallery?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-orange-300 rounded-lg px-2 py-1 mt-2 drop-shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-500"
            >
              See blog post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
