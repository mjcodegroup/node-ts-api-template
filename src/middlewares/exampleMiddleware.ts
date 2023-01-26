import { Request, Response } from "express";

class ExampleMiddleware {
  someValidationMethod(req: Request, res: Response, next: any) {
    next();
  }
}
export default new ExampleMiddleware();
