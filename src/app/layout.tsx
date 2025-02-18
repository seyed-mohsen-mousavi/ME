import BackgroundMusic from "@/components/BackgroundMusic";
import Navbar from "@/components/Navbar";
import { SoundProvider } from "@/context/SoundContext";
import { Metadata } from "next";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "SEYED | FullStack-dev",
  description: ` I am a full-stack developer with expertise in modern frameworks like
            React and Next.js. I have extensive experience working with various
            tools and technologies, including TypeScript, Tailwind CSS,
            PostgreSQL, and Node.js. My ability to create engaging and efficient
            user experiences, particularly with UI/UX design principles, allows
            me to develop complex projects effectively and efficiently.`,
  icons: {
    icon: "/images/logo.jpeg",
  },
};
const montserrat = localFont({
  src: [
    {
      path: "./fonts/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  display: "swap",
});
const audiowide = localFont({
  src: [
    {
      path: "./fonts/Audiowide-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-audiowide",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="-behavior">
      <body
        className={`${montserrat.className} ${audiowide.variable} bhor antialiased selection:bg-white selection:text-black`}
      >
        <SoundProvider>
          <AnimatedCursor
            color="255, 255, 255"
            outerStyle={{
              boxShadow: "0px 0px 10px 2px rgba(255, 255, 255, 0.7)",
            }}
          />
          <header>
            <Navbar />
          </header>
          <BackgroundMusic />

          <main className="mx-auto max-w-[1920px] px-5 sm:px-10 md:px-20 lg:px-32">
            {children}
          </main>
        </SoundProvider>
      </body>
    </html>
  );
}
