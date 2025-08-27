import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const validateTransaction =
  (schema: z.ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    if (req.body === null || req.body === undefined) {
      return res.status(400).json({
        error: "Request payload cannot be null or undefined",
      });
    }

    if (typeof req.body === "object" && Object.keys(req.body).length === 0) {
      return res.status(400).json({
        error: "Request payload cannot be empty",
      });
    }

    const { success, data, error } = schema.safeParse(req.body);

    if (!success) {
      return res.status(400).json({
        errors: error.issues.map((err: any) => `${err.message}`),
      });
    }

    req.body = data;

    next();
  };

export { validateTransaction };
