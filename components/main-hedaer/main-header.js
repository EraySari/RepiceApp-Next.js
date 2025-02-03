import logoImg from "@/public/images/logo.png";
import Link from "next/link";

import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackGround from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackGround />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="Logo" priority />
          NextLevel
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink pathName="/meals"> Meals</NavLink>
            </li>
            <li>
              <NavLink pathName="/community"> Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
