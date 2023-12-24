import { useState } from 'react';
import { books as allBooks } from '../books';
import CatalogBoard from './CatalogBoard';

const genreOptions =
  ['', ...Array.from(new Set(allBooks.map(b => b.genre)))];

export default function Catalog() {
  const [books, setBooks] = useState(allBooks);
  const [nameInputVal, setNameInputVal] = useState('');
  const [genreInputVal, setGenreInputVal] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const onlySearchedBooks = allBooks.filter(b =>
      b.name.includes(nameInputVal)
        && b.genre.includes(genreInputVal));

    setBooks(onlySearchedBooks);
  }

  return <>
    <h1>Catalog</h1>

    <form className="catalog-controls" onSubmit={handleSubmit}>

      <label htmlFor="">name</label>
      <input type="text"
        value={nameInputVal}
        onChange={e => setNameInputVal(e.target.value)} />

      <label htmlFor="">genre</label>
      <select
        value={genreInputVal}
        onChange={e => setGenreInputVal(e.target.value)}>
        {genreOptions.map(g => <option key={g} value={g}>{g}</option>)}
      </select>

      <button>submit</button>
    </form>

    <CatalogBoard books={books} />
  </>;
}
