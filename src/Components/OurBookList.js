import React from "react";

export default function OurBookList(props) {
  console.log(props.ourBooks);
  let ourList = props.ourBooks.map(index => {
    return (
      <li>
        Title: {index.title} Author: {index.author}
      </li>
    );
  });

  return (
    <div>
      <h1>Our Best Books</h1>
      <h2>Books recommended by users like you!</h2>
      <form>
        <input type="text" placeholder="Add a book"></input>
        <input type="submit"></input>
      </form>

      <ul>{ourList}</ul>
    </div>
  );
}
