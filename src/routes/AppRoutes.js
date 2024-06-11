import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SignInPage from '../pages/SignIn';
import SignUpPage from '../pages/SignUp';
import MovieDetailPage from '../pages/MovieDetail';
import TicketPage from '../pages/Ticket';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/movie" element={<MovieDetailPage />} />
                <Route path="/ticket" element={<TicketPage />} />
            </Routes>
        </BrowserRouter>


    );
}

export default AppRoutes;
