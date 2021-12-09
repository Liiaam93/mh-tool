import fetch from "isomorphic-fetch";
import cheerio from "cheerio";

const fetchCreative = async (code) => {
  const req = await fetch(
    `http://www.creativemodels.co.uk/advanced_search_result.php?keywords=${code}`
  );

  const html = await req.text();
  const $ = cheerio.load(html);

  const pageSrc = $(
    "body > table:nth-child(6) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td.mws_boxCenter > table > tbody > tr > td > table.productListing > tbody > tr.productListing-odd > td:nth-child(3) > a"
  ).attr("href");

  const req2 = await fetch(pageSrc);
  const html2 = await req2.text();
  const $2 = cheerio.load(html2);
  const brand = $2(
    "body > table:nth-child(6) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td.mws_boxCenter > table > tbody > tr > td > form > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td"
  )
    .text()
    .split(" ")[0];

  let scale = $2(
    "body > table:nth-child(6) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td.mws_boxCenter > table > tbody > tr > td > form > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td"
  ).text();
  scale = scale
    .slice(scale.search(":") - 1, scale.search(":") + 4)
    .replace(":", "/");

  let name = $2(
    "body > table:nth-child(6) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td.mws_boxCenter > table > tbody > tr > td > form > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td"
  ).text();
  name = name.slice(name.search(":") + 4, name.length);

  const desc = $2(
    "body > table:nth-child(6) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td.mws_boxCenter > table > tbody > tr > td > form > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.smalltext2"
  )
    .text()
    .trim();
  name += " - \n" + desc;

  const imageSrc =
    "http://www.creativemodels.co.uk/" + $2("#mainimage").attr("src");

  const price = $2(
    "body > table:nth-child(6) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td.mws_boxCenter > table > tbody > tr > td > form > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td:nth-child(3)"
  ).text();

  const stock = $2(
    "body > table:nth-child(6) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td.mws_boxCenter > table > tbody > tr > td > form > table > tbody > tr:nth-child(7) > td > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td:nth-child(4) > img"
  ).attr("title");

  const style = $2(
    "body > table:nth-child(6) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td.mws_boxCenter > table > tbody > tr > td > form > table > tbody > tr:nth-child(11) > td > table > tbody > tr:nth-child(2) > td.smalltext2"
  ).text();

  const cheap = ["Masterbox", "Dragon", "Miniart", "Hobbyboss"];
  let cost;
  if (cheap.includes(brand)) {
    cost = 0.8;
  } else {
    cost = 0.9;
  }

  let ourPrice = (price.replace("£", "") * cost).toFixed(2);
  const supplier = "Creative";

  const creativeProduct = {
    brand,
    scale,
    style,
    supplier,
    name,
    imageSrc,
    price,
    stock,
    ourPrice,
    pageSrc,
  };
  return creativeProduct;
};

module.exports = {
  fetchCreative,
};
