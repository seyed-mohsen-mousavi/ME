"use client"
import { createContext, useContext, useState } from "react";
import { Howl } from "howler";

interface SoundContextType {
  isSoundOn: boolean;
  stopAllSounds: () => void;
  toggleSound: () => void;
  backgroundMusic: Howl | null;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [backgroundMusic, setBackgroundMusic] = useState<Howl | null>(null);

  const stopAllSounds = () => {
    if (backgroundMusic) {
      backgroundMusic.stop();
    }
  };

  const toggleSound = () => {
    setIsSoundOn((prev) => !prev);
    if (!isSoundOn && backgroundMusic) {
      backgroundMusic.play();
    }
  };

  return (
    <SoundContext.Provider
      value={{
        isSoundOn,
        stopAllSounds,
        toggleSound,
        backgroundMusic,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export const useSoundContext = (): SoundContextType => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSoundContext must be used within a SoundProvider");
  }
  return context;
};
