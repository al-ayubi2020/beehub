import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NewArticleCard } from "../../components/modules";

const Articles: NextPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const getPost = await axios
        .get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/posts?populate=*&sort=id:DESC`
        )
        .then((res) => {
          console.log(res.data.data);
          setPosts(res.data.data);
        });
    };

    getPosts();
  }, []);

  return (
    <div className="min-h-screen w-full px-5 lg:px-20 bg-[#e5e5e5] pb-5">
      <div className="h-fit space-y-5 pt-5">
        <p className="text-5xl font-bold">The Articles</p>
        {posts.map((posts, id) => (
          <Link href={`/articles/${posts.id}`}>
            <div key={id}>
              <NewArticleCard
                height="40"
                width="full"
                title={posts?.attributes?.titile}
                date={posts?.attributes?.createdAt}
                body={posts?.attributes?.body}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles;
