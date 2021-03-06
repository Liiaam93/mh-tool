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
    let name = $("#product-details dd:nth-child(2)").text();
    const brand = $("#product-details dd:nth-child(4)")
      .text()
      .replace(/\n/g, "");
    const style = $("#product-details dd:nth-child(10)")
      .text()
      .replace(/\n/g, "");
    const price = $("#product-details dd:nth-child(12)")
      .text()
      .replace(/\n/g, "");
    let scale = $("#product-details dd:nth-child(8)")
      .text()
      .replace(/\n/g, "")
      .replace(":", "/");
    const stock = $("#product-details dd:nth-child(16)")
      .text()
      .replace(/\n/g, "");
    const pCode = $("#product-details > dl > dd:nth-child(6)")
      .text()
      .replace(/\n/g, "");

    if (scale == "No Scale") {
      scale = "-";
    }

    let expensive = [
      "A & A Model",
      "Art Scale",
      "Anigrand Craftswork",
      "AML",
      "Armory",
      "Attack Kits",
      "AVI Models",
      "Avalon",
      "Begemot",
      "Blackdog",
      "Black Dog",
      "Bronco",
      "Clear Prop Models",
      "Copper State Models",
      "Das Werk",
      "DK Decals",
      "Dead Design Models",
      "Echelon FD",
      "FLY",
      "HGW",
      "Hobby 2000",
      "Infinity Model",
      "I LOVE KIT",
      "ION Model",
      "KV Models",
      "Mac Distribution",
      "Micro-Mir",
      "Metallic Details",
      "Milspec",
      "Merit",
      "Model Maker Decals",
      "Model Art",
      "Modelsvit",
      "Linear-A",
      "Lima November",
      "PJ Productions",
      "Peewit",
      "Quinta Studio",
      "ResKit",
      "SBS Model",
      "Star Decals",
      "TopNotch",
      "Thunderbird Models",
      "Yahu Models",
      "Zebrano",
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

    let ourPrice = (price.slice(0, 7).replace("??", "") * cost).toFixed(2);
    let offer;

    const [fPrice, oPrice] = price.split(" ");

    if (price.length > 8) {
      offer = " [ITEM IS SPECIAL OFFER... our price may be inaccurate!]";
    }

    if (name.includes("(designed")) {
      name = name.replace("(designed", "- Designed").replace("kits)", "kits");
    }
    const supplier = "Hannants";
    const productData = {
      imageSrc,
      name,
      brand,
      style,
      price,
      offer,
      scale,
      stock,
      pCode,
      supplier,
      imageSrc2,
      imageSrc3,
      imageSrc4,
      ourPrice,
      oPrice,
    };

    return productData;
  } catch (err) {}
};

module.exports = {
  fetchHannants,
};
