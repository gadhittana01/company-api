import {Response} from 'express';

class ResponseTemplate {
    static setOk(res: Response, data: object){
        let statusCode = 200
        return res.status(statusCode).json({
            status : statusCode,
            code: statusCode.toString(),
            data: data,
            message: "Success"
        })
    }
    
    static setInternalServerError(res: Response, errMsg: String){
        let statusCode = 500
        return res.status(statusCode).json({
            status : statusCode,
            code: statusCode.toString(),
            message: errMsg
        })
    }
    
    static setNotFound(res: Response, errMsg: String){
        let statusCode = 404
        return res.status(statusCode).json({
            status : statusCode,
            code: statusCode.toString(),
            message: errMsg
        })
    }
    
    static setBadRequest(res: Response, errMsg: String){
        let statusCode = 400
        return res.status(statusCode).json({
            status : statusCode,
            code: statusCode.toString(),
            message: errMsg
        })
    }
}

export default ResponseTemplate