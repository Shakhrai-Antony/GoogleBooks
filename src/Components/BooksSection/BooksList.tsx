import React from 'react'
import s from './booksList.module.scss'

type BooksLisType = {
    link: string
    title: string
    value: string
    category: string
    authors: Array<[]>
}

export const BooksList: React.FC<BooksLisType> = (props) => {

    return (
        <div className={s.books_section_content}>
            <a href={props.link}>{<img src={props.value} alt={props.title}/>}</a>
            <p>
                {props.title}
            </p>
            <p>
                {props.category}
            </p>
            {props.authors.map((item, index: number) => {
                return (
                    <p key={index}>{item}</p>
                )
            })
            }
        </div>
    )
}