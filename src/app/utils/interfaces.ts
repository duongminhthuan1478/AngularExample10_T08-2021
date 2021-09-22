export interface ApiResponse<T> {
    data: T,
    isLoading: boolean,
    error: string
}

export interface Country {
    name;
    code;
  }