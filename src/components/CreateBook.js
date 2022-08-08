import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import '../App.css';
import axios from 'axios';

function CreateBook() {

    const [title, settitle] = useState('');
    const [isbn, setisbn] = useState('');
    const [author, setauthor] = useState('');
    const [description, setdescription] = useState('');
    const [publishedDate, setpublishedDate] = useState('');
    const [publisher, setpublisher] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        const data = {
            title: title,
            isbn: isbn,
            author: author,
            description: description,
            published_date: publishedDate,
            publisher: publisher
        }

        console.log(data)

        axios
            .post('http://localhost:8082/api/books', data)
            .then(res => {
                console.log('response', res)
                // this.props.history.push('/');
                toast(res.data.msg)
                settitle('')
                setisbn('')
                setauthor('')
                setdescription('')
                setpublishedDate('')
                setpublisher('')
            })
            .catch(err => {
                console.log("Error in CreateBook!");
            })
    }

    return (
        <div className="CreateBook">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <Link to="/" className="btn btn-outline-warning float-left">
                            Show BooK List
                        </Link>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Add Book</h1>
                        <p className="lead text-center">
                            Create new book
                        </p>

                        <form noValidate onSubmit={onSubmit}>
                            <div className='form-group'>
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
                                <input
                                    type='text'
                                    placeholder='Publisher of this Book'
                                    name='publisher'
                                    className='form-control'
                                    value={publisher}
                                    onChange={e => setpublisher(e.target.value)}
                                />
                            </div>

                            <input
                                type="submit"
                                className="btn btn-outline-warning btn-block mt-4"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBook