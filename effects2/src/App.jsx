import Navbar from "./Navbar";
import BookPage from "./BookPage";
import Catalog from "./Catalog";
import ShaharForm from "./ShaharForm";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return <>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shahar-form" element={<ShaharForm />} />
        <Route path="/books" element={<Catalog />} />
        <Route path="/books/:id" element={<BookPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </>;
}

function NotFound() { return <h1>404</h1>; }
function Home() { return <h1>Home</h1>; }