import mongoose, { Schema } from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
      default: '-'
    },
    email: {
      type: String,
      required: true,
      min: 5,
      max: 255,
      default: '-'
    },
    phone_number: {
      type: String,
      required: false,
      min: 8,
      max: 16,
    },
    jobtitle: {
      type: String,
      required: true,
      enum : ['manager','director','staff'],
      default: 'staff'
    },
    company_id : {
      type : Schema.Types.ObjectId,
      required: true,
      ref : 'companies'
    }
  },
  { timestamps: true }
);

const Employee = mongoose.model("employees", EmployeeSchema);
export default Employee;