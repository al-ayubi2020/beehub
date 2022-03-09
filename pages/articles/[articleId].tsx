import { NextPage } from "next";
import { useRouter } from "next/router";
import {
  ArticleDetailsHeader,
  CommentBox,
  CommentInput,
} from "../../components/modules";

const ArticleDetails: NextPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-[#e5e5e5]">
      <ArticleDetailsHeader title="Tes Judul" date="20 juni 2021" />
      <div className="h-full w-full px-20 py-10">
        <div className="h-full w-full px-40">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tristique risus et libero convallis, ut scelerisque est tempor. Sed
            mattis dignissim erat vel hendrerit. Integer id leo et nisi
            convallis ullamcorper. Nulla in scelerisque purus. Suspendisse eget
            egestas quam, eu tincidunt est. Proin viverra neque eu velit semper
            elementum. Sed varius dictum ex, ut consequat enim malesuada sed.
            Donec blandit diam at scelerisque pharetra. Donec nisl dolor,
            vestibulum eu nisi sed, tristique faucibus urna. Nulla condimentum
            metus bibendum, pretium nisi vitae, tempus ipsum. Cras diam augue,
            malesuada eget est sit amet, elementum congue nisi. Fusce ut turpis
            odio. Aenean egestas condimentum nisl nec interdum. Pellentesque nec
            mauris sed erat hendrerit ultrices. In pulvinar enim ex, quis
            feugiat orci ornare sit amet. Fusce efficitur quis enim a maximus.
            Nulla dignissim vestibulum leo, in gravida ex lacinia ut. Sed
            laoreet urna erat, id commodo purus mollis quis. Integer sit amet
            tempor erat, eget maximus neque. Praesent elit mauris, ultrices at
            enim sed, facilisis aliquam tellus. Suspendisse mattis vehicula
            justo, non posuere lectus dictum at. Integer ut enim in sapien
            imperdiet porttitor. Nunc luctus nunc ac mauris ultricies, sed
            scelerisque dui posuere. Donec eget augue sed magna ullamcorper
            condimentum et non massa. In accumsan, erat maximus bibendum
            eleifend, nibh neque porta ex, nec venenatis erat metus vel magna.
            Donec vitae fringilla magna. Quisque vel massa eget enim pharetra
            sagittis. Integer dapibus aliquet nulla vel mollis. Vivamus non nunc
            metus. In auctor magna in neque iaculis mattis. Nulla venenatis
            purus vitae mattis sodales. Donec et aliquam tortor. Vivamus
            tincidunt condimentum libero. Vivamus scelerisque est lobortis
            ullamcorper condimentum. Donec est ligula, efficitur non nibh non,
            condimentum iaculis orci. Suspendisse in nibh euismod, suscipit
            lorem quis, pellentesque nunc. Etiam dapibus erat felis, a viverra
            nisl malesuada eget. Pellentesque non diam eget nisl tristique
            rhoncus at lacinia enim. Morbi feugiat condimentum laoreet. Morbi
            mattis tellus in pharetra bibendum. Aenean semper mauris diam, non
            auctor magna dictum vel. Vestibulum luctus, lectus vel fringilla
            lacinia, purus augue porttitor mauris, commodo sollicitudin magna
            justo eu neque. Praesent vitae finibus purus. Nullam mollis accumsan
            ex in ultricies. Vestibulum et aliquet nisl. Fusce a convallis
            turpis, eget commodo dolor. Vestibulum laoreet blandit felis
            bibendum sollicitudin. Aenean sagittis diam at faucibus tristique.
          </p>
        </div>
        <h3 className="mb-4 text-lg font-semibold text-gray-900 justify-start mt-5">
          Comments (0)
        </h3>
        <div className="h-full w-full flex flex-col items-center justify-center space-y-5">
          <CommentBox />
          <CommentInput isLogin={false} />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
