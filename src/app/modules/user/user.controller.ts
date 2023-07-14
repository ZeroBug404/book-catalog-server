import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body;

    const result = await UserService.createUser(user);

    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.getAllUser();

    res.status(200).json({
      success: true,
      message: "Users retrived successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const result = await UserService.getSingleUser(id);

    res.status(200).json({
      success: true,
      message: "User retrived successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
};
