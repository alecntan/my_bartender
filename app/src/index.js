import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './routes/SearchPage.js';
import ResultsPage from './routes/ResultsPage.js';
import ProfilePage from './routes/ProfilePage.js';
import FavouritesPage from './routes/FavouritesPage.js';



ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} >
                <Route path='/search' element={<SearchPage />} />
                <Route path='/drink/:drinkId' element={<ProfilePage />} />
                <Route path='/favourites/:userId' element={<FavouritesPage />} />
            </Route>
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
