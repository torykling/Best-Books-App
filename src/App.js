import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import FictionBookList from "./Components/FictionBookList";
import NonfictionBookList from "./Components/NonfictionBookList";
import Nonfiction from "./Components/Nonfiction";
import Fiction from "./Components/Fiction";
import OurBookList from "./Components/OurBookList";
import AddPage from "./Components/AddPage";
import UpdatePage from "./Components/UpdatePage";
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fiction: null, nonfiction: null, ourBooks: [] };
    this.getData = this.getData.bind(this);
  }

  home = () => {
    return (
      <div>
        <h1 className="title">Best Books</h1>
        <div className="buttonContainer">
          <Link className="homeBtn btn btn-success" to="/FictionBooks">
            Fiction Bestsellers
          </Link>
          <Link className="homeBtn btn btn-primary" to="/NonfictionBooks">
            Nonfiction Bestsellers
          </Link>
          <Link className="homeBtn btn btn-secondary" to="/ourbooks">
            Recommended Books
          </Link>
        </div>
      </div>
    );
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    axios.get("https://best-books-tkling.herokuapp.com/fiction").then(res => {
      this.setState({ fiction: res.data });
    });
    axios
      .get("https://best-books-tkling.herokuapp.com/nonfiction")
      .then(res => {
        this.setState({ nonfiction: res.data });
      });
    axios.get("https://best-books-tkling.herokuapp.com/ourbooks").then(res => {
      this.setState({ ourBooks: res.data });
    });
  };

  render() {
    return (
      <div className="pageContainer">
        <nav className="navbar navbar-dark bg-primary">
          <Link className="navlink" to="/">
            Home
          </Link>
          <Link className="navlink" to="/FictionBooks">
            Fiction
          </Link>
          <Link className="navlink" to="/NonfictionBooks">
            Nonfiction
          </Link>
          <Link className="navlink heart" to="/ourbooks"></Link>
        </nav>
        <div className="content-wrap">
          <Route path="/" exact render={this.home}></Route>
          <Route
            path="/FictionBooks"
            exact
            render={routerProps => (
              <FictionBookList
                getData={this.getData}
                {...routerProps}
                {...this.state}
              />
            )}
          />
          <Route
            path="/NonfictionBooks"
            exact
            render={routerProps => (
              <NonfictionBookList
                getData={this.getData}
                {...routerProps}
                {...this.state}
              />
            )}
          />
          <Route
            path="/nonfiction/:id"
            exact
            render={routerProps => (
              <Nonfiction
                getData={this.getData}
                {...routerProps}
                {...this.state}
              />
            )}
          />
          <Route
            path="/fiction/:id"
            exact
            render={routerProps => (
              <Fiction
                getData={this.getData}
                {...routerProps}
                {...this.state}
              />
            )}
          />
          <Route
            path="/ourbooks"
            exact
            render={routerProps => (
              <OurBookList
                getData={this.getData}
                {...routerProps}
                {...this.state}
              />
            )}
          />
          <Route
            path="/addpage"
            exact
            render={routerProps => (
              <AddPage
                getData={this.getData}
                {...routerProps}
                {...this.state}
              />
            )}
          />
          <Route
            path="/updatepage/:titleId"
            exact
            render={routerProps => (
              <UpdatePage
                getData={this.getData}
                {...routerProps}
                {...this.state}
              />
            )}
          />
        </div>
        <footer className="footer">
          Data from Best Books API gathered from{" "}
          <a
            className="a"
            href="https://developer.nytimes.com/docs/books-product/1/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            NYT API
          </a>{" "}
          and{" "}
          <a
            className="a"
            href="https://www.goodreads.com/api/index"
            target="_blank"
            rel="noopener noreferrer"
          >
            Goodreads API
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
