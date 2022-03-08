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
}) => {
  return (
    <div className=" w-96 space-y-4">
      <div className="bg-green-500 h-60 w-full rounded-sm"></div>
      <div className="h-fit pb-20 space-y-4 overflow-hidden">
        <div className="text-xl">{date}</div>
        <div className="text-4xl overflow-hidden font-bold text-justify">
          {title}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
