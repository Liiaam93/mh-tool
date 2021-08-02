import Head from "next/head";
import Product from "../components/Product";
import React, { useState } from "react";
import NavBar from "../components/Nav";

export default function Home() {
  const [code, setCode] = useState("Enter a Product Code");
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadProduct = async () => {
    setLoading(true);
    const req = await fetch(`/api/id/${code}`);
    const json = await req.json();
    setProduct(json);
    setLoading(false);
    console.log(product);
  };
  return (
    <>
      <NavBar />
      <div>
        <Head>
          <title>MH Web Tool</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <input
          value={code}
          id="code"
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={() => loadProduct()} id="pbtn">
          Load
        </button>
        {loading && <div>LOADING</div>}
        <Product productData={product} />
      </div>
    </>
  );
}
