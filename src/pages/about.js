import NavBar from "../components/Nav";
import Head from "next/head";
import NewHannants from "../components/NewHannants";
import React, { useState, useEffect } from "react";

export default function About() {
  const [pageNum, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const nextPage = () => setPage(pageNum + 1);
  const prevPage = () => setPage(pageNum - 1 || 1); // This stops you setting it to 0 in the first place

  useEffect(() => {
    const loadNewProducts = async () => {
      setLoading(true);
      const req = await fetch(`/api/nhan/${pageNum}`);
      const json = await req.json();
      setProducts(json);
      setLoading(false);
    };
    loadNewProducts();
  }, [pageNum, setLoading, setProducts]);

  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <>
      <NavBar />
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <button onClick={prevPage}>Previous</button>
        <button onClick={nextPage}>Next</button> Page {pageNum}
        {loading && <div>LOADING</div>}
        <NewHannants newProducts={products} />
      </div>
    </>
  );
}
