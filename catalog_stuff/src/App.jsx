import { Route, Routes, Link } from "react-router-dom";
import Contact from "./Components/Contact";
import Catalog from "./Components/Catalog";
import BookPage from "./Components/BookPage";

export default function App() {
  return <>
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books" element={<Catalog />} />
        <Route path="/books/:id" element={<BookPage />} />
        <Route path="/books/new" element={<NewBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </>;
}

function NavBar() {
  return <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/books">Catalog</Link></li>
      <li><Link to="/books/new">New Book</Link></li>
    </ul>
  </nav>;
}

function NotFound() { return <h1>404</h1>; }
function NewBook() { return <h1>New Book</h1>; }
function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }