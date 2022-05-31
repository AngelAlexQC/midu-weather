import { background } from 'lib/http/background';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export const backgroundHandler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const { query } = req;
  const { search } = query;
  const image = await background(search as string);
  res.status(200).json(image);
};

export default backgroundHandler;
