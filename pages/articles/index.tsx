import { NextPage } from "next";
import { useRouter } from "next/router";
import { ArticleCard, ArticleHighlight } from "../../components/modules";

const Articles: NextPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full  flex justify-center">
      <div className="min-h-screen w-full  max-w-7xl space-y-10 flex flex-col">
        <h1 className="text-7xl font-bold">The Articles</h1>
        <ArticleHighlight
          title="What is Lorem Ipsum?"
          date="21 june 2021"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />

        <div className="grid grid-cols-3 justify-items-center gap-x-16 pt-10">
          {[...Array(8)].map((x, idx) => (
            <div key={idx}>
              <ArticleCard title="What is Lorem Ipsum?" date="21 june 2021" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
