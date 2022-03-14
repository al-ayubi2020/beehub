import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AchievementBox,
  Biodata,
  LandingHeader,
  NewArticleCard,
} from "../components/modules";
import comfest from "../public/Comfest.jpg";
import Perak from "../public/Perak.png";
import KA from "../public/KA.png";
import Head from "next/head";

const Home: NextPage = () => {
  const [show, setShow] = useState(false);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const getPost = await axios
        .get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/posts?populate=*&sort=id:DESC`
        )
        .then((res) => {
          setPosts(res.data.data);
        });
    };

    getPosts();
  }, []);

  return (
    <div className="min-h-screen bg-[#e5e5e5]">
      <Head>
        <title>BeeHub</title>
        <link
          rel="shortcut icon"
          href="https://i.pinimg.com/originals/f1/6b/e4/f16be4268597a6ff5e8869712a223c45.jpg"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LandingHeader />
      <div id="content-biodata">
        <Biodata />
      </div>
      <div className="h-fit w-full text-center flex flex-col items-center justify-center">
        <p className="md:text-3xl  text-2xl font-bold">
          Experience and Achievements
        </p>
        <div className="grid md:grid-cols-3 lg:gap-x-40 md:gap-x-14 md:mt-16 mt-10 mb-10 grid-cols-1 gap-y-10">
          <AchievementBox
            url="https://www.compfest.id/"
            show={show}
            image={comfest}
            title="Comfest Software Enginering Academy"
            achiType="Training Workshop"
          />
          <AchievementBox
            url="https://csui2021.vercel.app/"
            show={show}
            image={KA}
            title="Karya Angkatan Bakung Web Developer"
            achiType="Staff Project"
          />
          <AchievementBox
            url="https://perak.cs.ui.ac.id/"
            show={show}
            image={Perak}
            title="Perak 2021 Web Developer"
            achiType="Staff Project"
          />
        </div>
      </div>
      <div className="h-fit w-full px-5 space-y-5 py-16" id="content-articles">
        <div className="h-fit w-full flex justify-between">
          <p className="font-bold text-3xl">The Articles</p>
          <Link href="/articles">
            <p className="cursor-pointer hover:text-orange-300">See More</p>
          </Link>
        </div>
        {posts.slice(0, 3).map((posts: any, idx) => (
          <Link href={`/articles/${posts.id}`}>
            <div key={idx}>
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

export default Home;
