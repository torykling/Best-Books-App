import React, { Component } from "react";

export class Nonfiction extends Component {
  render() {
    let theBook;
    this.props.nonfiction.forEach(book => {
      if (book._id === this.props.match.params.id) {
        theBook = book;
      }
    });

    let divStyle = {
      backgroundImage: `url(${theBook.bookImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "500px",
      width: "100%",
      maxWidth: "300px",
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
            width="100%"
            height="600px"
            frameBorder="2px solid black"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Nonfiction;

const bookContainerStyle = {
  textAlign: "center",
  color: "white"
};

const textBoxStyle = {
  backgroundColor: "rgba(110, 117, 124, .7)",
  margin: "0 auto",
  padding: "2px 20px",
  width: "90%"
};
