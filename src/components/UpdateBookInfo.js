import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateBookInfo() {
    const [title, settitle] = useState('');
    const [isbn, setisbn] = useState('');
    const [author, setauthor] = useState('');
    const [description, setdescription] = useState('');
    const [publishedDate, setpublishedDate] = useState('');
    const [publisher, setpublisher] = useState('');

    let { id } = useParams();
    let navigate = useNavigate()
    console.log(id)

    useEffect(() => {
        axios
            .get(`http://localhost:8082/api/books/${id}`)
            .then(res => {
                console.log(res.data)

                settitle(res.data.title)
                setisbn(res.data.isbn)
                setauthor(res.data.author)
                setdescription(res.data.description)
                setpublishedDate(res.data.published_date)
                setpublisher(res.data.publisher)
            })
            .catch(err => {
                console.log("Error from UpdateBookInfo");
            })
    }, [id]);

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: title,
            isbn: isbn,
            author: author,
            description: description,
            published_date: publishedDate,
            publisher: publisher
        };

        axios
            .put(`http://localhost:8082/api/books/${id}`, data)
            .then(res => {
                console.log(res)
                // this.props.history.push('/show-book/'+this.props.match.params.id);
                navigate(`/show-book/${id}`)
            })
            .catch(err => {
                console.log("Error in UpdateBookInfo!");
            })
    }

    return (
        <div className="UpdateBookInfo">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <Link to="/" className="btn btn-outline-warning float-left">
                            Show BooK List
                        </Link>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Edit Book</h1>
                        <p className="lead text-center">
                            Update Book's Info
                        </p>
                    </div>
                </div>

                <div className="col-md-8 m-auto">
                    <form noValidate
                        onSubmit={onSubmit}
                    >
                        <div className='form-group'>
                            <label htmlFor="title">Title</label>
                            <input
                                type='text'
                                placeholder='Title of the Book'
                                name='title'
                                className='form-control'
                                value={title}
                                onChange={e => settitle(e.target.value)}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor="isbn">ISBN</label>
                            <input
                                type='text'
                                placeholder='ISBN'
                                name='isbn'
                                className='form-control'
                                value={isbn}
                                onChange={e => setisbn(e.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="author">Author</label>
                            <input
                                type='text'
                                placeholder='Author'
                                name='author'
                                className='form-control'
                                value={author}
                                onChange={e => setauthor(e.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="description">Description</label>
                            <input
                                type='text'
                                placeholder='Describe this book'
                                name='description'
                                className='form-control'
                                value={description}
                                onChange={e => setdescription(e.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="published_date">Published Date</label>
                            <input
                                type='date'
                                placeholder='published_date'
                                name='published_date'
                                className='form-control'
                                value={publishedDate}
                                onChange={e => setpublishedDate(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="publisher">Publisher</label>
                            <input
                                type='text'
                                placeholder='Publisher of this Book'
                                name='publisher'
                                className='form-control'
                                value={publisher}
                                onChange={e => setpublisher(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default UpdateBookInfo