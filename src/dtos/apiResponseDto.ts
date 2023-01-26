import { Response } from "express";

class ApiResponseDto {
  success(res: Response, status: number, result: any) {
    res.status(status).json(result);
  }

  error(res: Response, status: number, error: any | string) {
    res.status(status).json({ error: error.message ? error.message : error });
  }
}

export default new ApiResponseDto();
