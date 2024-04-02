import { FunctionComponent } from "react";
import styles from "./footer.module.scss";
import Link from "next/link";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <Link href={"https://photos.dinodev.hu"}>
        application credit: photos.dinodev.hu
      </Link>
      {"  |  "}
      <Link href={"/privacy"}>privacy information</Link>
      {"  |  "}
      <Link href={"/tos"}>terms of service</Link>
    </footer>
  );
};

export default Footer;
