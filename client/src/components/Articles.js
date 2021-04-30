import React, { useState } from "react";
import styled from "styled-components";
import spinner from "../spinner.gif";
import { Link } from "react-router-dom";
import axios from "axios";

const Articles = ({ posts }) => {
  const [article, setArticle] = useState([]);

  //Delete article by ID
  const deleteArticle = (id) => {
    axios.delete(`/${id}`).then((res) => alert(res.data));
    setArticle(article.filter((post) => post.id !== id));
  };

  return (
    <ArticleContainer>
      {!posts.length ? (
        <h2 align="center">No posts to display</h2>
      ) : (
        posts.map((post, key) => (
          <div key={key}>
            <Link to={{ pathname: `/${post._id}` }}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.article}</p>
            <span className="badge badge-secondary p-2">{post.author}</span>
            <div className="row my-5">
              <div className="col-sm-2 offset-md-4 my-2">
                <Link
                  to={`/edit-article/${post._id}`}
                  className="btn btn-outline-success"
                >
                  Edit Article
                </Link>
              </div>
              <div className="col-sm-2 my-2">
                <button
                  onClick={() => deleteArticle(post._id)}
                  className="btn btn-outline-danger"
                >
                  Delete Article
                </button>
              </div>
            </div>
            <hr />
          </div>
        ))
      )}
    </ArticleContainer>
  );
};

export default Articles;

const ArticleContainer = styled.div`
  margin: 7rem auto;
  width: 75%;
  @media (max-width: 414px) {
    margin: 7rem auto;
    width: 90%;
  }
  img {
    width: 7rem;
    display: block;
    margin: 0 auto;
  }
`;
