import React, { Component } from "react";

export class Book extends Component {
  render() {
    console.log("from Book.js", this.props.match.params.id);
    console.log(this.props.books);
    let theBook;
    this.props.books.forEach(book => {
      if (book._id === this.props.match.params.id) {
        theBook = book;
        console.log(theBook);
      }
    });
    let divStyle = {
      backgroundImage: `url(${theBook.bookImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "500px",
      width: "300px",
      margin: "10px auto"
    };
    return (
      <div style={bookContainerStyle}>
        <div style={textBoxStyle}>
          <div style={divStyle}></div>
          <h1>{theBook.title}</h1>
          <h2>{theBook.author}</h2>

          <p>{theBook.description}</p>
          <p>Rank: #{theBook.rank}</p>
          <p>isbn: {theBook.isbn}</p>

          <iframe
            title="Reviews from Goodreads"
            id="the_iframe"
            src={theBook.reviews}
            width="500px"
            height="300px"
            frameBorder="2px solid black"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Book;

const bookContainerStyle = {
  textAlign: "center",
  color: "white"
};
const textBoxStyle = {
  backgroundColor: "rgba(110, 117, 124, .7)",
  margin: "0 auto",
  padding: "2px 20px",
  width: "80%"
};
