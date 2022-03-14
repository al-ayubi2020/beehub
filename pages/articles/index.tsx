import { CircularProgress } from "@mui/material";
import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NewArticleCard } from "../../components/modules";

const Articles: NextPage = () => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getPosts = async () => {
      const getPost = await axios
        .get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/posts?populate=*&sort=id:DESC`
        )
        .then((res) => {
          console.log(res.data.data);
          setPosts(res.data.data);
          setLoading(false);
        });
    };

    getPosts();
  }, []);

  return (
    <div className="min-h-screen w-full px-5 lg:px-20 bg-[#e5e5e5] pb-5">
      <Head>
        <title>BeeHub Articles</title>
        <link
          rel="shortcut icon"
          href="https://i.pinimg.com/originals/f1/6b/e4/f16be4268597a6ff5e8869712a223c45.jpg"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-fit space-y-5 pt-5">
        <p className="text-5xl font-bold">The Articles</p>
        {loading && (
          <div className="w-full h-screen items-center justify-center flex">
            <CircularProgress />
          </div>
        )}
        {posts.map((posts: any) => (
          <Link href={`/articles/${posts.id}`} key={posts.id}>
            <div>
              <NewArticleCard
                height="40"
                width="full"
                title={posts.attributes.titile}
                date={posts.attributes.createdAt}
                body={posts.attributes.body}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles;
