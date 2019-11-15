import React from "react";
import { Link } from "react-router-dom";

export default function FictionBookList(props) {
  // console.log(props);
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
  // console.log(bookList);
  return <div className="container-fluid fiction-list">{bookList}</div>;
}
