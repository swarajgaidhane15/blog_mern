import React, { useState, useEffect } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Articles from "./components/Articles";
import Article from "./components/Article";
import AddArticle from "./components/AddArticle";
import EditArticle from "./components/EditArticle";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000");
      setPosts(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Header />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/add-article" component={AddArticle} />
          <Route
            exact
            path="/"
            render={() => <Articles posts={posts} loading={loading} />}
          />
          <Route
            exact
            path="/:id"
            render={(props) => <Article {...props} posts={posts} />}
          />
          <Route
            exact
            path="/edit-article/:id"
            render={(props) => <EditArticle {...props} posts={posts} />}
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
