import logo from './logo.svg';
import './App.css';

import Header from './components/Header';

import HomePage from './components/HomePage';
import Search from './components/Search';
import Add from './components/Add';
import Update from './components/Update';
import Delete from './components/Delete';

import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route element={<HomePage />} path="/"></Route>
                <Route element={<Search />} path="/search"></Route>
                <Route element={<Add />} path="/add"></Route>
                <Route element={<Update />} path="/update"></Route>
                <Route element={<Delete />} path="/delete"></Route>
            </Routes>
        </>
    );
}

export default App;
