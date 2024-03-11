import React from "react";
import './App.css'
import { Routes, Route } from 'react-router-dom'
import logo from './assets/logo-white.png'
import Home from './pages/home/Home.jsx';
import Overview from './pages/overview/Overview.jsx';
import NewPost from './pages/newPost/NewPost.jsx';
import NotFound from './pages/notFound/NotFound.jsx';

function App() {
    return (
        <div className="page-container">
            <img src={logo} alt="Company logo"/>
            <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="*" element={<NotFound />}/>
                <Route path="/overview" element={<Overview />}/>
                <Route path="/new-post" element={<NewPost />}/>
            </Routes>
        </div>
    )
}

export default App
