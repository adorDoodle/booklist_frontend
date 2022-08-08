import React, { useEffect, useState } from 'react'
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

function ShowBookList() {

    const [books, setbooks] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8082/api/books')
            .then(res => {
                setbooks(res.data)
                // console.log('book list ', res)
            })
            .catch(err => {
                console.log('Error from ShowBookList');
            })
    }, []);

    return (
        <div className="ShowBookList">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <br />
                        <h2 className="display-4 text-center">Books List</h2>
                    </div>

                    <div className="col-md-11">
                        <Link to="/create-book" className="btn btn-outline-warning float-right">
                            + Add New Book
                        </Link>
                        <br />
                        <br />
                        <hr />
                    </div>

                </div>

                <div className="list">
                    {books && books.map((book, index) =>
                        <BookCard book={book} key={index} />
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default ShowBookList