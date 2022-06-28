import {getBooksAPI} from "../DAL/API/API";

interface SearchReducerStateType {
    books: Array<[]>
    totalCount:  number
    isFetching: boolean
    term: string
    status: string
    sorted: string
    index: number
}
let initialState: SearchReducerStateType = {
    books: [],
    totalCount: 1,
    isFetching: false,
    term: '',
    status: '',
    sorted: '',
    index: 0
}

type initialStateType = typeof initialState

const SearchBooksReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case 'SET_ALL_BOOKS':
            return {
                ...state, books: action.books
            }
        case 'SET_BOOKS_COUNT':
            return {
                ...state, totalCount: action.count
            }
        case 'SET_IS_FETCHING':
            return {
                ...state, isFetching: action.fetching
            }
        case 'SET_NEW_BOOKS':
            return {
                ...state,
                term: action.term,
                status: action.status,
                sorted: action.sorted,
                index: action.index
            }
        default:
            return state
    }
}


export const bookReducerActions = {
    setBooks: (books: Array<[]>) => {
        return ({type: 'SET_ALL_BOOKS', books} as const)
    },
    setBooksCount: (count: number) => {
        return ({type: 'SET_BOOKS_COUNT', count} as const)
    },
    setFetchingStatus: (fetching: boolean) => {
        return ({type: 'SET_IS_FETCHING', fetching} as const)
    },
    setMoreBooks: (term: string, status: string, sorted: string, index: number) => {
        return ({type: 'SET_NEW_BOOKS', term, status, sorted, index} as const)
    }
}

export const setBooksThunkCreator = (term: string, status: string, sorted: string, index: number): any => {
    return (dispatch: any) => {
        try {
            dispatch(bookReducerActions.setFetchingStatus(true))
            getBooksAPI.getNewBooks(term, status, sorted, index).then(data => {
                dispatch(bookReducerActions.setFetchingStatus(false))
                dispatch(bookReducerActions.setBooks(data.items))
                dispatch(bookReducerActions.setBooksCount(data.totalItems))
                dispatch(bookReducerActions.setMoreBooks(term, status, sorted, index))
            })
        } catch (e: any) {
            console.log(e.message)
        }
    }
}
export const setMoreBooksOnPageThunkCreator = (term: string, status: string, sorted: string, index: number): any => {
    return (dispatch: any) => {
        try {
            dispatch(bookReducerActions.setFetchingStatus(true))
            dispatch(bookReducerActions.setMoreBooks(term, status, sorted, index))
            getBooksAPI.getNewBooks(term, status, sorted, index).then(data => {
                dispatch(bookReducerActions.setFetchingStatus(false))
                dispatch(bookReducerActions.setBooks(data.items))
                dispatch(bookReducerActions.setMoreBooks(term, status, sorted, index))
            })
        } catch (e: any) {
            console.log(e.message)
        }
    }
}


export default SearchBooksReducer