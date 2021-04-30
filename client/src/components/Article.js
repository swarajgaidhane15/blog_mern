import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import spinner from "../spinner.gif";
import { Link } from "react-router-dom";

const Article = (props) => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${props.match.params.id}`)
      .then((res) => [
        setTitle(res.data.title),
        setAuthor(res.data.author),
        setArticle(res.data.article),
      ])
      .catch((err) => console.log(err));
  }, [props]);

  return (
    <ArticleContainer>
      {!title || !article || !author ? (
        <img src={spinner} alt="Loading content..." />
      ) : (
        <div>
          <h2>{title}</h2>
          <hr />
          <p>{article}</p>
          <p className="badge badge-primary my-2 p-2">{author}</p>
          <Link to="/" className="btn btn-primary">
            <i class="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
          </Link>
        </div>
      )}
    </ArticleContainer>
  );
};

export default Article;

const ArticleContainer = styled.div`
  margin: 6rem auto;
  padding: 3rem 14rem;

  h2 {
    text-align: center;
    font-weight: 700;
    color: var(--dark-green);
  }
  img {
    width: 7rem;
    display: block;
    margin: 0 auto;
  }
  .btn {
    background: none;
    display: block;
    width: 180px;
    margin: 2rem auto;
    color: var(--dark-green);
    &:hover {
      background-color: var(--light-green);
      color: #fff;
    }
  }
`;
