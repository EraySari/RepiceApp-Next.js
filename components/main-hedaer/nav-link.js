"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./nav-link.module.css";

export default function NavLink({ pathName, children }) {
  const path = usePathname();
  return (
    <Link
      href={pathName}
      className={path.startsWith(pathName) ? classes.active : undefined}
    >
      {children}
    </Link>
  );
}
