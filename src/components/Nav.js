import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <li>
          <Link href="/">Hannants</Link>
        </li>{" "}
        &nbsp; &nbsp;
        <li>
          <Link href="/about">New Hannants</Link>
        </li>{" "}
        &nbsp; &nbsp;
        <li>
          <Link href="/creative">Creative</Link>
        </li>{" "}
        &nbsp; &nbsp;
        <li>
          <Link href="/price-info">Product-Info</Link>
        </li>
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
