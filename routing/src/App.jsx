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

function BookPage() {
  const { id } = useParams();

  const book = books.find(b => b.id === id);

  return <>
    <pre>{JSON.stringify(book, null, 2)}</pre>
  </>
}

function Catalog() {
  const bookItems = books.map(b => <li>
    <Link to={`/books/${b.id}`}>{b.name}</Link>
  </li>);

  return <>
    <h1>Catalog</h1>
    <ul className="catalog-list">
      {bookItems}
    </ul>
  </>;
}

function NotFound() { return <h1>404</h1>; }
function NewBook() { return <h1>New Book</h1>; }
function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function Contact() { return <h1>Contact</h1>; }