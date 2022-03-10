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
      className={`flex flex-none h-${height} w-${width} cursor-pointer border border-white rounded-lg shadow-xl`}
    >
      <div className={`h-40 w-40 p-2 rounded flex-none`}>
        <div className="bg-red-500 h-full w-full rounded"></div>
      </div>
      <div className="pt-2 overflow-hidden space-y-2">
        <div className="text-sm text-gray-500">{date}</div>
        <div className="text-md font-bold">{title}</div>
        <div className="text-sm">{body}</div>
      </div>
    </div>
  );
};

export default NewArticleCard;
