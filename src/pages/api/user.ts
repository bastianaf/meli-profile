import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>) {
    res.status(200).json({
        userId: 'id',
        name: 'Jhon',
        nickName: 'Dark Knight',
        email: 'jdoe@fakemail.com'
    })
}