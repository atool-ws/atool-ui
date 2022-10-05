import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    project: string,
    logo : string,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        const { project } = req.query
        const data : Data = { project : project as string,
            logo : ""};        
        res.status(200).json(data);
    }
}