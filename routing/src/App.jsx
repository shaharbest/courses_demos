import { Route, Routes, Link, useParams }
  from "react-router-dom";

const books = [
  { id: '101', name: 'harry potter', price: 42 },
  { id: '102', name: 'lord of the rings', price: 23 },
  { id: '103', name: 'avi biter bio', price: 99 },
];

export default function App() {
  return <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/books" element={<Catalog />} />
      <Route path="/books/:id" element={<BookPage />} />
    </Routes>
  </>;
}

function NavBar() {
  return <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/books">Catalog</Link></li>
      <li><Link to="/books/101">first book</Link></li>
      <li><Link to="/books/102">second book</Link></li>
    </ul>
  </nav>;
}

function BookPage() {
  const { id } = useParams();

  const book = books.find(b => b.id === id);

	return <>
    <pre>{JSON.stringify(book, null, 2)}</pre>
  </>
}

function Catalog() { return <h1>Catalog</h1>; }
function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function Contact() { return <h1>Contact</h1>; }