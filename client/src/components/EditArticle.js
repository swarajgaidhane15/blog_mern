import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

const EditArticle = (props) => {
  let history = useHistory();

  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const articles = {
      title,
      article,
      author,
    };

    axios
      .put(`/update/${props.match.params.id}`, articles)
      .then((res) => {
        console.log(res.data);
        history
          .push("/")
          .then(() => setTimeout(() => window.location.reload(), 2000));
      })
      .catch((err) => console.log(err));

    setArticle("");
    setTitle("");
    setAuthor("");
    setMessage("Article updated successfully !!");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${props.match.params.id}`)
      .then((res) => [
        setTitle(res.data.title),
        setAuthor(res.data.author),
        setArticle(res.data.article),
      ])
      .catch((err) => console.log(err));
  }, []);

  return (
    <EditArticleContainer>
      <h1>Edit Article</h1>
      <div className="messages">{message}</div>
      <hr />
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            className="form-control"
            placeholder="Author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
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
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="article">Content</label>
          <textarea
            type="text"
            className="form-control"
            name="article"
            value={article}
            onChange={(e) => setArticle(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Article
        </button>
      </form>
    </EditArticleContainer>
  );
};

export default EditArticle;

const EditArticleContainer = styled.div`
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
  .messages {
    font-weight: 600;
    text-align: center;
    color: tomato;
  }
`;
