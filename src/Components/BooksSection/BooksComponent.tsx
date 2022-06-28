import React, {useEffect} from 'react'
import {useSelector} from "react-redux";
import s from './books.module.scss'
import {Preloader} from "../Preloader/Preloader";
import {BooksList} from "./BooksList";
import {getBooksFromState, setFetchingStatus} from "../../Store/Selectors";
import {Paginator} from "../Paginator/Paginator";


export const BooksSection = () => {

    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }, [])

    const setAllBooks = useSelector(getBooksFromState)
    const fetchingStatus = useSelector(setFetchingStatus)

    useEffect(() => {
        if(!setAllBooks ) {
            alert('Nothing found, try to change params of searching')
        }
    }, [setAllBooks])

    const booksList = setAllBooks && setAllBooks.map((item: any) =>
        <BooksList
            value={item.volumeInfo.imageLinks === undefined ? '' : item.volumeInfo.imageLinks.thumbnail}
            title={item.volumeInfo.title ?? ''}
            category={item.volumeInfo.categories ?? ''}
            authors={item.volumeInfo.authors ?? []}
            link={item.volumeInfo.infoLink ?? ''}
            key={item.id}/>
    )
    return (
        <div>
            {fetchingStatus ? <Preloader/> : <div className={s.books_section}>
                {booksList}
            </div>}
            <Paginator/>
        </div>

    )
}