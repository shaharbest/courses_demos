import { useAjax } from "./useAjax";

const apiUrl = 'http://localhost:3000/books';

export function useBooks() {
  return useAjax(apiUrl);
}