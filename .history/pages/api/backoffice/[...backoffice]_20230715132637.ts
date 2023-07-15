import { axiosInstance } from '@/services/axios-instance';
import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  log
  try {
    const {url = ''} = req;
    const {data} = await axiosInstance.get(url);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Requête invalide" });
  }
}

export default handler;