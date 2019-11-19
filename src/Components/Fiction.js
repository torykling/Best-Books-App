import React, { Component } from "react";

export class Fiction extends Component {
  render() {
    console.log("from fiction.js", this.props.match.params.id);
    console.log(this.props.fiction);
    let theBook;
    this.props.fiction.forEach(book => {
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
            height="60%"
            frameBorder="2px solid black"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Fiction;

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