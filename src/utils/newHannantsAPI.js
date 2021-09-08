import fetch from "isomorphic-fetch";
import cheerio from "cheerio";

export const fetchNewHannants = async (page) => {
  try {
    const req = await fetch(
      "https://www.hannants.co.uk/newarrivals/?setPerPage=25&search_direction=asc&pageID=" +
        page
    );
    const html = await req.text();
    const $ = cheerio.load(html);

    const pageSrcs = [];

    for (let i = 1; i < 26; i++) {
      let pageSrc = $(
        `#product_listing > tbody > #_${i} > td:nth-child(2) > a`
      ).attr("href");

      pageSrc = "https://www.hannants.co.uk" + pageSrc;
      pageSrcs.push(pageSrc);
    }

    const newProducts = await Promise.all(
      pageSrcs.map((pageSrc) =>
        fetch(pageSrc)
          .then((res) => res.text())
          .then((html2) => {
            const $2 = cheerio.load(html2);

            let imageSrc = $2(
              "#product-main-image .main-image-inner:first-child img"
            ).attr("src");
            const brand = $2("#product-details dd:nth-child(4)").text();
            let price = $2("#product-details dd:nth-child(12)")
              .text()
              .replace(/\n/g, "");
            const arrival = $2(
              "#product-details > dl > dd:nth-child(20)"
            ).text();
            const name = $2("#product-details dd:nth-child(2)")
              .text()
              .replace(/\n/g, "");
            const stock = $2("#product-details dd:nth-child(16)")
              .text()
              .replace(/\n/g, "");
            const type = $2("#product-details dd:nth-child(10)")
              .text()
              .replace(/\n/g, "");
            let scale = $2("#product-details dd:nth-child(8)")
              .text()
              .replace(/\n/g, "")
              .replace(":", "/");

            if (scale === "No Scale") {
              scale === "-";
            }

            let pricey = price.split("£");
            let code = $2("#center_column > h1").text().split(" ");

            let expensive = [
              "SBS Model",
              "Modelsvit",
              "PJ Productions",
              "Star Decals",
              "Echelon FD",
              "AML",
              "Mac Distribution",
              "A & A Model",
              "Bronco",
              "Metallic Details",
              "Art Scale",
              "Micro-Mir",
              "DK Decals",
              "AVI Models",
              "Hobby 2000",
              "Clear Prop Models",
              "Model Maker Decals",
              "Copper State Models",
              "Merit",
              "FLY",
              "Yahu Models",
              "Infinity Model",
              "Lima November",
              "Peewit",
              "Dead Design Models",
              "Das Werk",
              "HGW",
              "TopNotch",
              "ResKit",
              "Armory",
              "I LOVE KIT",
              "Milspec",
              "Begemot",
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

            if (imageSrc == "/images/test.gif") {
              imageSrc = "/ph.jpg";
            }

            let ourPrice = (price.slice(0, 7).replace("£", "") * cost).toFixed(
              2
            );
            let offer;
            if (price.length > 8) {
              offer = "[Special offer, may be inaccurate]";
            } else {
              offer = "";
            }
            return {
              name,
              imageSrc,
              brand,
              price,
              offer,
              pageSrc,
              stock,
              pricey,
              code,
              arrival,
              type,
              ourPrice,
              scale,
            };
          })
      )
    );

    return newProducts;
  } catch (err) {}
};

module.exports = {
  fetchNewHannants,
};
