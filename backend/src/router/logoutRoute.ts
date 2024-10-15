import express, { Request, Response } from 'express';

import httpResponse from '../util/httpResponse';
import responseMessage from '../constant/responseMessage';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    res.clearCookie("token");
    httpResponse(req, res, 200, responseMessage.SUCCESS, { success: true, message: "Logout Successful." })
})

export default router;