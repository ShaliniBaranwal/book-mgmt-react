import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Searchbox from './Searchbox';

const Search = () => {
    //useEffect, dependency array shud be empty
    //axios
    // store the data in state and then we will map it inside our react componenet
    let [data, setData] = useState([]);
    let [inputValue, setinputValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get('http://127.0.0.1:3001/book');
            setData(res.data);
        };

        fetchData();
    }, []);

    let filterData = data.filter(
        (ele) =>
            ele.author.toLowerCase() === inputValue.toLowerCase() ||
            ele.bookname.toLowerCase() === inputValue.toLowerCase()
    );

    return (
        <div className="search">
            <Searchbox setinputValue={setinputValue} />

            <div className="books">
                {filterData.length
                    ? filterData.map((ele) => (
                          <div className="book">
                              <div className="book-name-container">
                                  Book name:{' '}
                                  <span className="bookname">
                                      {ele.bookname}
                                  </span>
                              </div>
                              <div className="book-author-container">
                                  Book author:{' '}
                                  <span className="bookauthor">
                                      {ele.author}
                                  </span>
                              </div>
                              <div className="book-quantity-container">
                                  Book quantity:{' '}
                                  <span className="bookquantity">
                                      {ele.quantity}
                                  </span>
                              </div>
                              <div className="book-id-container">
                                  ID: <span className="bookid">{ele.id}</span>
                              </div>
                          </div>
                      ))
                    : data.length &&
                      data.map((ele) => (
                          <div className="book">
                              <div className="book-name-container">
                                  Book name:{' '}
                                  <span className="bookname">
                                      {ele.bookname}
                                  </span>
                              </div>
                              <div className="book-author-container">
                                  Book author:{' '}
                                  <span className="bookauthor">
                                      {ele.author}
                                  </span>
                              </div>
                              <div className="book-quantity-container">
                                  Book quantity:{' '}
                                  <span className="bookquantity">
                                      {ele.quantity}
                                  </span>
                              </div>
                              <div className="book-id-container">
                                  ID: <span className="bookid">{ele.id}</span>
                              </div>
                          </div>
                      ))}
            </div>
        </div>
    );
};

export default Search;
