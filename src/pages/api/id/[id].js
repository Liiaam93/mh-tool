import { fetchHannants } from "../../../utils/hannantsAPI";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const productData = await fetchHannants(req.query.id);
  res.status(200).json(productData);
};
