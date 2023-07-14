import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createUser = await User.create(user);
  if (!createUser) {
    throw new Error(`Faild to create book`);
  }
  return createUser;
};

const getAllUser = async (): Promise<IUser[]> => {
  const result = await User.find();

  return result;
};

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findOne({ _id: id });

  return result;
};

export const UserService = {
  createUser,
  getAllUser,
  getSingleUser,
};
