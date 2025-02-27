"use client";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useState } from "react";

export default function Navbar({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
        {/* <button
          onClick={() => setShow(!show)}
          className="m-2 rounded-full bg-white/40 p-2 backdrop-blur transition-all ease-linear sm:invisible sm:opacity-0"
        >
          <HiOutlineMenuAlt3 className="size-7" />
        </button> */}
        <Button
          onPress={onOpen}
          className="m-2 rounded-full bg-white/40 p-2 backdrop-blur transition-all ease-linear sm:invisible sm:opacity-0"
        >
          <HiOutlineMenuAlt3 className="size-7" />
        </Button>
        <Drawer
          className="rounded-none sm:hidden"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          backdrop="blur"
        >
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerHeader className="flex flex-col gap-1">
                  SEYED
                </DrawerHeader>
                <DrawerBody>
                  <nav>
                    <ul className="flex flex-col items-center gap-10">
                      <li className="w-full text-right text-lg font-bold">
                        <button
                          className="h-full w-full"
                          onClick={() => {
                            scrollToSection("about");
                            onClose();
                          }}
                        >
                          About
                        </button>
                      </li>
                      <li className="w-full text-right text-lg font-bold">
                        <button
                          className="h-full w-full"
                          onClick={() => {
                            scrollToSection("skills");
                            onClose();
                          }}
                        >
                          Skills
                        </button>
                      </li>
                      <li className="w-full text-right text-lg font-bold">
                        <button
                          className="h-full w-full"
                          onClick={() => {
                            scrollToSection("projects");
                            onClose();
                          }}
                        >
                          Projects
                        </button>
                      </li>
                    </ul>
                  </nav>
                </DrawerBody>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
