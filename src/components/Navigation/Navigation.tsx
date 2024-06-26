"use client";

import SearchIcon from "@/assets/icons/SearchIcon";
import { useTheme } from "next-themes";
import Image from "next/image";
import NavList from "./NavList";
import ThemeSwitcher from "../ThemeSwitcher";
import { logoDark, logoWhite } from "@/constants";
import { NAVIGATION_LINKS } from "@/constants/Navigation.constants";
import Link from "next/link";

const Navigation = () => {
  const { resolvedTheme } = useTheme();

  return (
    <header className="relative top-0 z-20 bg-bgColor px-4 py-2 md:sticky md:px-0 md:py-1">
      <nav className="mx-auto flex max-w-[800px] flex-wrap items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={resolvedTheme === "light" ? logoWhite : logoDark}
            alt="logo"
            width={40}
            height={40}
          />

          <p className="text-caption1 font-bold capitalize text-text-primary">
            Arman
          </p>
        </div>

        <NavList links={NAVIGATION_LINKS} />

        <div className="flex items-center gap-x-12 sm:order-2">
          <Link href={"/search"} className="cursor-pointer">
            <SearchIcon
              viewBox="0 0 24 24"
              className={`h-6 w-6 cursor-pointer [&_path]:stroke-text-primary`}
            />
          </Link>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
