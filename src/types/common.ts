export type ApiResponse<T> = {
  data?: T;
  message?: string;
  error?: string;
};

export type PaginationParams = {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
};
