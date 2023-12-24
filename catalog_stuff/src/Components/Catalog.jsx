import { useState } from 'react';
import { books as allBooks } from '../books';
import CatalogBoard from './CatalogBoard';

const genreOptions =
  ['', ...Array.from(new Set(allBooks.map(b => b.genre)))];

const sortOptions = [ '', 'name', 'price', 'genre' ];

export default function Catalog() {
  const [books, setBooks] = useState(allBooks);
  const [nameInputVal, setNameInputVal] = useState('');
  const [genreChosen, setGenreChosen] = useState('');
  const [sortChosen, setSortChosen] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const onlySearchedBooks = allBooks.filter(b =>
      b.name.includes(nameInputVal)
        && b.genre.includes(genreChosen));
    
    switch (sortChosen) {
      case 'price':
        onlySearchedBooks.sort((b1, b2) => b1.price - b2.price);
        break;
      case 'name':
        onlySearchedBooks.sort((b1, b2) => b1.name.localeCompare(b2.name));
        break;
      case 'genre':
        onlySearchedBooks.sort((b1, b2) => b1.genre.localeCompare(b2.genre));
        break;
    }

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
        value={genreChosen}
        onChange={e => setGenreChosen(e.target.value)}>
        {genreOptions.map(g => <option key={g} value={g}>{g}</option>)}
      </select>

      <label htmlFor="">sort category</label>
      <select
        value={sortChosen}
        onChange={e => setSortChosen(e.target.value)}>
        {sortOptions.map(s => <option key={s} value={s}>{s}</option>)}
      </select>

      <button>submit</button>
    </form>

    <CatalogBoard books={books} />
  </>;
}
