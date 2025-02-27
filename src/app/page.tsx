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
import { GiArmoredBoomerang } from "react-icons/gi";
import Navbar from "@/components/Navbar";
import { useRef } from "react";

// ---------------------------------
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
// ---------------------------------
const socialLinks = [
  { icon: RiTelegram2Fill, href: "https://t.me/XSeyed" },
  { icon: FaGithub, href: "https://github.com/seyed-mohsen-mousavi" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/seyed-mohsen-840941277/",
  },
];

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const scrollToSection = (section: string) => {
    switch (section) {
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };
  return (
    <>
      <header>
        <Navbar scrollToSection={scrollToSection} />
      </header>
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
              I am a full-stack developer with expertise in modern frameworks
              like React and Next.js. I have extensive experience working with
              various tools and technologies, including TypeScript, Tailwind
              CSS, PostgreSQL, and Node.js. My ability to create engaging and
              efficient user experiences, particularly with UI/UX design
              principles, allows me to develop complex projects effectively and
              efficiently.
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
              I am a full-stack developer with expertise in modern frameworks
              like React and Next.js. I have extensive experience working with
              various tools and technologies, including TypeScript, Tailwind
              CSS.
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
            {socialLinks.map(({ icon: Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Icon className="size-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <hr className="shadow-2xl shadow-white blur-sm" />
        {/* About Me */}
        <div ref={aboutRef} id="about">
          <h2 className="head-text my-10">About ME</h2>

          <section>
            <div className="text-white">
              <div className="my-12 flex flex-col items-center md:my-24 md:flex-row">
                <div className="flex w-full flex-col items-start justify-center p-8 lg:w-1/3">
                  <h1 className="tracking-loose py-2 font-mod text-3xl font-bold md:text-4xl">
                    *Actions speak louder than words
                  </h1>
                  <h2 className="mb-2 text-xl leading-relaxed sm:text-2xl md:leading-snug">
                    Full-stack Developer & UI/UX Designer
                  </h2>
                  <p className="mb-4 text-sm text-gray-50 md:text-base">
                    I specialize in creating seamless digital experiences by
                    combining modern UI designs with robust backend solutions.
                    Explore my portfolio to see how I bring creativity and
                    technology together.
                  </p>
                  <Link
                    href={"/#projects"}
                    className="flex items-center gap-2 rounded-xl border px-5 py-3 font-mod text-lg font-semibold ring-1 ring-white/15 transition-all ease-in-out hover:ring-4 active:ring-8"
                  >
                    View My Work
                  </Link>
                </div>
                <div className="mb-6 ml-0 mt-12 justify-center p-8 md:mb-0 md:ml-12 md:mt-0 lg:w-2/3">
                  <div className="flex h-48 flex-wrap content-center items-center gap-20 lg:ml-20">
                    <motion.div
                      initial={{ filter: "blur(6px)" }}
                      whileInView={{ filter: "blur(0px)" }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="relative h-72 w-40 -rotate-[25deg] overflow-hidden rounded-full"
                    >
                      <Image
                        src={"/images/pic2.jpeg"}
                        alt="About | S.mohsen image 1"
                        fill
                        loading="lazy"
                        className="size-full rotate-[25deg] scale-150 object-cover object-bottom"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ filter: "blur(6px)" }}
                      whileInView={{ filter: "blur(0px)" }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="relative h-[28rem] w-60 -rotate-[25deg] overflow-hidden rounded-full"
                    >
                      <Image
                        src={"/images/pic1.jpg"}
                        alt="About | S.mohsen image 2"
                        fill
                        loading="lazy"
                        className="size-full rotate-[25deg] scale-[1.35] object-cover"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ filter: "blur(6px)" }}
                      whileInView={{ filter: "blur(0px)" }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="relative h-72 w-40 -rotate-[25deg] overflow-hidden rounded-full"
                    >
                      <Image
                        src={"/images/pic6.jpg"}
                        alt="About | S.mohsen image 3"
                        fill
                        loading="lazy"
                        className="size-full rotate-[25deg] scale-[1.35] object-cover"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-5 text-lg text-neutral-400 md:flex-row">
            <motion.p
              initial={{ filter: "blur(6px)" }}
              whileInView={{ filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="max-w-2xl"
              viewport={{ once: true }}
            >
              a{" "}
              <span className="font-semibold text-neutral-200">full-stack</span>{" "}
              developer with over 3 years of experience in web development. I
              specialize in crafting{" "}
              <span className="font-semibold text-neutral-200">modern UI</span>{" "}
              designs and optimizing backend performance, always focused on
              creating{" "}
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
              I am passionate about exploring new{" "}
              <span className="font-semibold text-neutral-200">
                technologies
              </span>
              , enhancing{" "}
              <span className="font-semibold text-neutral-200">
                SEO strategies
              </span>
              , and improving{" "}
              <span className="font-semibold text-neutral-200">
                user interactions
              </span>
              . My work is fueled by{" "}
              <span className="font-semibold text-neutral-200">creativity</span>
              ,{" "}
              <span className="font-semibold text-neutral-200">
                problem-solving
              </span>
              , and a strong dedication to{" "}
              <span className="font-semibold text-neutral-200">
                continuous learning
              </span>
              . Currently, I am working on{" "}
              <span className="font-semibold text-neutral-200">
                Sofreh Khaneh
              </span>
              , a Persian movie and poetry platform where I combine my technical
              skills with{" "}
              <span className="font-semibold text-neutral-200">
                artistic vision
              </span>{" "}
              to create{" "}
              <span className="font-semibold text-neutral-200">
                meaningful digital experiences
              </span>
              .
            </motion.p>
          </section>
        </div>
        {/* Skills */}
        <div ref={skillsRef} id="skills">
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
        <div ref={projectsRef} id="projects" className="flex flex-col">
          <h2 className="head-text my-10">Projects</h2>
          <div className="mb-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            <div className="group relative sm:max-w-96">
              <Link
                href={"https://app.goldencheat.ir/  "}
                style={{
                  textShadow: "-25px -0px 50px rgba(255, 255, 255, 0.7)",
                }}
                className="font-mod text-lg font-bold text-neutral-100"
              >
                App.GoldenCheat
              </Link>
              <p></p>
              <Link href={"https://app.goldencheat.ir/"}>
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
                  <SiNextdotjs className="size-5" />{" "}
                  <FaNode className="size-7" />{" "}
                  <RiTailwindCssFill className="size-5" />{" "}
                  <FaGitAlt className="size-5" />
                </span>
              </div>
            </div>
            <div className="group relative sm:max-w-96">
              <Link
                href={"https://movielife.ir/"}
                style={{
                  textShadow: "-25px -0px 50px rgba(255, 255, 255, 0.7)",
                }}
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
                  <SiNextdotjs className="size-5" />{" "}
                  <FaNode className="size-7" />{" "}
                  <BiLogoPostgresql className="size-5" />
                  <BiLogoTypescript className="size-6" />
                  <RiTailwindCssFill className="size-5" />{" "}
                </span>
              </div>
            </div>
            <div className="group relative sm:max-w-96">
              <Link
                href={"https://iranhotels.vercel.app/"}
                style={{
                  textShadow: "-25px -0px 50px rgba(255, 255, 255, 0.7)",
                }}
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
                style={{
                  textShadow: "-25px -0px 50px rgba(255, 255, 255, 0.7)",
                }}
                className="flex items-center font-mod text-lg font-bold text-neutral-100"
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
                  <SiNextdotjs className="size-5" />{" "}
                  <FaNode className="size-7" />{" "}
                  <RiTailwindCssFill className="size-5" />{" "}
                  <FaGitAlt className="size-5" />
                </span>
              </div>
            </div>
          </div>
          <button className="mx-auto flex items-center gap-2 rounded-xl border px-5 py-3 font-mod text-lg font-semibold ring-1 ring-white/15 transition-all ease-in-out hover:ring-4 active:ring-8">
            See More <GiArmoredBoomerang className="size-6" />
          </button>
        </div>
        <hr className="-mb-5 shadow-2xl shadow-white blur-sm" />
        <footer className="mx-auto !mb-4 font-mod">
          <span className="tetxt-sm text-neutral-400">
            For more information, call me at:{" "}
          </span>
          <Link href="tel:09935071519">+98-9935071519</Link>
        </footer>{" "}
      </div>
    </>
  );
}
