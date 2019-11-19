import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchFictionTitle from "./FictionInputs/SearchFictionTitle";
import SearchFictionAuthor from "./FictionInputs/SearchFictionAuthor";
import SearchFictionRank from "./FictionInputs/SearchFictionRank";

export class FictionBookList extends Component {
  render() {
    let bookList;
    if (this.props.fiction != null) {
      bookList = this.props.fiction.map(index => {
        let imageStyle = {
          backgroundImage: `url(${index.bookImage})`,
          backgroundSize: "cover",
          backgroundPostion: "center",
          backgroundRepeat: "no-repeat",
          height: "300px",
          width: "200px",
          margin: "10px"
        };
        return (
          <div style={imageStyle} key={index._id}>
            <Link style={bannerStyle} to={`/fiction/${index._id}`}>
              {index.title}
            </Link>
          </div>
        );
      });
    }
    return (
      <div style={containerStyle}>
        <div style={containerStyle}>
          <SearchFictionTitle />
          <SearchFictionAuthor />
          <SearchFictionRank />
        </div>
        {bookList}
      </div>
    );
  }
}

export default FictionBookList;

const containerStyle = {
  width: "100%",
  height: "300%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "10px",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center"
};
const bannerStyle = {
  display: "inline-block",
  backgroundColor: "white",
  minWidth: "200px",
  width: "100%"
};
