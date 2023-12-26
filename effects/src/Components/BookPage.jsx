import { useParams } from "react-router-dom";
import { useAjax } from "./useAjax";

const apiUrlPrefix = 'http://localhost:3000/products';

export default function BookPage() {
  const { id } = useParams();
  const apiUrl = `${apiUrlPrefix}/${id}`;
  const book = useAjax(apiUrl);

  return <>
    <pre>{JSON.stringify(book, null, 2)}</pre>
  </>
}