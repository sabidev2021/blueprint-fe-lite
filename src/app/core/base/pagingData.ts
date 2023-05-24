export class PagingData<T> {
  content: T[] = [];
  totalPages = 0;
  totalElements = 0;
  last = false;
  size = 0;
  number = 0;
  numberOfElements!: number;
  first = false;
  empty = false;
}
