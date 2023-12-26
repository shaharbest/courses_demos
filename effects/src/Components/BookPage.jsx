import { books } from '../books';
import { useParams } from "react-router-dom";

export default function BookPage() {
  const { id } = useParams();

  const book = books.find(b => b.id === id);

  return <>
    <pre>{JSON.stringify(book, null, 2)}</pre>
  </>
}