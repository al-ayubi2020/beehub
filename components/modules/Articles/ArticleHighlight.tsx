export interface ArticleHighlightProps {
  title?: string;
  date?: string;
  image?: string;
  body?: string;
}

export const ArticleHighlight: React.FC<ArticleHighlightProps> = ({
  title,
  date,
  image,
  body,
}) => {
  return (
    <div className="grid grid-cols-2 h-80 w-full gap-x-10 cursor-pointer hover:drop-shadow-2xl">
      <div className="h-full w-full  bg-green-400 rounded"></div>
      <div className="h-full w-full">
        <div className="text-xl h-1/6 text-gray-400">{date}</div>
        <div className="text-7xl h-3/6 overflow-hidden font-bold">{title}</div>
        <div className="h-2/6 overflow-hidden text-justify">{body}</div>
      </div>
    </div>
  );
};

export default ArticleHighlight;
