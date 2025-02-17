"use client";
import { useSoundContext } from "@/context/SoundContext";
import { Howl } from "howler";
import { useEffect } from "react";

let backgroundMusic: any = null;

export default function BackgroundMusic() {
  const { isSoundOn } = useSoundContext();

  useEffect(() => {
    if (!backgroundMusic) {
      backgroundMusic = new Howl({
        src: ["/sounds/background-music.mp3"],
        loop: true,
        volume: isSoundOn ? 0.6 : 0,
        preload: true,
      });

      // به محض بارگذاری کامپوننت، موسیقی را شروع کنید.
      if (isSoundOn) {
        backgroundMusic.play();
      }
    } else {
      backgroundMusic.volume(isSoundOn ? 0.5 : 0);
      if (isSoundOn) {
        backgroundMusic.play();
      } else {
        backgroundMusic.stop();
      }
    }

    console.log(isSoundOn);

    return () => {
      backgroundMusic.stop();
    };
  }, [isSoundOn]); // این بار به‌روزرسانی صدا برای وضعیت جدید

  return null;
}
