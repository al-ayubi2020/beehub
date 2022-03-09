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
import { AchievementBox, Biodata, LandingHeader } from "../components/modules";
import image from "../public/Foto.png";
import comfest from "../public/Comfest.jpg";
import Perak from "../public/Perak.png";
import KA from "../public/KA.png";

const Home: NextPage = () => {
  const router = useRouter();

  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen bg-[#e5e5e5]">
      <LandingHeader />
      <Biodata />
      <div className="h-fit w-full text-center flex flex-col items-center justify-center">
        <p className="text-xl font-bold">Pengalaman dan Prestasi</p>
        <div className="grid md:grid-cols-3 lg:gap-x-40 md:gap-x-14 mt-5 mb-10 grid-cols-1 gap-y-10">
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
    </div>
  );
};

export default Home;
