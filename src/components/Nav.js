import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link href="/">Home</Link> &nbsp;
      <Link href="/about">New Hannants</Link> &nbsp;
      <Link href="/about">Expo</Link>
    </nav>
  );
};
export default NavBar;
