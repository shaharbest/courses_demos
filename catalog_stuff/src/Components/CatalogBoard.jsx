import { Link } from "react-router-dom";

// const aviPrefix = "https://fscourse.shaharbest.com/img/avi";
const imageUrlPrefix = "https://picsum.photos/id";
// 

export default function CatalogBoard({ books }) {
    const cards = books.map(b =>
        <BookCard key={b.id} book={b} />);

    return <div className="catalog-board">
      {cards}
    </div>;
}

function BookCard({ book: { id, name, price, genre } }) {
    return <div className="book-card">
        <h3>
          <Link to={`/books/${id}`}>
            {name}
          </Link>
        </h3>
        <img className="book-image"
          src={getBookImageUrl(id)} alt={`image of ${name}`} />
        <div className="book-genere">{genre}</div>
        <div className="book-price">$ {price}</div>
    </div>
}

function getBookImageUrl(imageID) {
  return `${imageUrlPrefix}/${imageID}/200/200`
}