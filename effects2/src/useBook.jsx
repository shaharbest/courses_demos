import { useAjax } from "./useAjax";

const apiUrlPrefix = 'http://localhost:3000/books';

export function useBook(bookID) {
  const apiUrl = `${apiUrlPrefix}/${bookID}`;
  return useAjax(apiUrl);
}