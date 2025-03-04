export type ResourceResponse<T> = {
  Result: number;
  Message: string;
  data: T;
};

export type ResourcesResponse<T> = {
  Result: number;
  Message: string;
  data: T[];
};
