import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/search">Search book</Link>
            <Link to="/add">Add book</Link>
            <Link to="/update">Update book</Link>
            <Link to="/delete">Delete book</Link>
        </div>
    );
};

export default Header;
