import { fetchMH } from "../../../utils/mhAPI";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const productData = await fetchMH(req.query.mid);
  res.status(200).json(productData);
};
