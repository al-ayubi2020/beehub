import { NextPage } from "next";
import { useRouter } from "next/router";
import { ArticleCard, ArticleHighlight } from "../../components/modules";

const Articles: NextPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full px-20">
      <div className="h-screen space-y-10 pt-5">
        <p className="text-5xl font-bold">The Articles</p>
        <ArticleHighlight
          title="What is Lorem Ipsum?"
          date="20 june 2021"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="grid grid-cols-3 gap-x-20 gap-y-10">
          {[...Array(8)].map((x, idx) => (
            <div key={idx}>
              <ArticleCard
                title="What is Lorem Ipsum? "
                date="21 june 2021"
                body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
