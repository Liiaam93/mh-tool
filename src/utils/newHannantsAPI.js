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

    for (let i = 1; i < 25; i++) {
      let name = $(`#product_listing > tbody > #_${i} > td:nth-child(2) > a`)
        .text()
        .replace(/\n/g, "");
      let img2 = $(
        `#product_listing > tbody > #_${i} > td.image_cell > a > img.big-image.loaded`
      ).attr("src");
      let img = $(
        `#product_listing > tbody > #_${i} > td.image_cell > a > img`
      ).attr("src");
      let desc = $(`#product_listing > tbody > #_${i} > td:nth-child(4)`)
        .text()
        .replace(/\n/g, "");
      let price = $(`#product_listing > tbody >#_${i} > td.price.notranslate`)
        .text()
        .replace(/\n/g, "");
      let scale = $(`#product_listing > tbody > #_${i} > td:nth-child(3)`)
        .text()
        .replace(/\n/g, "");
      let arrival = $(`#product_listing > tbody > #_${i} > td:nth-child(7)`)
        .text()
        .replace(/\n/g, "");
      let stock = $(`#product_listing > tbody > #_${i} > td.stock_level > span`)
        .text()
        .replace(/\n/g, "");
      let type = $(`#product_listing > tbody > #_${i} >  td:nth-child(5)`)
        .text()
        .replace(/\n/g, "");
      newProducts.push({
        name: name,
        scale: scale,
        img: img,
        img2: img2,
        desc: desc,
        type: type,
        price: price,
        stock: stock,
        arrival: arrival,
      });
    }

    return newProducts;
  } catch (err) {}
};

module.exports = {
  fetchNewHannants,
};
