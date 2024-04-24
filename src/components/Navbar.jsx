"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./ui/Button";
import BurgerMenu from "./ui/BurgerMenu";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleMenu = () => setOpen(!open);

  return (
    <header className="fixed z-10 top-0 left-0 right-0 py-[16px] xs:py-[20px] cLg:py-[24px] xl:py-[35px] bg-white w-full">
      <nav className="max-container flex-between w-full bg-white">
        <Link href="/">
          <Image
            src="/logo.svg"
            className="w-[115px] xs:w-[125px] md:w-full outline-none"
            width={170}
            height={50}
            alt="logo"
          />
        </Link>

        <ul
          className={`fixed cLg:static top-[10%] xs:top-[12%] z-50 flex flex-col cLg:flex-row cLg:items-center gap-[25px] cLg:gap-[50px] transition-all duration-300 ease-linear w-full cLg:w-auto bg-white cLg:bg-transparent pt-[20px] px-[15px] pb-[40px] cLg:p-0 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.label} onClick={() => setOpen(false)}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={`capitalize hover:text-[#e54530] transition-all duration-300 ease-linear ${
                    pathname === item.href && "text-[#e54530]"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <div className="nav-hover relative cursor-pointer capitalize hover:text-[#e54530] transition-all duration-300 ease-linear">
                  <div className="flex-start">
                    {item.label}
                    <KeyboardArrowDownIcon className="nav-icon" />
                  </div>

                  <div className="static cLg:absolute left-[-49px] w-full pt-[15px] dropdown transition-all duration-300 ease-linear">
                    <div className="flex flex-col gap-3 overflow-hidden w-[197px] p-[15px] bg-white company-shadow rounded-xl">
                      {item.links.map((i) => (
                        <Link
                          href={i.href}
                          key={i.href}
                          className="flex-start transition-all duration-300 ease-linear text-[16px] text-black leading-[19px] hover:text-[#e54530] dropdown-item"
                        >
                          <span className="mr-[7px]">{i.label}</span>
                          <ArrowForwardIcon
                            fontSize="small"
                            className="text-[#e54530] dropdown-icon"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <Button
          className="hidden cLg:inline-block"
          href="/contact"
          text="Contact Us"
        />

        <BurgerMenu open={open} handleMenu={handleMenu} />
      </nav>
    </header>
  );
};

export default Navbar;
