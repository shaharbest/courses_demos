import { Route, Routes, Link } from "react-router-dom";
import Catalog from "./Components/Catalog";
import BookPage from "./Components/BookPage";
import Home from "./Components/Home";

export default function App() {
  return <>
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Catalog />} />
        <Route path="/books/:id" element={<BookPage />} />
      </Routes>
    </main>
  </>;
}

function NavBar() {
  return <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/books">Catalog</Link></li>
    </ul>
  </nav>;
}