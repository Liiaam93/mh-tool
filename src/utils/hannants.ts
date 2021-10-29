import fetch from "isomorphic-fetch";
import cheerio, { Element } from "cheerio";
import { Product } from "../../types";
import { ImgArray } from "../../types";
import { expensive } from "../../types";

let multiplier: number = 0.9;

export const fetchProduct = async (code: string): Promise<Product[]> => {
  const req = await fetch(`https://www.hannants.co.uk/product/${code}`);
  const data = await req.text();
  const $ = cheerio.load(data);
  const productElements: Element[] = $("#product-details").toArray();
  const imgElements: Element[] = $("#product-thumbs-list").toArray();

  const product: Product[] = productElements.map((el: Element) => {
    const brand: string = $(el).find("dd:nth-child(4)").text();
    const price: string = $(el)
      .find("dd:nth-child(12)")
      .text()
      .replace("\n", "")
      .replace("\t", "")
      .replace("£", "");
    const scale: string = $(el)
      .find("dd:nth-child(8)")
      .text()
      .replace(":", "/");
    const type: string = $(el).find("dd:nth-child(10)").text();
    const stock: string = $(el)
      .find("dd:nth-child(16)")
      .text()
      .replace("\n", "");
    const name: string = $(el).find("dd:nth-child(2)").text().replace("\n", "");
    const id: string = $(el).find("dd:nth-child(6)").text();
    const img: string = $("#product-main-image").find("img").attr("src");
    if (expensive.includes(brand)) {
      multiplier = 1.21;
    }
    const ourPrice: string = "£" + (parseFloat(price) * multiplier).toFixed(2);
    const imgArr: ImgArray[] = imgElements.map((el: Element) => {
      const img1: string = $(el).find("li:nth-child(2) > a").attr("href") || "";
      const img2: string = $(el).find("li:nth-child(3) > a").attr("href") || "";
      const img3: string = $(el).find("li:nth-child(4) > a").attr("href") || "";
      const img4: string = $(el).find("li:nth-child(5) > a").attr("href") || "";

      return {
        img1,
        img2,
        img3,
        img4,
      };
    });
    console.log(imgArr);
    return {
      brand,
      price,
      scale,
      type,
      stock,
      name,
      id,
      img,
      ourPrice,
      imgArr,
    };
  });
  console.log(product);
  return product;
};
