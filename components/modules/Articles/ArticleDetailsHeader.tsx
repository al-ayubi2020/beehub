import React from "react";

export interface ArticleDetailsHeaderProps {
  title?: string;
  date?: string;
  image?: string;
  className?: string;
}

export const ArticleDetailsHeader: React.FC<ArticleDetailsHeaderProps> = ({
  title,
  date,
  image,
}) => {
  return (
    <div className="w-full bg-surface object-cover relative flex flex-col justify-center items-center">
      <img
        src="https://4.bp.blogspot.com/-qiUp3utOr6g/XIYlRAcUf_I/AAAAAAAAAL4/tZtTsM-HKCYB-cfGFx7-khdzIpWaQUewwCLcBGAs/s1600/Cover%2BBuku.png"
        className="w-full h-full absolute object-cover object-center transition-all duration-[500ms] opacity-100"
      />
      <div
        className="z- w-full h-12 bottom-0 absolute flex justify-end items-end p-12"
        style={{
          background:
            "linear-gradient(0deg, rgba(15,14,32,1) 17%, rgba(15,14,32,0) 100%)",
        }}
      ></div>
      <div className="z-10 relative w-full h-full bg-black bg-opacity-50 pt-24 pb-32 flex flex-col justify-center items-center text-white">
        <p>{title}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default ArticleDetailsHeader;
