import { useParams } from "react-router-dom";
import { useBook } from "./useBook";

export default function BookPage() {
  const { id } = useParams();
  const book = useBook(id);

  if (!book) return 'Loading...';

  return <pre>
    {JSON.stringify(book, null, 2)}
  </pre>
}