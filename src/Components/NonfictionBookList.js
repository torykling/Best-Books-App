import React from "react";
import { Link } from "react-router-dom";

export default function NonfictionBookList(props) {
  let bookList = props.books.map(index => {
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
        <Link to={`/books/${index._id}`}>{index.title}</Link>
      </div>
    );
  });
  return <div style={containerStyle}>{bookList}</div>;
}

const containerStyle = {
  width: "80%",
  height: "300%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "0 auto",
  textAlign: "center"
};
