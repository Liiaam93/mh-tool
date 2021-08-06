import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <Link href="/">Home</Link> &nbsp; &nbsp; &nbsp;
        <Link href="/about">New Hannants</Link> &nbsp; &nbsp; &nbsp;
        <Link href="/about">Expo</Link>
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
