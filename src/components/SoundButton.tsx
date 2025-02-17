"use client";
import { useSoundContext } from "@/context/SoundContext";
import { Howl } from "howler";
import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonType {
  Click = "click",
  Notification = "notification",
  Error = "error",
}

const soundMap: Record<ButtonType, string> = {
  [ButtonType.Click]: "/sounds/switch-sound.mp3",
  [ButtonType.Notification]: "/sounds/notification.mp3",
  [ButtonType.Error]: "/sounds/error.mp3",
};

interface SoundButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  sound: ButtonType;
  children: ReactNode;
}

export default function SoundButton({
  sound,
  children,
  ...props
}: SoundButtonProps) {
  const { isSoundOn, stopAllSounds } = useSoundContext(); 
  const soundSrc = soundMap[sound];
  const soundClick = new Howl({
    src: [soundSrc],
    volume: isSoundOn ? 0.5 : 0,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    stopAllSounds();
    soundClick.play();
    if (props.onClick) props.onClick(e);
  };

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
}
