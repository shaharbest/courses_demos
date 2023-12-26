import CatalogBoard from './CatalogBoard';
import { useAjax } from './useAjax';

const apiUrl = 'http://localhost:3000/products';

export default function Catalog() {
  const books = useAjax(apiUrl);

  return <>
    <h1>Catalog</h1>
    <CatalogBoard books={books} />
  </>;
}