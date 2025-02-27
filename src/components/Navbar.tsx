"use client";
import { motion } from "motion/react";
import SoundButton, { ButtonType } from "./SoundButton";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import { useSoundContext } from "@/context/SoundContext";

export default function Navbar({ scrollToSection }: { scrollToSection: any }) {
  const { isSoundOn, toggleSound } = useSoundContext();

  return (
    <div className="mt-10 flex w-full items-center justify-between py-8">
      <div>
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          className="rounded-full bg-white/20 p-4"
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
            <SoundButton
              onClick={() => scrollToSection("about")}
              sound={ButtonType.Click}
            >
              About
            </SoundButton>
          </li>
          <li>
            <SoundButton
              onClick={() => scrollToSection("skills")}
              sound={ButtonType.Click}
            >
              Skills
            </SoundButton>
          </li>
          <li>
            <SoundButton
              onClick={() => scrollToSection("projects")}
              sound={ButtonType.Click}
            >
              Projects
            </SoundButton>
          </li>
        </ul>
      </nav>
    </div>
  );
}
