import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='main-page-buttons'>
            <Link to="/search">Search</Link>
            <Link to="/add">Add</Link>
            <Link to="/update">Update</Link>
            <Link to="/delete">Delete</Link>
        </div>
    );
};

export default HomePage;
