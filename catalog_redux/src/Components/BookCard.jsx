import { Link } from "react-router-dom";
import { cartSlice } from '../slices/cartSlice';
import { useDispatch, useSelector } from "react-redux";

const imageUrlPrefix = "https://picsum.photos/id";

export default function BookCard({ book: { id, name, price, genre } }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const bookCartItem = cartItems.find(b => b.id === id);
  const itemCount = bookCartItem ? bookCartItem.quantity : 0;

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
    <button onClick={() => dispatch(cartSlice.actions.incrementBookQuantity(id))}>
      add to cart {itemCount}
    </button>
  </div>
}

function getBookImageUrl(imageID) {
  return `${imageUrlPrefix}/${imageID}/200/200`
}