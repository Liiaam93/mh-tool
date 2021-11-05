import fetch from "isomorphic-fetch";
import cheerio from "cheerio";

const fetchMH = async (code) => {
  const data = new URLSearchParams();
  data.append("search", code);
  data.append("pn", 1);
  data.append("pc", 1);
  const req = await fetch(
    "https://www.modelhobbies.co.uk/index.asp?function=search",
    {
      method: "POST",
      body: data,
    }
  );
  const html = await req.text();
  let $ = cheerio.load(html);

  const img = $(
    "#search-results > div.ekm-search-page-results > div > div > div.ekm-search-page-item__image"
  )
    .find("img")
    .attr("src");
  const productSRC =
    "https://www.modelhobbies.co.uk/" +
    $(
      "#search-results > div.ekm-search-page-results > div > div > div.ekm-search-page-item__image > a"
    ).attr("href");

  const req2 = await fetch(productSRC, {
    method: "GET",
  });

  const html2 = await req2.text();
  $ = cheerio.load(html2);
  const name = $(
    "body > main > article > ekm-section:nth-child(1) > section > div > div.main-prod-title > h1 > span"
  ).text();

  const price = $("#_EKM_PRODUCTPRICE").text();

  let stock = $("#product_form > div > div > div > div > p").text();

  stock ? stock : (stock = "More than 3");

  let desc = $(
    "body > main > article > ekm-section:nth-child(2) > section > div > div:nth-child(1) > div > span"
  ).text();

  //desc = desc.slice(name.length, desc.length);

  const ourPrice = price;
  const style = $(
    "body > main > article > ekm-section:nth-child(1) > section > section > span:nth-child(3) > a > span"
  ).text();
  const brand = "";
  const GTIN = $("#_EKM_PRODUCTATRRIBUTE_1_GTIN_VALUE").text();
  GTIN ? (desc = desc + "GTIN:" + GTIN) : (desc = desc);

  const scale = "";
  const supplier = "Model Hobbies";

  const res = {
    name: name,
    desc: desc,
    imageSrc: img,
    price: "£" + price,
    scale: scale,
    brand: brand,
    ourPrice: ourPrice,
    stock: stock,
    desc: desc,
    style: style,
    supplier: supplier,
  };
  return res;
};
module.exports = {
  fetchMH,
};
