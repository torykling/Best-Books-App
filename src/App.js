import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import FictionBookList from "./Components/FictionBookList";
import NonfictionBookList from "./Components/NonfictionBookList";
import Book from "./Components/Book";
import OurBookList from "./Components/OurBookList";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: null, ourBooks: null };
  }
  home = () => {
    return (
      <div>
        <h1 style={titleStyle}>Best Books</h1>
        <div className="buttonContainer">
          <Link to="/FictionBooks">
            <button
              onClick={this.getFiction}
              className="homeBtn btn btn-success"
            >
              Fiction Bestsellers
            </button>
          </Link>
          <Link to="/NonfictionBooks">
            <button
              onClick={this.getNonfiction}
              className="homeBtn btn btn-primary"
            >
              Nonfiction Bestsellers
            </button>
          </Link>
          <Link to="/ourbooks">
            <button className="homeBtn btn btn-secondary">
              Our Book Collection
            </button>
          </Link>
        </div>
      </div>
    );
  };
  componentDidMount = () => {
    // this.getFiction();
  };
  getFiction = () => {
    fetch("https://best-books-tkling.herokuapp.com/fiction")
      .then(res => res.json())
      .then(res => {
        this.setState({ books: res });
      });
  };
  getNonfiction = () => {
    fetch("https://best-books-tkling.herokuapp.com/nonfiction")
      .then(res => res.json())
      .then(res => {
        this.setState({ books: res });
      });
  };

  render() {
    return (
      <div className="pageContainer">
        <nav className="navbar navbar-dark bg-primary">
          <Link className="home" to="/">
            Home
          </Link>
        </nav>
        <div className="content-wrap">
          <Route path="/" exact render={this.home}></Route>
          <Route
            path="/FictionBooks"
            exact
            render={routerProps => (
              <FictionBookList {...routerProps} {...this.state} />
            )}
          />
          <Route
            path="/NonfictionBooks"
            exact
            render={routerProps => (
              <NonfictionBookList {...routerProps} {...this.state} />
            )}
          />
          <Route
            path="/books/:id"
            exact
            render={routerProps => <Book {...routerProps} {...this.state} />}
          />
          <Route
            path="/ourbooks"
            exact
            render={routerProps => (
              <OurBookList {...routerProps} {...this.state} />
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
const titleStyle = {
  color: "white",
  width: "80%",
  margin: "0 auto",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "100px"
};
