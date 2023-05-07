import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/layout.module.scss";

const Layout = ({ children }) => {
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
              <li className="active">
                <Link href="/developers">Developers</Link>
              </li>
              <li>
                <Link href="/">Gamers</Link>
              </li>
              <li>
                <Link href="pricing">Pricing</Link>
              </li>
              <li>
                <Link href="sdk">SDK</Link>
              </li>
              <li>
                <Link href="lvlup">LVLup</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
