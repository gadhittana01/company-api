import express from "express";
import ResponseTemplate from "../helper/ResponseTemplate";
const router = express.Router();

const fib = (n: number): String => {
    let n1 = 0
    let n2 = 1
    let res = ''
    let max = 99999
    for(let i=0;i<max;i++){
        if(n1 >= n) break
        res += n1 + ' '
        let tmp = n1 + n2
        n1 = n2
        n2 = tmp
    }
    return res.trim()
}

router.post("/", (req, res, next) => {
    let result = fib(req.body.n)
    return ResponseTemplate.setOk(res, {result: result})
});

export default router;