export interface ArticleCardProps {
  title?: string;
  date?: string;
  image?: string;
  body?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  date,
  image,
  body,
}) => {
  return (
    <div className=" w-80 hover:shadow-xl ring-red-300 duration-300 h-fit transition ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer">
      <div className="bg-green-500 h-52 w-full rounded-sm"></div>
      <div className="h-fit pb-10 space-y-4 overflow-hidden">
        <div className="text-md text-gray-400">{date}</div>
        <div className="text-2xl overflow-hidden font-bold max-h-20">
          {title}
        </div>
        <div className="text-md overflow-hidden max-h-48">{body}</div>
      </div>
    </div>
  );
};

export default ArticleCard;
