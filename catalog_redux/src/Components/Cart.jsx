import { useSelector } from "react-redux"
import { books } from "../books";

export default function Cart() {
  const items = useSelector(state => state.cart.items);

  const rows = items.map(curItem =>
    <CartItemRow key={curItem.id} item={curItem} />);

  return <>
    <h1>Cart</h1>

    <table className="cart-table">
      <tbody>
        {rows}
      </tbody>
    </table>
  </>
}

function CartItemRow({ item }) {
  const product = books.find(b => b.id === item.id);

  return <tr>
    <td>{item.id}</td>
    <td>{product.name}</td>
    <td>{item.quantity}</td>
  </tr>;
}