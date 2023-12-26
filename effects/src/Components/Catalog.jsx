import { useState } from 'react';
import { books as allBooks } from '../books';
import CatalogBoard from './CatalogBoard';

export default function Catalog() {
  const [books, setBooks] = useState(allBooks);

  return <>
    <h1>Catalog</h1>

    <CatalogBoard books={books} />
  </>;
}
