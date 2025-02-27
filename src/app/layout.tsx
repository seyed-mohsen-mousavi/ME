import BackgroundMusic from "@/components/BackgroundMusic";
import { SoundProvider } from "@/context/SoundContext";
import { Metadata } from "next";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Seyed Mohsen Mousavi | Full-Stack Developer",
  description: `I am a highly skilled full-stack developer with expertise in modern frameworks like React and Next.js. 
    With extensive experience in TypeScript, Tailwind CSS, PostgreSQL, and Node.js, I specialize in building scalable and high-performance applications. 
    My deep understanding of UI/UX principles allows me to craft intuitive and visually appealing user experiences. 
    Additionally, I have a strong background in SEO, responsive design, and optimizing web applications for performance and accessibility. 
    Passionate about clean code and best practices, I am always eager to learn and implement the latest technologies to enhance development efficiency.`,
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Node.js",
    "UI/UX Design",
    "SEO Optimization",
    "Web Performance",
    "Frontend Development",
    "Backend Development",
  ],
  icons: {
    icon: "/images/logo.jpeg",
  },
  openGraph: {
    title: "Seyed Mohsen Mousavi | Full-Stack Developer",
    description: `I specialize in developing modern and scalable web applications using React, Next.js, TypeScript, and more.`,
    url: "https://your-website.com",
    siteName: "Seyed Mohsen Mousavi",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Seyed Mohsen Mousavi Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seyed Mohsen Mousavi | Full-Stack Developer",
    description: `Experienced full-stack developer skilled in React, Next.js, TypeScript, and backend technologies.`,
    images: ["/images/og-image.jpeg"],
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

          {/* <BackgroundMusic /> */}

          <section className="mx-auto max-w-[1920px] px-5 sm:px-10 md:px-20 lg:px-32">
            {children}
          </section>
        </SoundProvider>
      </body>
    </html>
  );
}
