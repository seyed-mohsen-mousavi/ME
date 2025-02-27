export default function Navbar({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) {
  return (
    <div className="fixed left-0 top-0 z-10 flex w-full flex-row-reverse items-center justify-between py-2 sm:static sm:py-8">
      <div>
        <nav className={`hidden sm:block`}>
          <ul className="flex items-center gap-10">
            <li>
              <button onClick={() => scrollToSection("about")}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("skills")}>Skills</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")}>
                Projects
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
