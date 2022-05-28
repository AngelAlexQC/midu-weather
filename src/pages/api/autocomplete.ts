import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { autocomplete } from 'src/lib/http/autocomplete';

export const AutoCompleteHandler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const { query } = req;
  const { search } = query;
  const searchResults = await autocomplete(search as string);
  res.status(200).json(searchResults);
};

export default AutoCompleteHandler;