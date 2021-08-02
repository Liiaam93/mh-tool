import { fetchNewHannants } from "../../../utils/newHannantsAPI";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const newHannants = await fetchNewHannants(req.query.nhan);
  res.status(201).json(newHannants);
};
