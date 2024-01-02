import { useEffect, useState } from "react";

const apiUrl = 'http://localhost:3000/books';

export function useBooks() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetchBooks().then(data => setBooks(data));
  }, []);

  return books;
}

async function fetchBooks() {
  const res = await fetch(apiUrl);
  const books = await res.json();
  return books;
}