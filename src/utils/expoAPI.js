import fetch from "isomorphic-fetch";
import cheerio from "cheerio";

const fetchExpo = async (code) => {
  const req = await fetch(
    `https://www.expotools.com/cgi-bin/ss000001.pl?page=search&SS=${code}&PR=-1&TB=O&ACTION=&ACTION=Go%21`
  );
  const html = await req.text();
  const $ = cheerio.load(html);

  const pageSrc = $("#FilterResultElements").find("a").attr("href");
  const req2 = await fetch(pageSrc);
  const html2 = await req2.text();
  const $2 = cheerio.load(html2);

  const imageSrc = `https://www.expotools.com/acatalog/${code}.jpg`;
  const $3 = await fetch(
    `https://www.expotools.com/acatalog/info-${code}.html`
  );

  const imageSrc4 = $3(`#extended-info > div.container`)
    .find("img")
    .attr("src");

  const name = $2("#idBreadcrumbsTop > p > span").text();
  let desc = $2("#home > p")
    .html()
    .replace("<br>", " ")
    .replace("<br>", " ")
    .replace("<br>", " ");

  // desc = desc.slice(name.length - 1, desc.length);

  const date = new Date().getTime() / 1000;

  const stk = await fetch(
    `https://www.expotools.com/cgi-bin/st000001.pl?ACTION=GETSTOCK&REF=${code}&timestamp=${date}`,
    {
      method: "GET",
    }
  );

  const stock = await stk.text();

  const brand = "Expo Tools";
  const style =
    $2("#idBreadcrumbsTop > p > a:nth-child(5)").text() +
    " / " +
    $2("#idBreadcrumbsTop > p > a:nth-child(7)").text();

  const scale = "";
  const price = parseFloat(
    $2(`#id${code}StaticPrice > span`)
      .text()
      .replace(" Price: �", "")
      .replace("VAT at 20%", "")
  ).toFixed(2);
  const ourPrice = (price * 0.9).toFixed(2);
  const pCode = code;
  const imageSrc2 = `https://www.expotools.com/acatalog/${code}a.jpg` || "";
  const imageSrc3 =
    `https://www.expotools.com/acatalog/${code}painted.jpg` || "";

  desc = name + " " + desc;
  const data = {
    imageSrc,
    imageSrc2,
    imageSrc3,
    imageSrc4,
    name,
    brand,
    desc,
    stock,
    style,
    price,
    scale,
    ourPrice,
    pCode,
  };
  console.log(data);
  return data;
};
module.exports = {
  fetchExpo,
};
