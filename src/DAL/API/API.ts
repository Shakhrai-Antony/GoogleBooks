import axios from "axios"

export const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
})

export const getBooksAPI = {
    getNewBooks(term: string, status: string, sorted: string, index: number){
        return instance.get(`volumes?q=${term}&printType=${status}&orderBy=${sorted}&startIndex=${index}&maxResults=30&key=AIzaSyBaKBEc-wgvy3YFjlmol1sLpGKtHkF-sS8`)
            .then(response => {
                return (
                    response.data
                )
            })
    }
}