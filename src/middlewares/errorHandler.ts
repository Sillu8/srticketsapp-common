import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/customError';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {


  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  //Display errors incase it isn't caught by CustomError
  console.error(err);

  res.status(400).send({
    errors: [
      { message: 'Something unknown has occurred!' }
    ]
  })

};