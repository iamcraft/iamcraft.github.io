"use client";

import style from "./header.module.css";
import Link from "next/link";
import { useState } from "react";
import {
  IoClose,
  IoLogoWhatsapp,
  IoMenuSharp,
  IoStorefrontOutline,
} from "react-icons/io5";

const headerData = {
  logo: (
    <div className="flex gap-1 text-base items-center">
      <IoStorefrontOutline className="text-4xl" />
      <span className="text-xl">iamcraft</span>
    </div>
  ),
  menus: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" },
  ],
  telButton: {
    label: "0812-8335-4153",
    icon: <IoLogoWhatsapp className="inline-block" />,
    href: "https://wa.me/6281283354153",
  },
};

const DesktopNavbar = () => (
  <div className={style.desktopHeader}>
    <div className={style.headerBar}>
      <div className={style.headerRow}>
        <div>
          <div className={style.headerLeft}>
            <Link href={"/"}>{headerData.logo}</Link>
          </div>
          <div className={style.headerRight}>
            <nav>
              <ul>
                {headerData.menus.map((d) => (
                  <li key={d.label}>
                    <Link href={d.href}>{d.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={style.telButton}>
              <a href={headerData.telButton.href} target="_blank">
                {headerData.telButton.icon}
                <span>{headerData.telButton.label}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(!false);

  return (
    <div className={style.mobileHeader}>
      <div className={style.headerBar}>
        <div className={style.headerRow}>
          <div>
            <div className={style.headerLeft}>
              <Link href={"/"}>{headerData.logo}</Link>
            </div>
            <div className={style.headerRight}>
              <div className={style.telButton}>
                <a href={headerData.telButton.href} target="_blank">
                  {headerData.telButton.icon}
                  <span>{headerData.telButton.label}</span>
                </a>
              </div>
              <div>
                <button
                  className={style.burgerMenu}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen((p) => !p);
                  }}
                >
                  {!isOpen ? <IoMenuSharp /> : <IoClose />}
                </button>
                <nav
                  className={`${!isOpen ? "hidden" : ""} ${style.navWrapper}`}
                >
                  <ul>
                    {headerData.menus.map((d) => (
                      <li key={d.label}>
                        <Link href={d.href}>{d.label}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  return (
    <header className={style.wrapper}>
      <DesktopNavbar />
      <MobileNavbar />
      <div id="mobile"></div>
    </header>
  );
}
