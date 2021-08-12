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
  ).text();
  const price = $(
    "body > table:nth-child(6) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td.mws_boxCenter > table > tbody > tr > td > table.productListing > tbody > tr.productListing-odd > td:nth-child(4)"
  ).text();
  const stock = $(
    "body > table:nth-child(6) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td.mws_boxCenter > table > tbody > tr > td > table.productListing > tbody > tr.productListing-odd > td:nth-child(5)"
  ).text();
  const pCode = $(
    "body > table:nth-child(6) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td.mws_boxCenter > table > tbody > tr > td > table.productListing > tbody > tr.productListing-odd > td:nth-child(2)"
  ).text();

  const imgSrc = `http://www.creativemodels.co.uk/images/Products/${code}m.jpg`;

  creativeProduct = {
    name,
    pCode,
    imgSrc,
    price,
    stock,
  };
  return creativeProduct;
};

module.exports = {
  fetchCreative,
};
