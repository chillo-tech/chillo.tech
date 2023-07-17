import { axiosInstance } from '@/services/axios-instance';
import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    const {url = ''} = req;
    if (req.method === 'POST') {
      const {data} = await axiosInstance.post(`${url}`, req.body);
      return res.status(200).json(data);
    } else if (req.method === 'PUT') {
      const {data} = await axiosInstance.post(`${url}`, req.body);
      return res.status(200).json(data);
    } else if (req.method === 'PATCH') {
      const {data} = await axiosInstance.patch(`${url}`, req.body);
      return res.status(200).json(data);
    }  else if (req.method === 'DELETE') {
      const {data} = await axiosInstance.delete(`${url}`);
      return res.status(200).json(data);
    } else {
      const {data} = await axiosInstance.get(`${url}`);
      return res.status(200).json(data);
    }


  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Requête invalide" });
  }
}

export default handler;