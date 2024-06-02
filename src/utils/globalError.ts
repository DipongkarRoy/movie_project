import { NextFunction, Request ,Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalError =(error: any, req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(500).json({
        success: false,
        massage:'wrong data' ,
        error: error,
      });
    } catch (error) {
      next(error);
    }
  }

  export default globalError ;