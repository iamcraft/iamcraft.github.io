import Image from "next/image";
import style from "./header.module.css";
import Link from "next/link";

const headerData = {
  logo: {
    alt: "",
    imgUri: "",
  },
  menus: [
    { label: "Home" },
    { label: "About" },
    { label: "Services" },
    { label: "Contact" },
  ],
};

const DesktopNavbar = () => (
  <div className={style.desktopHeader}>
    <div className={style.headerBar}>
      <div className={style.headerRow}>
        <div>
          <div className={style.headerLeft}>
            <Link href={"/"}>
              <Image
                src="https://websitedemos.net/hope-02/wp-content/uploads/sites/1410/2023/10/logo-white-1-60x60.png"
                width={60}
                height={60}
                alt="logo"
              />
            </Link>
          </div>
          <div className={style.headerRight}>
            <nav>
              <ul>
                {headerData.menus.map((d) => (
                  <li key={d.label}>
                    <Link href={"#"}>{d.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <button>202-555-7890</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Header() {
  return (
    <header className={style.wrapper}>
      <DesktopNavbar />
      <div id="mobile"></div>
    </header>
  );
}
