import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from './routes/index'

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true} as bodyParser.OptionsJson));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/* ROUTES */
app.use("/api/companies", routes.company);
app.use("/api/employees", routes.employee);
app.use("/api/fibonacci", routes.fibonacci);
app.use("/api/combination", routes.combination);
app.use("/api/countries", routes.countries);

export default app;