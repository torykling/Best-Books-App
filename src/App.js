import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import FictionBookList from "./Components/FictionBookList";
import NonfictionBookList from "./Components/NonfictionBookList";
import Book from "./Components/Book";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: null };
  }
  home = () => {
    return (
      <div>
        <Link to="/FictionBooks">
          <button onClick={this.getFiction} className="btn btn-outline-success">
            Fiction Bestsellers
          </button>
        </Link>
        <Link to="/NonfictionBooks">
          <button
            onClick={this.getNonfiction}
            className="btn btn-outline-primary"
          >
            Nonfiction Bestsellers
          </button>
        </Link>
        <button className="btn btn-outline-secondary">
          Our Book Collection
        </button>
      </div>
    );
  };
  componentDidMount = () => {
    this.getFiction();
  };
  getFiction = () => {
    const url = "http://localhost:4000/fiction";
    fetch(url)
      .then(res => res.json())
      .then(res => {
        // console.log("success", res);
        this.setState({ books: res });
        // console.log(this.state.books);
      });
  };
  getNonfiction = () => {
    const nfurl = "http://localhost:4000/nonfiction";
    fetch(nfurl)
      .then(res => res.json())
      .then(res => {
        // console.log("success", res);
        this.setState({ books: res });
      });
  };

  render() {
    return (
      <div>
        <nav>
          <Link className="home" to="/">
            Home
          </Link>
        </nav>
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
          render={routerProps => <Book {...routerProps} {...this.state} />}
        />
      </div>
    );
  }
}

export default App;
