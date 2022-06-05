import * as express from "express";
import * as mongodb from "mongodb";
const readjson = require("readjson");

export const employeeRouter = express.Router();
employeeRouter.use(express.json());

employeeRouter.get("/", async (_req, res) => {
  readjson("./src/test.json").then((data: any) => res.json(data));
});
