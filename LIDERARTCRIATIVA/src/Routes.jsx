//REACTROUTER

import React  from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Jobs} from './pages/Jobs'
import {Products} from './pages/Products'
import {bookingpage_1} from './pages/Mais/bookingpage_1'
import {Pricing} from './pages/Pricing'
import {Blog} from './pages/Blog'



export const Rotas = () => {

    return (
        <BrowserRouter>
        <Routes>
               <Route element = { <Home/> }  path="/"  exact />
               <Route element = {<About/>}  path="/About" />
               <Route element = { <Products/>}  path="/Products"  />
               <Route element = { <Pricing/> }  path="/Pricing"  />
               <Route element = { <Blog/> }  path="/Blog"   />
               <Route element = {<Jobs/>} path="/Jobs" />
               <Route element = {<bookingpage_1/>} path="/bookingpage_1" />
        </Routes>
        </BrowserRouter>

    );
}

