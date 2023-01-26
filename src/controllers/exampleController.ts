import { STATUS_INTERNAL, STATUS_OK } from "./../config/constants";
import { Request, Response } from "express";
import apiResponseDto from "../dtos/apiResponseDto";
import exampleService from "../services/exampleService";

class ExampleController {
  getHello(req: Request, res: Response) {
    try {
      const result = exampleService.getHello(req.body);
      apiResponseDto.success(res, STATUS_OK, result);
    } catch (error) {
      apiResponseDto.error(res, STATUS_INTERNAL, error);
    }
  }
}

export default new ExampleController();
