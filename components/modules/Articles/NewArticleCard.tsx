export interface NewArticleCardProps {
  title?: string;
  date?: string;
  image?: string;
  height?: string;
  width?: string;
  body?: string;
}

export const NewArticleCard: React.FC<NewArticleCardProps> = ({
  title,
  date,
  image,
  height,
  width,
  body,
}) => {
  return (
    <div
      className={`flex flex-none h-${height} w-${width} cursor-pointer border border-white rounded-lg shadow-xl p-5`}
    >
      <div className="pt-2 overflow-hidden space-y-2">
        <div className="text-sm text-gray-500">{date}</div>
        <div className="text-md md:text-xl lg:text-2xl font-bold">{title}</div>
        <div className="text-sm">{body}</div>
      </div>
    </div>
  );
};

export default NewArticleCard;
