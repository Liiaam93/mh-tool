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
    const pageSrcs = [];

    for (let i = 1; i < 26; i++) {
      let pageSrc = $(
        `#product_listing > tbody > #_${i} > td:nth-child(2) > a`
      ).attr("href");

      pageSrc = "https://www.hannants.co.uk" + pageSrc;
      pageSrcs.push(pageSrc);
    }

    await Promise.all(
      pageSrcs.map((pageSrc) =>
        fetch(pageSrc)
          .then((res) => res.text())
          .then((html2) => {
            const $2 = cheerio.load(html2);

            let imageSrc = $2(
              "#product-main-image .main-image-inner:first-child img"
            ).attr("src");
            const name = $2("#product-details dd:nth-child(2)").text();
            const brand = $2("#product-details dd:nth-child(4)").text();
            const price = $2("#product-details dd:nth-child(6)").text();

            newProducts.push({
              name,
              imageSrc,
              brand,
              price,
              pageSrc,
            });
          })
      )
    );

    return newProducts;
  } catch (err) {}
};

module.exports = {
  fetchNewHannants,
};
