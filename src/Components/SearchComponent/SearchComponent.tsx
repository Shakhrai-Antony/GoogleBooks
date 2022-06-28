import React from 'react'
import s from './searchComponent.module.scss'
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {setBooksThunkCreator} from "../../Store/SearchBooksReducer";

export const SearchComponent = () => {
    const dispatch = useDispatch()
    const searchSubmit = (term: string, status: string, sorted: string, index: number) => {
        dispatch(setBooksThunkCreator(term, status, sorted, index))
    }
    const {values, handleChange, handleSubmit} = useFormik({
        initialValues: {
            term: '',
            status: 'all',
            sorted: 'relevance',
            index: 0
        },
        onSubmit: (values) => {
            searchSubmit(values.term, values.status, values.sorted, values.index)
        }
    })
    return (
        <div className={s.form_section}>
            <form className={s.form_section_content} onSubmit={handleSubmit}>
                <div className={s.select_section}>
                    <select name="status" value={values.status} onChange={handleChange}>
                        <option value="all">All</option>
                        <option value='books'>Books</option>
                        <option value='magazines'>Magazines</option>
                    </select>
                    <select name="sorted" value={values.sorted} onChange={handleChange}>
                        <option value="relevance">Relevance</option>
                        <option value='newest'>Newest</option>
                    </select>
                </div>
                <div className={s.search_section}>
                    <button type='submit' onClick={ () => searchSubmit }></button>
                    <input type="text" name='term' placeholder='find a book...'
                           value={values.term} onChange={handleChange}/>
                </div>
            </form>
        </div>
    )
}