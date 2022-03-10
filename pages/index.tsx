import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import nookies from "nookies";
import { useRouter } from "next/router";
import Link from "next/link";
import { useUserContext } from "../components/context/UserContext";
import NavbarContainer from "../components/elements/Navbar";
import {
  AchievementBox,
  ArticleHighlight,
  Biodata,
  LandingHeader,
  NewArticleCard,
} from "../components/modules";
import image from "../public/Foto.png";
import comfest from "../public/Comfest.jpg";
import Perak from "../public/Perak.png";
import KA from "../public/KA.png";
import Modal from "../components/elements/Modal";

const Home: NextPage = () => {
  const router = useRouter();
  const { user, token } = useUserContext();

  const [show, setShow] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  console.log("tokentoken", user);

  return (
    <div className="min-h-screen bg-[#e5e5e5]">
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
            show={show}
            image={comfest}
            title="Comfest Software Enginering Academy"
            achiType="Training Workshop"
          />
          <AchievementBox
            show={show}
            image={KA}
            title="Karya Angkatan Bakung Web Developer"
            achiType="Staff Project"
          />
          <AchievementBox
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
        {[...Array(3)].map((item) => (
          <NewArticleCard
            height="40"
            width="full"
            title="What is Lorem Ipsum?"
            date="20 june 2021"
            body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
