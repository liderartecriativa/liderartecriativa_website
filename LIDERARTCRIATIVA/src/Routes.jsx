//REACTROUTER

import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Jobs } from './pages/Jobs'
import { Products } from './pages/Products'
import { Bookingpage1 } from './pages/Mais/bookingpage1'
import { Bookingpage2 } from './pages/Mais/bookingpage2'
import { Pricing } from './pages/Pricing'
import { Blog } from './pages/Blog'



export const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<About />} path="/About" />
                <Route element={<Products />} path="/Products" />
                <Route element={<Pricing />} path="/Pricing" />
                <Route element={<Blog />} path="/Blog" />
                <Route element={<Jobs />} path="/Jobs" />
                <Route element={<Bookingpage1 />} path="/Bookingpage1" />
                <Route element={<Bookingpage2 />} path="/Bookingpage2" />
            </Routes>
        </BrowserRouter>

    );
}

