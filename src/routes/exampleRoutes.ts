import express from "express";
import exampleController from "../controllers/exampleController";
import exampleMiddleware from "../middlewares/exampleMiddleware";

const exampleRouter = express.Router();

exampleRouter.get(
  "/getHello",
  exampleMiddleware.someValidationMethod,
  exampleController.getHello
);

export default exampleRouter;
