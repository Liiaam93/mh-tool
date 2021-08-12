import { fetchCreative } from "../../../utils/creativeAPI";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const creativeData = await fetchCreative(req.query.cid);
  res.status(200).json(creativeData);
};
