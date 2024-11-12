export interface Page<T>{
    pageNumber: number,
    hasNextPage: boolean,
    totalCount: number,
    data: T[],
}