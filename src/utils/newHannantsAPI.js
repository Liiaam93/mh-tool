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

    let newProducts = [];

    for (let i = 1; i < 26; i++) {
      let name = $(`#product_listing > tbody > #_${i} > td:nth-child(2) > a`)
        .text()
        .replace(/\n/g, "");
      let pageSrc = $(
        `#product_listing > tbody > #_${i} > td:nth-child(2) > a`
      ).attr("href");
      let price = $(`#product_listing > tbody >#_${i} > td.price.notranslate`)
        .text()
        .replace(/\n/g, "");
      const scale = $(`#product_listing > tbody > #_${i} > td:nth-child(3)`)
        .text()
        .replace(/\n/g, "")
        .replace(":", "/");
      const arrival = $(`#product_listing > tbody > #_${i} > td:nth-child(7)`)
        .text()
        .replace(/\n/g, "");
      const stock = $(
        `#product_listing > tbody > #_${i} > td.stock_level > span`
      )
        .text()
        .replace(/\n/g, "");
      const type = $(`#product_listing > tbody > #_${i} >  td:nth-child(5)`)
        .text()
        .replace(/\n/g, "");

      pageSrc = "https://www.hannants.co.uk" + pageSrc;

      let pricey = price.split("£");

      const req2 = await fetch(pageSrc);
      const html2 = await req2.text();
      const $2 = cheerio.load(html2);

      let imageSrc = $2(
        "#product-main-image .main-image-inner:first-child img"
      ).attr("src");
      const name2 = $2("#product-details dd:nth-child(2)")
        .text()
        .replace(/\n/g, "");
      const brand = $2("#product-details dd:nth-child(4)")
        .text()
        .replace(/\n/g, "");
      if (imageSrc == null || imageSrc == "/images/test.gif") {
        imageSrc = "/ph.jpg";
      }

      let code = name.split(" ");

      if (scale == "No Scale") {
        scale = "-";
      }
      newProducts.push({
        name2,
        type,
        imageSrc,
        brand,
        type,
        stock,
        price,
        arrival,
        pageSrc,
        code,
        pricey,
      });
    }

    return newProducts;
  } catch (err) {}
};

module.exports = {
  fetchNewHannants,
};
