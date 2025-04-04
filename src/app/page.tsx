"use client";
import Link from "next/link";
import { RiTelegram2Fill, RiTailwindCssFill } from "react-icons/ri";
import {
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaNode,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiAdobephotoshop, SiMongodb } from "react-icons/si";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import Navbar from "@/components/Navbar";
import { useRef } from "react";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import HeroSections from "@/components/home/HeroSections";
import { Links } from "@/types";
import AboutMe from "@/components/home/AboutMe";
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
const socialLinks: Links[] = [
  { icon: RiTelegram2Fill, href: "https://t.me/XSeyed" },
  { icon: FaGithub, href: "https://github.com/seyed-mohsen-mousavi" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/seyed-mohsen-840941277/",
  },
];
// ---------------------------------

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
        <HeroSections socialLinks={socialLinks} />
        <hr className="shadow-2xl shadow-white blur-sm" />
        {/* About Me */}
        <AboutMe aboutRef={aboutRef} />
        {/* Skills */}
        <Skills skillsRef={skillsRef} skillData={skillData} />
        {/* Projects */}
        <Projects projectsRef={projectsRef} />
        <hr className="-mb-5 shadow-2xl shadow-white blur-sm" />
        <footer className="mx-auto mb-10 sm:!mb-4 font-mod">
          <span className="tetxt-sm text-neutral-400">
            For more information, call me at:{" "}
          </span>
          <Link href="tel:09935071519">+98-9935071519</Link>
        </footer>
      </div>
    </>
  );
}
