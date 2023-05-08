import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
      min: 3,
      max: 50,
      default: '-'
    },
    telephone_number: {
      type: String,
      required: false,
      min: 8,
      max: 16,
      default: null
    },
    is_active: {
      type: Boolean,
      required: true,
      default: false
    },
    address: {
      type: String,
      required: false,
      min: 10,
      max: 50,
      default: '-'
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("companies", CompanySchema);
export default Company;