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
    const imageSrc2 = $("#product-thumbs-list > li:nth-child(2) > a").attr(
      "href"
    );
    const imageSrc3 = $("#product-thumbs-list > li:nth-child(3) > a").attr(
      "href"
    );
    const imageSrc4 = $("#product-thumbs-list > li:nth-child(4) > a").attr(
      "href"
    );
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

    let expensive = [
      "SBS Model",
      "PJ Productions",
      "Echelon FD",
      "AML",
      "Hobby 2000",
      "Clear Prop Models",
      "Copper State Models",
      "Merit",
      "FLY",
      "Yahu Models",
      "Infinity Model",
      "Lima November",
      "Peewit",
      "Dead Design Models",
      "HGW",
      "ResKit",
      "I LOVE KIT",
      "Milspec",
    ];
    let cheap = ["Dragon", "Zvezda"];
    let cost;

    if (expensive.includes(brand)) {
      cost = 1.21;
    } else if (cheap.includes(brand)) {
      cost = 0.8;
    } else {
      cost = 0.9;
    }

    let ourPrice = (price.replace("£", "") * cost).toFixed(2);
    const productData = {
      imageSrc,
      name,
      brand,
      style,
      price,
      scale,
      stock,
      pCode,
      imageSrc2,
      imageSrc3,
      imageSrc4,
      ourPrice,
    };

    return productData;
  } catch (err) {}
};

module.exports = {
  fetchHannants,
};
