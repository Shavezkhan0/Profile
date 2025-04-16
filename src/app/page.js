'use client'
import Layout from "@/components/Layout";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

export default function Home() {
  const name = "Shavez Khan";
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setDisplayText((prev) => prev + name[index]);
      setIndex((prev) => prev + 1);
    }, 200);

    if (index === name.length) {
      clearInterval(typingInterval);

      // Wait 1 second, then reset to restart typing
      const restartTimeout = setTimeout(() => {
        setDisplayText('');
        setIndex(0);
      }, 1000);

      return () => clearTimeout(restartTimeout);
    }

    return () => clearInterval(typingInterval);
  }, [index]);

  return (
    <Layout>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400&family=Geist+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-[#ECECEC] p-10">
        <div className="flex flex-row  items-center justify-between w-full px-10">
          <div className=" flex flex-col items-start w-full">
            <h1 className="text-4xl font-bold text-center">
              I'm <span className="font-cursive">Computer Science Engineer</span>
            </h1>
            <h1 className="text-6xl font-bold text-center  bg-gradient-to-r from-[#FF0080] to-[#FF8C00] bg-clip-text text-transparent">{
              displayText.length > 0 ? <span>{displayText}</span> :
                <span>|</span>
            }</h1>
            <p className="mt-4 text-lg text-start">Highly motivated and eager Full Stack Developer with the strong foundation in front-end and back-end technologies, seeking an entry level role to apply my skills in building dynamic websites and application. Proven ability to design , develop , and deploy projects independently , demonstrated through personal project including a fully functional website and mobile app.
            </p>
          </div>
          <div>
            <Image
              src="/images/profile.jpg"
              alt="Profile Picture"
              className="object-cover rounded-full"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div>
          <ul className="flex flex-row gap-4 items-center justify-center mt-10 space-x-4 ">
            <li className="cursor-pointer">
              <a href="https://leetcode.com/u/Shavezkhan/" target="_blank" >
                <SiLeetcode size={30} color="#FF0080" />
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="https://www.geeksforgeeks.org/user/shavezkxj31/" target="_blank">
                <SiGeeksforgeeks size={30} color="#FF446E" />
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="https://www.linkedin.com/in/shavez-khan-1b8910163/" target="_blank">
                <FaLinkedinIn size={30} color="#FF7449" />
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="https://www.instagram.com/shavezkhan0/" target="_blank">
                <FaInstagramSquare size={30} color="#FFA325" />
              </a>
            </li>
          </ul>
        </div>
        <section className="mt-16 px-10 text-start">
          <h2 className="text-3xl font-bold text-black mb-4">🚀 Currently Learning</h2>
          <p className="text-lg text-gray-900 max-w-2xl w-full ">
            I'm diving into the world of <span className="text-[#FF8C00] font-semibold">Machine Learning</span> and <span className="text-[#FF0080] font-semibold">Artificial Intelligence</span>, exploring concepts like neural networks, computer vision, and model training. Excited to build smart applications and solve real-world problems with AI!
          </p>
        </section>

      </div>
    </Layout>
  );
}
