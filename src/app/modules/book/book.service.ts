import { IBook } from "./book.interface";
import { Book } from "./book.model";
// import ApiError from '../../../errors/ApiError';
// import { paginationHelpers } from '../../../helpers/paginationHelper';
// import { IGenericResponse } from '../../../interfaces/common';
// import { IPaginationOptions } from '../../../interfaces/pagination';
// import { cowSearchableFields } from './cow.constant';
// import { ICow, ICowFilters } from './cow.interface';
// import { Cow } from './cow.model';
// import { generatedCowId } from './cow.utils';

const createBook = async (book: IBook): Promise<IBook | null> => {
  const createBook = await Book.create(book);
  if (!createBook) {
    throw new Error(`Faild to create book`);
  }
  return createBook;
};

// const getAllCows = async (
//   filters: ICowFilters,
//   paginationOptions: IPaginationOptions
// ): Promise<IGenericResponse<ICow[]>> => {
//   const { searchTerm, ...filtersData } = filters;

//   const addConditions = [];

//   if (searchTerm) {
//     addConditions.push({
//       $or: cowSearchableFields.map(field => ({
//         [field]: {
//           $regex: searchTerm,
//           $options: 'i',
//         },
//       })),
//     });
//   }

//   if (Object.keys(filtersData).length) {
//     addConditions.push({
//       $and: Object.entries(filtersData).map(([field, value]) => ({
//         [field]: value,
//       })),
//     });
//   }

//   const { page, limit, skip, sortBy, sortOrder } =
//     paginationHelpers.calculatePagination(paginationOptions);

//   const sortConditions: { [key: string]: SortOrder } = {};

//   if (sortBy && sortOrder) {
//     sortConditions[sortBy] = sortOrder;
//   }

//   const whereCondition = addConditions.length ? { $and: addConditions } : {};

//   const result = await Cow.find(whereCondition)
//     .sort(sortConditions)
//     .skip(skip)
//     .limit(limit);

//   const total = await Cow.countDocuments();

//   return {
//     meta: {
//       page,
//       limit,
//       total,
//     },
//     data: result,
//   };
// };

// const getSingleCow = async (id: string): Promise<ICow | null> => {
//   const result = await Cow.findOne({ _id: id });

//   return result;
// };

// const updateCow = async (
//   id: string,
//   payload: Partial<ICow>
// ): Promise<ICow | null> => {
//   const result = await Cow.findOneAndUpdate({ _id: id }, payload, {
//     new: true,
//   });

//   return result;
// };

// const deleteCow = async (id: string): Promise<ICow | null> => {
//   const result = await Cow.findOneAndDelete({ _id: id });a

//   return result;
// };

export const BookService = {
  createBook,
};
