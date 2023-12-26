import { useState } from "react";
import BookCard from "./BookCard";

const itemsPerPage = 6;

export default function CatalogBoard({ books }) {
    const [pageNum, setPageNum] = useState(1);

    const pagesCount = Math.ceil(books.length / itemsPerPage);

    const allPagesNums =
        Array.from({ length: pagesCount }, (_, index) => index + 1);

    const pagesButtons = allPagesNums.map(n => <button
        onClick={() => setPageNum(n)} key={n}>
        {n}
    </button>);

    const currentPageBooks =
        books.slice(itemsPerPage * (pageNum - 1),
            itemsPerPage * pageNum);

    const cards = currentPageBooks.map(b =>
        <BookCard key={b.id} book={b} />);

    return <>
        <div className="catalog-board">
            {cards}
        </div>
        <div className="pages">
            {pagesButtons}
        </div>
    </>
}