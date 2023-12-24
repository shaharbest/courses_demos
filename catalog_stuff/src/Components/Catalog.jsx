import { Link } from "react-router-dom";
import { books } from '../books';

export default function Catalog() {
  const cards = books.map(b =>
    <BookCard key={b.id} book={b} />);

  return <>
    <h1>Catalog</h1>
    <div className="catalog-board">
      {cards}
    </div>
  </>;
}

function BookCard({ book: { id, name, price } }) {
    return <div className="book-card">
        <h3>
          <Link to={`/books/${id}`}>
            {name}
          </Link>
        </h3>
        <div className="price">$ {price}</div>
    </div>
}