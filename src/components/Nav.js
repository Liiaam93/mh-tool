import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <Link href="/" className="start-home">
          Product Finder
        </Link>
        <Link href="/about" className="start-about">
          New Hannants
        </Link>
        <Link href="/price-info" className="start-info">
          Product-Info
        </Link>
        <div className="animation start-home"></div>
      </nav>
      <br />
      <br />
      <br />
      <div className="center">
        <Image
          className="logo"
          src="/mjob.png"
          alt="logo"
          align="center"
          width="171px"
          height="63px"
        />{" "}
        <br />
        Web Tool
      </div>
    </>
  );
};
export default NavBar;
