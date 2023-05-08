import express from "express";
import CompanyController from "../controller/CompanyController";
import EmployeeController from "../controller/EmployeeController";
import { KeyValidator } from "../helper/EnumValidator";
import Validators from '../middlewares/Validator'
const router = express.Router();
let companies = new CompanyController()
let employees = new EmployeeController()

router.get("/", companies.getCompanies);
router.post("/", Validators(KeyValidator.addCompany), companies.addCompany);
router.put("/:id/set_active", companies.setCompanyActive);
router.post("/:company_id/employees", Validators(KeyValidator.addEmployee), employees.addEmployee);
router.get("/:id/employees", employees.getEmployeesByCompanyID);
router.put("/:company_id/employees/:employee_id", Validators(KeyValidator.updateEmployee), employees.updateEmployee);

export default router;