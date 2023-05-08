import Company from "../models/Company";
import {Request, Response} from 'express';
import ResponseTemplate from "../helper/ResponseTemplate";

class CompanyController{
    constructor(){
    }

    getCompanies = async (req: Request, res: Response) => {
        try{
            const companies = await Company.find().sort({createdAt : -1}) as []; 
            return ResponseTemplate.setOk(res, {
                count: companies.length,
                rows: companies
            })
        }catch(err){
            return ResponseTemplate.setInternalServerError(res, (err as Error).message);
        }
    }
    
    addCompany = async (req: Request, res: Response) => {
        try {
            const { company_name, telephone_number, address } = req.body;
            const newCompany = new Company({
                company_name : company_name,
                telephone_number: telephone_number,
                address: address,
            });

            let company = await newCompany.save()
            return ResponseTemplate.setOk(res, {id: company._id})
          } catch (err) {
            return ResponseTemplate.setInternalServerError(res, (err as Error).message);
          }
    }
    
    setCompanyActive = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const updatedPost = await Company.findByIdAndUpdate(
              id,
              { is_active: true },
              { new: true }
            );
            if(updatedPost == null){
                return ResponseTemplate.setNotFound(res, `Company with id ${id} not found`);
            }

            return ResponseTemplate.setOk(res, {id: id, is_active: updatedPost?.is_active})
          } catch (err) {
            return ResponseTemplate.setInternalServerError(res, (err as Error).message);
          }
    }
}

export default CompanyController