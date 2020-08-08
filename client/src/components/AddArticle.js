import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AddArticle = () => {

    // const [article, setArticle] = useState({
    //     title: "",
    //     author: "",
    //     article: ""
    // });

    // const handleChange = (e) => {
    //     if (e.target.name === 'author') {
    //         setArticle({ ...article, author: e.target.value });
    //     }
    //     else if (e.target.name === 'title') {
    //         setArticle({ ...article, title: e.target.value })
    //     }
    //     else {
    //         setArticle({ ...article, article: e.target.value })
    //     }
    // }

    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const articles = {
            title,
            article,
            author
        }

        console.log(articles)

        axios.post("/add", articles)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        setArticle('');
        setTitle("");
        setAuthor("");
        setMessage("Article added successfully !!");
    };

    return (
        <AddArticleContainer>
            <h1>Add New Article</h1><hr />
            <span className="messages">{message}</span>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Author"
                        name="author"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        name="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="article">Content</label>
                    <textarea
                        type="text"
                        className="form-control"
                        name="article"
                        value={article}
                        onChange={e => setArticle(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Post Article</button>
            </form>
        </AddArticleContainer>
    )
}

export default AddArticle;

const AddArticleContainer = styled.div`
    margin: 3.5rem auto;
    padding: 4rem;
    width: 31.25rem;

    h1 {
        text-align: center;
        font-weight: 700;
        color: var(--dark-green);
    }

    button {
        background: none;
        margin: 2rem auto;
        color: var(--dark-green);
        &:hover {
            background-color: var(--light-green);
        }
    }
    .messages{
        font-weight: 600;
        text-align: center;
        color: tomato;
    }
`;
