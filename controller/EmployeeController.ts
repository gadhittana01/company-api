import {Request, Response} from 'express';
import {Types} from 'mongoose';
import ResponseTemplate from "../helper/ResponseTemplate";
import Company from '../models/Company';
import Employee from "../models/Employee";

class EmployeeController{
    constructor(){
    }

    getEmployeesByCompanyID = async (req: Request, res: Response) => {
        try{
            const { id } = req.params;
            const company = await Company.findById(id); 
            if(company == null){
                return ResponseTemplate.setNotFound(res, `Company with ID ${id} not found`);
            }
            const employees = await Employee.find({company_id: company._id})
            return ResponseTemplate.setOk(res, {
                id: company._id,
                company_name: company.company_name,
                is_active: company.is_active,
                employees: employees
            })
        }catch(err){
            return ResponseTemplate.setInternalServerError(res, (err as Error).message);
        }
    }
    
    getEmployeesByID = async (req: Request, res: Response) => {
        try{
            const { id } = req.params;
            const employee = await Employee.findById(id)
            return ResponseTemplate.setOk(res, {
                id: employee?._id,
                name: employee?.name,
                phone_number: employee?.phone_number,
                jobtitle: employee?.jobtitle
            })
        }catch(err){
            return ResponseTemplate.setInternalServerError(res, (err as Error).message);
        }
    }

    addEmployee = async (req: Request, res: Response) => {
        try {
            const { company_id } = req.params;
            const { name, email, phone_number, jobtitle } = req.body;
            const company = await Company.findById(company_id);
            if(company == null){
                return ResponseTemplate.setNotFound(res, `Company with ID ${company_id} not found`);
            }
            const newEmployee = new Employee({
                name: name,
                email: email,
                phone_number: phone_number,
                jobtitle: jobtitle,
                company_id: new Types.ObjectId(company_id)
            });

            let employee = await newEmployee.save()
            return ResponseTemplate.setOk(res, {id: employee._id, company_id: company_id})
        } catch (err) {
            return ResponseTemplate.setInternalServerError(res, (err as Error).message);
        }
    }
    
    updateEmployee = async (req: Request, res: Response) => {
        try {
            const { company_id, employee_id } = req.params;
            const { name, email, phone_number, jobtitle } = req.body;
            const updatedEmployee = await Employee.findOneAndUpdate(
                {company_id: company_id, _id: employee_id},
                { 
                    name: name,
                    email: email,
                    phone_number: phone_number,
                    jobtitle: jobtitle,
                },
                { new: true }
            );

            if(updatedEmployee == null){
                return ResponseTemplate.setNotFound(res, `Employee ID or Company ID not valid`);
            }

            return ResponseTemplate.setOk(res, {id: updatedEmployee._id, company_id: updatedEmployee.company_id})
        } catch (err) {
            return ResponseTemplate.setInternalServerError(res, (err as Error).message);
        }
    }
    
    deleteEmployeeByID = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const deletedEmployee = await Employee.findByIdAndDelete(id);
            if(deletedEmployee == null){
                return ResponseTemplate.setNotFound(res, `Employee with ID ${id} not found`);
            }

            return ResponseTemplate.setOk(res, {msg:`Employee with ID ${id} successfully deleted`})
        } catch (err) {
            return ResponseTemplate.setInternalServerError(res, (err as Error).message);
        }
    }
}

export default EmployeeController