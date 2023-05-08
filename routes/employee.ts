import express from "express";
import EmployeeController from "../controller/EmployeeController";
import Validators from '../middlewares/Validator'
const router = express.Router();
let employees = new EmployeeController()

router.get("/:id", employees.getEmployeesByID);
router.delete("/:id", employees.deleteEmployeeByID);

export default router;