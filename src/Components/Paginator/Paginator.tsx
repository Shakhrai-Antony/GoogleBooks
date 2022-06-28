import React, {useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import s from ".././BooksSection/books.module.scss";
import {BooksOnPageCount, getSortedOfSearch, getStatusOfSearch, getTermOfSearch} from "../../Store/Selectors";
import {setMoreBooksOnPageThunkCreator} from "../../Store/SearchBooksReducer";

export const Paginator = () => {
    const dispatch = useDispatch()
    const portionSize = 30
    const booksOnPage = useSelector(BooksOnPageCount)
    const term = useSelector(getTermOfSearch)
    const status = useSelector(getStatusOfSearch)
    const sorted = useSelector(getSortedOfSearch)
    const [index, setNewIndex] = useState(30)
    const totalPages = Math.ceil(booksOnPage / portionSize)
    const [pageNumber, setPageNumber] = useState(1)

    const setMoreBooks = (term: string, status: string, sorted: string) => {
        if (index < booksOnPage) {
            setNewIndex(index + 30)
        }
        dispatch(setMoreBooksOnPageThunkCreator(term, status, sorted, index))
    }
    return (
        <div className={s.loadmore_section}>
            {pageNumber < totalPages &&
            <button onClick={ () =>
            { setPageNumber (pageNumber + 1); setMoreBooks(term, status, sorted)} }>
                Load more
            </button>
            }
        </div>
    )
}