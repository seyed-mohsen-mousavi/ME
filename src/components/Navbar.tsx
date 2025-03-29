import { motion } from "framer-motion";

export default function Navbar({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) {
  return (
    <nav
      className={`fixed left-0 top-0 z-10 hidden w-full flex-row-reverse items-center justify-between py-2 sm:static sm:flex sm:py-8`}
    >
      <ul className="flex items-center gap-10">
        <motion.li
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay : 0.3 }}
        >
          <button onClick={() => scrollToSection("about")}>About</button>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay : 0.1 }}
        >
          <button onClick={() => scrollToSection("skills")}>Skills</button>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay : 0 }}
        >
          <button onClick={() => scrollToSection("projects")}>Projects</button>
        </motion.li>
      </ul>
    </nav>
  );
}
