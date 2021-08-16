import fetch from "isomorphic-fetch";
import cheerio from "cheerio";

export const fetchHannants = async (code) => {
  try {
    const req = await fetch("https://www.hannants.co.uk/product/" + code);
    const html = await req.text();
    const $ = cheerio.load(html);
    const imageSrc = $(
      "#product-main-image .main-image-inner:first-child img"
    ).attr("src");

    const name = $("#product-details dd:nth-child(2)")
      .text()
      .replace(/\n/g, "");
    const brand = $("#product-details dd:nth-child(4)")
      .text()
      .replace(/\n/g, "");
    const style = $("#product-details dd:nth-child(10)")
      .text()
      .replace(/\n/g, "");
    const price = $("#product-details dd:nth-child(12)")
      .text()
      .replace(/\n/g, "");
    const scale = $("#product-details dd:nth-child(8)")
      .text()
      .replace(/\n/g, "");
    const stock = $("#product-details dd:nth-child(16)")
      .text()
      .replace(/\n/g, "");
    const pCode = $("#product-details > dl > dd:nth-child(6)")
      .text()
      .replace(/\n/g, "");

    const productData = {
      imageSrc,
      name,
      brand,
      style,
      price,
      scale,
      stock,
      pCode,
    };

    return productData;
  } catch (err) {}
};

module.exports = {
  fetchHannants,
};
