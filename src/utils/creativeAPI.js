import fetch from "isomorphic-fetch";
import cheerio from "cheerio";

export const fetchCreative = async (code) => {
  const req = await fetch(
    `http://www.creativemodels.co.uk/advanced_search_result.php?keywords=${code}`
  );
  const html = await req.text();
  const $ = cheerio.load(html);
  const name = $(
    "body > table:nth-child(6) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td.mws_boxCenter > table > tbody > tr > td > table.productListing > tbody > tr.productListing-odd > td:nth-child(3)"
  )
    .text()
    .replace(/&nbsp;/g, "");
  const price = $(
    "body > table:nth-child(6) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td.mws_boxCenter > table > tbody > tr > td > table.productListing > tbody > tr.productListing-odd > td:nth-child(4)"
  )
    .text()
    .replace(/&nbsp;/g, "");
  const stock = $(
    "body > table:nth-child(6) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td.mws_boxCenter > table > tbody > tr > td > table.productListing > tbody > tr.productListing-odd > td:nth-child(5)"
  )
    .text()
    .replace(/&nbsp;/g, "");
  const pCode = $(
    "body > table:nth-child(6) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td.mws_boxCenter > table > tbody > tr > td > table.productListing > tbody > tr.productListing-odd > td:nth-child(2)"
  )
    .text()
    .replace(/&nbsp;/g, "");
  const pageSrc = $(
    "body > table:nth-child(6) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td.mws_boxCenter > table > tbody > tr > td > table.productListing > tbody > tr.productListing-odd > td:nth-child(3) > a"
  ).attr("href");

  const imgSrc = `http://www.creativemodels.co.uk/images/Products/${code.toUpperCase()}m.jpg`;

  const creativeProduct = {
    name,
    pCode,
    imgSrc,
    price,
    stock,
    pageSrc,
  };
  return creativeProduct;
};

module.exports = {
  fetchCreative,
};
