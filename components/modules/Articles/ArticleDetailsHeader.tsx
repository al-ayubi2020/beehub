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
      <div className="z-10 p-5 relative w-full h-full bg-black bg-opacity-50 pt-24 pb-32 flex flex-col justify-center items-center text-white">
        <p className="text-2xl">{title}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default ArticleDetailsHeader;
