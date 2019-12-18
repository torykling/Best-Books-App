import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchNonfictionTitle from "./NonfictionInputs/SearchNonfictionTitle";
import SearchNonfictionAuthor from "./NonfictionInputs/SearchNonfictionAuthor";
import SearchNonfictionRank from "./NonfictionInputs/SearchNonfictionRank";

export class NonfictionBookList extends Component {
  render() {
    let bookList;
    if (this.props.nonfiction != null) {
      bookList = this.props.nonfiction.map(index => {
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
            <Link style={bannerStyle} to={`/nonfiction/${index._id}`}>
              {index.title}
            </Link>
          </div>
        );
      });
    }

    return (
      <div style={containerStyle}>
        <div style={containerStyle}>
          <SearchNonfictionTitle />
          <SearchNonfictionAuthor />
          <SearchNonfictionRank />
        </div>
        {bookList}
      </div>
    );
  }
}

export default NonfictionBookList;

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
