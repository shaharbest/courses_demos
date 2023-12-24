import { Link } from "react-router-dom";

const aviPrefix = "https://fscourse.shaharbest.com/img/avi";

export default function CatalogBoard({ books }) {
    const cards = books.map(b =>
        <BookCard key={b.id} book={b} />);

    return <div className="catalog-board">
      {cards}
    </div>;
}

function BookCard({ book: { id, name, price, imgID, genre } }) {
    return <div className="book-card">
        <h3>
          <Link to={`/books/${id}`}>
            {name}
          </Link>
        </h3>
        <img className="book-image"
          src={getBookImageUrl(imgID)} alt={`image of ${name}`} />
        <div className="book-genere">{genre}</div>
        <div className="book-price">$ {price}</div>
    </div>
}

function getBookImageUrl(imageID) {
  return `${aviPrefix}/${imageID}.webp`
}