import express from "express";
import ResponseTemplate from "../helper/ResponseTemplate";
const router = express.Router();
import axios from "axios"

class Country{
    public name: String
    public region: String
    constructor(name: String, region: String){
        this.name = name;
        this.region = region;
    }
}

const fetchCountries = async () => {
    let result = await axios({
        method: 'GET',
        url: 'https://gist.githubusercontent.com/herysepty/ba286b815417363bfbcc472a5197edd0/raw/aed8ce8f5154208f9fe7f7b04195e05de5f81fda/coutries.json',
    })
    return result.data
}

router.get("/", async (req, res, next) => {
    let countries = await fetchCountries();
    let filterCountries = countries.map((item: Country) => {
        return {
            name: item.name,
            region: item.region
        } as Country
    })
    return ResponseTemplate.setOk(res, filterCountries)
});

export default router;