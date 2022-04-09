import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './routes/SearchPage.js';
import ResultsPage from './routes/ResultsPage.js';
import ProfilePage from './routes/ProfilePage.js';
import FavouritesPage from './routes/FavouritesPage.js';
import LoginPage from './routes/LoginPage.js';
import RegisterPage from './routes/RegisterPage.js';
import ResetPasswordPage from './routes/ResetPasswordPage.js';



ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} >
                <Route path='' element={<SearchPage />} />
                <Route path='/search' element={<ResultsPage />} />
                <Route path='/drink/:drinkId' element={<ProfilePage />} />
                <Route path='/favourites/:userId' element={<FavouritesPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/reset' element={<ResetPasswordPage />} />
            </Route>
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
