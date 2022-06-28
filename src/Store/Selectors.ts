import {AppStateType} from "./State";

export const getBooksFromState = (state: AppStateType) => {
    return state.searchPage.books
}
export const BooksOnPageCount = (state: AppStateType) => {
    return state.searchPage.totalCount
}

export const setFetchingStatus = (state: AppStateType) => {
    return state.searchPage.isFetching
}

export const getTermOfSearch = (state: AppStateType) => {
    return state.searchPage.term
}

export const getStatusOfSearch = (state: AppStateType) => {
    return state.searchPage.status
}

export const getSortedOfSearch = (state: AppStateType) => {
    return state.searchPage.sorted
}
