export type IBook = {
  // id?: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: string[];
};

export type IBookFilters = {
  searchTerm?: string;
}