import React from "react";
import styles from "./Nav.module.css";
import dogLogo from "./logoTiger.png";
import { links } from "./links.json";

type Link = {
  label: string;
  href: string;
};

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <div className={styles.linksContainer}>
      {links.map((link: Link) => {
        return (
          <div key={link.href} className={styles["link"]}>
            <a href={link.href}>{link.label}</a>
          </div>
        );
      })}
    </div>
  );
};

const Nav: React.FC<{}> = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img width={100} src={dogLogo} alt="ERROR" />
        </div>
        <Links links={links} />
      </nav>
    </>
  );
};

export default Nav;
