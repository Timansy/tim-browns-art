import Link from "next/link";
import { FunctionComponent } from "react";
import { FaHome, FaImages, FaPagelines } from "react-icons/fa";
import styles from "./navbar.module.scss";
import { CgBoy } from "react-icons/cg";
import { FaBroom, FaCamera, FaPencil } from "react-icons/fa6";

const Navbar: FunctionComponent = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.left}>
        <li>
          <Link href="/">
            <FaImages
              className={styles.icon}
              title="Home"
              aria-label="Home"
              role="img"
            />
            <span>Gallery</span>
          </Link>
        </li>
        <li>
          <Link href="/paintings">
            <FaBroom
              className={styles.icon}
              title="Paintings"
              aria-label="Paintings"
              role="img"
            />
            <span>Paintings</span>
          </Link>
        </li>
        <li>
          <Link href="/illustrations">
            <FaPencil
              className={styles.icon}
              title="Illustrations"
              aria-label="Illustrations"
              role="img"
            />
            <span>Illustrations</span>
          </Link>
        </li>
        <li>
          <Link href="/photos">
            <FaCamera
              className={styles.icon}
              title="Photos"
              aria-label="Photo"
              role="img"
            />
            <span>Photos</span>
          </Link>
        </li>
        <li>
          <Link href="/collections">
            <FaPagelines
              className={styles.icon}
              title="Collections"
              aria-label="Collections"
              role="img"
            />
            <span>Collections</span>
          </Link>
        </li>
      </ul>

      <ul className={styles.right}>
        <Link href="/about">
          <span>ABOUT/CONTACT</span>
          <CgBoy
            className={styles.icon}
            title="About"
            aria-label="About"
            role="img"
          />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
