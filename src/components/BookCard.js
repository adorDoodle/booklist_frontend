import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function BookCard({ book }) {
    return (
        <div className="card-container">
            <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="image" />
            <div className="desc">
                <h2>
                    <Link to={`/show-book/${book._id}`}>
                        {book.title}
                    </Link>
                </h2>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
            </div>
        </div>
    )
}

export default BookCard