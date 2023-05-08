import express from "express";
import ResponseTemplate from "../helper/ResponseTemplate";
const router = express.Router();

const product_Range = (a:number, b:number): number => {
    var prd = a,i = a;
   
    while (i++< b) {
      prd*=i;
    }
    return prd;
  }
  
  
const combinations = (n:number, r:number): number => {
    if (n==r || r==0) {
        return 1;
    }
    r = (r < n-r) ? n-r : r;
    return product_Range(r+1, n)/product_Range(1,n-r);
}

router.post("/", (req, res, next) => {
    const {n, r} = req.body;
    let result = combinations(n, r)
    return ResponseTemplate.setOk(res, {result: result})
});

export default router;