import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import SearchBooksReducer from "./SearchBooksReducer";

let rootReducer = combineReducers({
    searchPage: SearchBooksReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>
type PropertiesType<T> = T extends {[key: string] : infer U} ? U : never
export type InferActionsTypes <T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

export default store;