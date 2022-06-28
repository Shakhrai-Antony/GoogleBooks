import React from 'react';
import {SearchComponent} from "./Components/SearchComponent/SearchComponent";
import {BooksSection} from "./Components/BooksSection/BooksComponent";
import s from './app.module.scss'

function App() {
    return (
        <div className={s.app_section}>
            <div className={s.app_section_search}>
                <SearchComponent/>
            </div>
            <BooksSection/>
        </div>
    );
}

export default App;
