"use client";

import Link from "next/link";
import {
  RiTelegram2Fill,
  RiTailwindCssFill,
  RiRoadMapLine,
} from "react-icons/ri";
import {
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaNode,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiAdobephotoshop, SiMongodb } from "react-icons/si";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { CircularProgress } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";

const skillData = [
  { icon: FaReact, value: 89 },
  { icon: SiNextdotjs, value: 98 },
  { icon: BiLogoTypescript, value: 100 },
  { icon: BiLogoPostgresql, value: 90 },
  { icon: SiMongodb, value: 100 },
  { icon: FaNode, value: 90 },
  { icon: SiAdobephotoshop, value: 100 },
  { icon: FaGitAlt, value: 88 },
  { icon: RiTailwindCssFill, value: 100 },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* Header */}
      <div className="flex w-full items-center justify-center pl-20 font-mod">
        <motion.h1
          className="flex items-center text-4xl font-semibold transition-all ease-linear md:text-5xl lg:text-6xl 2xl:text-8xl"
          initial={{ filter: "blur(20px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          S.MOHSEN
          <motion.span
            className="font-bold md:text-9xl lg:text-[18rem] 2xl:text-[22rem]"
            style={{ textShadow: "0 0 50px rgba(255, 255, 255, 0.7)" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          >
            7
          </motion.span>
          DEVELOPER
        </motion.h1>
      </div>
      {/* Introduction Section */}
      <div className="flex w-full justify-between">
        <motion.div
          className="max-w-sm"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-6 text-sm text-neutral-700">
            I am a full-stack developer with expertise in modern frameworks like
            React and Next.js. I have extensive experience working with various
            tools and technologies, including TypeScript, Tailwind CSS,
            PostgreSQL, and Node.js. My ability to create engaging and efficient
            user experiences, particularly with UI/UX design principles, allows
            me to develop complex projects effectively and efficiently.
          </p>
          <Link href={"/"} className="m-2 tracking-widest text-neutral-400">
            Need More
          </Link>
        </motion.div>

        <motion.div
          className="max-w-sm text-right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link href={"/"} className="m-2 tracking-widest text-neutral-400">
            Need More
          </Link>
          <p className="mt-6 text-sm text-neutral-700">
            I am a full-stack developer with expertise in modern frameworks like
            React and Next.js. I have extensive experience working with various
            tools and technologies, including TypeScript, Tailwind CSS.
          </p>
        </motion.div>
      </div>
      {/* Social Links */}
      <motion.div
        className="flex w-full items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center gap-8">
          {[RiTelegram2Fill, FaGithub, FaLinkedinIn].map((Icon, index) => (
            <motion.button
              key={index}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Icon className="size-6" />
            </motion.button>
          ))}
        </div>
      </motion.div>
      <hr className="shadow-2xl shadow-white blur-sm" />
      {/* About Me */}
      <div id="about">
        <h2 className="head-text my-10">About ME</h2>
        <div className="flex flex-col gap-5 text-lg text-neutral-400 md:flex-row">
          <motion.p
            initial={{ filter: "blur(6px)" }}
            whileInView={{ filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl"
            viewport={{ once: true }}
          >
            Hi! I'm Mohsen Mousavi, a{" "}
            <span className="font-semibold text-neutral-200">full-stack</span>{" "}
            developer with 6 years of experience in web development. From
            crafting{" "}
            <span className="font-semibold text-neutral-200">modern UI</span>{" "}
            designs to optimizing backend performance, I’m always focused on
            building{" "}
            <span className="font-semibold text-neutral-200">
              user-friendly
            </span>{" "}
            and efficient digital experiences.
          </motion.p>
          <motion.p
            initial={{ filter: "blur(6px)" }}
            whileInView={{ filter: "blur(0px)" }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            I love exploring new{" "}
            <span className="font-semibold text-neutral-200">technologies</span>
            , improving{" "}
            <span className="font-semibold text-neutral-200">
              SEO strategies
            </span>
            , and enhancing{" "}
            <span className="font-semibold text-neutral-200">
              user interactions
            </span>
            . My work is driven by{" "}
            <span className="font-semibold text-neutral-200">creativity</span>,{" "}
            <span className="font-semibold text-neutral-200">
              problem-solving
            </span>
            , and a strong commitment to{" "}
            <span className="font-semibold text-neutral-200">
              continuous learning
            </span>
            . Currently, I’m working on{" "}
            <span className="font-semibold text-neutral-200">
              Sofreh Khaneh
            </span>
            , a Persian movie and poetry platform, where I blend technical
            expertise with{" "}
            <span className="font-semibold text-neutral-200">
              artistic vision
            </span>{" "}
            to create{" "}
            <span className="font-semibold text-neutral-200">
              meaningful digital experiences
            </span>
            .
          </motion.p>
        </div>
      </div>
      {/* Skills */}
      <div  id="skills">
        <h2 className="head-text my-10">Skills</h2>
        <div className="grid grid-cols-2 place-items-center gap-20 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6">
          {skillData.map(({ icon: Icon, value }, index) => (
            <div className="head-text relative" key={index}>
              <Icon className="absolute left-1/2 top-[44px] size-14 -translate-x-1/2" />
              <CircularProgress
                classNames={{
                  svg: "w-36 h-36 drop-shadow-md",
                  indicator: "stroke-white",
                  track: "stroke-white/10",
                  value: "text-3xl font-semibold text-neutral-200 relative",
                }}
                showValueLabel={true}
                strokeWidth={4}
                value={value}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Projects */}
      <div id="projects">
        <h2 className="head-text my-10">Projects</h2>
        <div className="mb-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <div className="group relative sm:max-w-96">
            <Link
              href={""}
              style={{ textShadow: "-25px -0px 50px rgba(255, 255, 255, 0.7)" }}
              className="font-mod text-lg font-bold text-neutral-100"
            >
              App.GoldenCheat
            </Link>
            <Link href={"/"}>
              <Image
                src={"/images/p-golden.png"}
                alt=""
                width={200}
                height={300}
                className="mt-1.5 aspect-video h-52 w-full rounded-2xl object-cover object-top shadow-[-3px_20px_0px_0px_rgb(255,_255,_255)] transition-all duration-500 ease-linear hover:object-bottom group-hover:grayscale-[0.5] sm:w-96"
              />
            </Link>
            <div className="absolute -bottom-4 left-3 flex w-full p-3">
              <span className="flex items-center gap-4 rounded-t-xl bg-white px-4 py-1.5 text-black backdrop-blur-md">
                <SiNextdotjs className="size-5" /> <FaNode className="size-7" />{" "}
                <RiTailwindCssFill className="size-5" />{" "}
                <FaGitAlt className="size-5" />
              </span>
            </div>
          </div>
          <div className="group relative sm:max-w-96">
            <Link
              href={"https://movielife.ir/"}
              style={{ textShadow: "-25px -0px 50px rgba(255, 255, 255, 0.7)" }}
              className="font-mod text-lg font-bold text-neutral-100"
            >
              MovieLife
            </Link>
            <Link href={"https://movielife.ir/"}>
              <Image
                src={"/images/p-movielife.png"}
                alt=""
                width={200}
                height={300}
                className="mt-1.5 aspect-video h-52 w-full rounded-2xl object-cover object-top shadow-[-3px_20px_0px_0px_rgb(255,_255,_255)] transition-all duration-1000 ease-linear hover:object-bottom group-hover:grayscale-[0.5] sm:w-96"
              />
            </Link>
            <div className="absolute -bottom-4 left-3 flex w-full p-3">
              <span className="flex items-center gap-4 rounded-t-xl bg-white px-4 py-1.5 text-black backdrop-blur-md">
                <SiNextdotjs className="size-5" /> <FaNode className="size-7" />{" "}
                <BiLogoPostgresql className="size-5" />
                <BiLogoTypescript className="size-6" />
                <RiTailwindCssFill className="size-5" />{" "}
              </span>
            </div>
          </div>
          <div className="group relative sm:max-w-96">
            <Link
              href={"https://iranhotels.vercel.app/"}
              style={{ textShadow: "-25px -0px 50px rgba(255, 255, 255, 0.7)" }}
              className="font-mod text-lg font-bold text-neutral-100"
            >
              IRAN Hotels
            </Link>
            <Link href={"https://iranhotels.vercel.app/"}>
              <Image
                src={"/images/p-iranhotels.png"}
                alt=""
                width={200}
                height={300}
                className="mt-1.5 aspect-video h-52 w-full rounded-2xl object-cover object-top shadow-[-3px_20px_0px_0px_rgb(255,_255,_255)] transition-all duration-500 ease-linear hover:object-bottom group-hover:grayscale-[0.5] sm:w-96"
              />
            </Link>
            <div className="absolute -bottom-4 left-3 flex w-full p-3">
              <span className="flex items-center gap-4 rounded-t-xl bg-white px-4 py-1.5 text-black backdrop-blur-md">
                <FaReact className="size-5" />
                <RiTailwindCssFill className="size-5" />{" "}
                <FaGitAlt className="size-5" />
                <RiRoadMapLine className="size-5" />
              </span>
            </div>
          </div>
          <div className="group relative sm:max-w-96">
            <Link
              href={"https://seyed-mohsen-mousavi.github.io/Rick-Morty/"}
              style={{ textShadow: "-25px -0px 50px rgba(255, 255, 255, 0.7)" }}
              className="font-mod text-lg font-bold text-neutral-100 flex items-center"
            >
              Rick And Morty 
            </Link>
            <Link href={"https://seyed-mohsen-mousavi.github.io/Rick-Morty/"}>
              <Image
                src={"/images/p-rick.png"}
                alt=""
                width={200}
                height={300}
                className="mt-1.5 aspect-video h-52 w-full rounded-2xl object-cover object-top shadow-[-3px_20px_0px_0px_rgb(255,_255,_255)] transition-all duration-500 ease-linear hover:object-bottom group-hover:grayscale-[0.5] sm:w-96"
              />
            </Link>
            <div className="absolute -bottom-4 left-3 flex w-full p-3">
              <span className="flex items-center gap-4 rounded-t-xl bg-white px-4 py-1.5 text-black backdrop-blur-md">
                <SiNextdotjs className="size-5" /> <FaNode className="size-7" />{" "}
                <RiTailwindCssFill className="size-5" />{" "}
                <FaGitAlt className="size-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="-mb-5 shadow-2xl shadow-white blur-sm" />
      <footer className="mx-auto !mb-4 font-mod">
        <span className="tetxt-sm text-neutral-400">
          For more information, call me at:{" "}
        </span>
        <Link href="tel:09935071519">+98-9935071519</Link>
      </footer>{" "}
    </div>
  );
}
