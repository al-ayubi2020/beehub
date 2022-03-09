import Image from "next/image";
import { useState } from "react";

export interface AchievementBoxProps {
  show?: boolean;
  image?: any;
  title?: string;
  achiType?: string;
}

export const AchievementBox: React.FC<AchievementBoxProps> = ({
  show,
  image,
  title,
  achiType,
}) => {
  const [showRegistrant, setShowRegistrant] = useState(false);

  return (
    <div className=" h-full w-fit shadow-2xl">
      <div
        className="rounded-lg bg-surface hover:scale-105 transition-transform duration-500"
        onMouseEnter={() => setShowRegistrant(true)}
        onMouseLeave={() => setShowRegistrant(false)}
      >
        <div className="flex-col space-y-2 mx-auto ">
          <div className="flex-none object-contain aspect-square rounded w-56 relative ">
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              className={
                showRegistrant
                  ? "opacity-20 transition-opacity ease-in-out duration-500"
                  : "opacity-100 transition-opacity ease-in-out duration-500"
              }
            />
            <div
              className={
                showRegistrant
                  ? "transition-all duration-300 opacity-100 z-50 flex-col absolute bottom-1 left-1"
                  : "transition-all duration-300 opacity-0 z-50 absolute bottom-1 left-1"
              }
            >
              <p className="font-retro text-primary text-lg py-2 text-gray-500">
                {achiType}
              </p>
            </div>
            <div
              className={
                showRegistrant
                  ? "transition-all duration-300 opacity-100 z-50 flex-col absolute flex items-center justify-center w-full h-full"
                  : "transition-all duration-300 opacity-0 z-50 absolute flex items-center flex-col justify-center w-full h-full"
              }
            >
              <p className="font-retro text-primary text-lg py-2 font-bold">
                {title}
              </p>
              <button className="bg-red-300 rounded-lg px-2 py-1 mt-2 drop-shadow-lg ">
                Go to Website
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementBox;
