import { Route, Routes, Link } from "react-router-dom";
import Catalog from "./Components/Catalog";
import BookPage from "./Components/BookPage";
import Cart from "./Components/Cart";

export default function App() {
  return <>
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Catalog />} />
        <Route path="/books/:id" element={<BookPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </>;
}

function NavBar() {
  return <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/books">Catalog</Link></li>
      <li><Link to="/cart">Cart</Link></li>
    </ul>
  </nav>;
}

function NotFound() { return <h1>404</h1>; }
function Home() { return <h1>Home</h1>; }