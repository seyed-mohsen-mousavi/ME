"use client";
import Link from "next/link";
import { motion } from "motion/react";
import SoundButton, { ButtonType } from "./SoundButton";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import { useSoundContext } from "@/context/SoundContext";

export default function Navbar() {
  const { isSoundOn, toggleSound } = useSoundContext(); 

  return (
    <div className="flex w-full justify-between items-center mt-10 py-8 px-32">
      <div>
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          className="p-4 bg-white/20 rounded-full"
          onClick={toggleSound}
        >
          {isSoundOn ? (
            <SpeakerWaveIcon className="size-5" />
          ) : (
            <SpeakerXMarkIcon className="size-5" />
          )}
        </motion.button>
      </div>
      <nav>
        <ul className="flex items-center gap-10">
          <li>
            <SoundButton sound={ButtonType.Click}>
              <Link href="#aboutMe">About</Link>
            </SoundButton>
          </li>
          <li>
            <SoundButton sound={ButtonType.Click}>
              <Link href="#projects">Projects</Link>
            </SoundButton>
          </li>
          <li>
            <SoundButton sound={ButtonType.Click}>
              <Link href="#skills">Skills</Link>
            </SoundButton>
          </li>
        </ul>
      </nav>
    </div>
  );
}

