import { NextFunction, Request, Response } from 'express'
import { THttpError } from '../types/types'
import logger from '../util/logger'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (err: THttpError, _: Request, res: Response, __: NextFunction) => {
    logger.error(err.message, { meta: err })
    res.status(err.statusCode).json({ err, success: false })
}
