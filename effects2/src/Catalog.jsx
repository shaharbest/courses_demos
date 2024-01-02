import { Link } from "react-router-dom";
import { useBooks } from "./useBooks";

export default function Catalog() {
  const books = useBooks();

  return <>
    <h1>Catalog</h1>
    {!books ? 'Loading...' : <CatalogBoard books={books} />}
  </>;
}

function CatalogBoard({ books }) {
  const bookItems = books.map(b => <li>
    <Link to={`/books/${b.id}`}>{b.name}</Link>
  </li>);

  return <ul className="catalog-list">
    {bookItems}
  </ul>;
}