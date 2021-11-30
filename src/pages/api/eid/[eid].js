import { fetchExpo } from "../../../utils/expoAPI";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const expoData = await fetchExpo(req.query.eid);
  res.status(200).json(expoData);
};
