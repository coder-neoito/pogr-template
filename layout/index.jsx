import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/layout.module.scss";
import { useRouter } from "next/router";

const links = [
  {
    title: "Developers",
    url: "/developers",
  },
  {
    title: "Gamers",
    url: "/",
  },
  {
    title: "Pricing",
    url: "/pricing",
  },
  {
    title: "SDK",
    url: "/sdk",
  },
  {
    title: "LVLup",
    url: "/lvlup",
  },
];

const Layout = ({ children }) => {
  const { asPath } = useRouter();
  return (
    <div className={styles.layout}>
      <header>
        <div className="container">
          <Link href="/">
            <Image
              src="https://pogr.gg/static/brand/brand-horizontal.png"
              width={100}
              height={100}
              alt="pogr"
            />
          </Link>
          <nav>
            <ul>
              {links.map((l) => (
                <li className={l.url === asPath ? styles.active : ""}>
                  <Link href={l.url}>{l.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
