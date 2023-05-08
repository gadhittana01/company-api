import { Request, Response, NextFunction } from "express"
import { KeyValidator } from "../helper/EnumValidator"
import ResponseTemplate from "../helper/ResponseTemplate"

import Validators from '../validators/index'

export default function(validator: KeyValidator) {
    //! If validator is not exist, throw err
    if(!Validators[validator])
        throw new Error(`'${validator}' validator is not exist`)

    return async function(req: Request, res: Response, next: NextFunction) {
        try {
            const validated = await Validators[validator].validateAsync(req.body)
            req.body = validated
            next()
        } catch (err) {
            return ResponseTemplate.setBadRequest(res, (err as Error).message)
        }
    }
}