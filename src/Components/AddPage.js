import React from "react";
import Post from "./OurBookInputs/Post";

export default function AddPage(props) {
  return (
    <div className="addupdate">
      <h2 className="title">Add a book:</h2>
      <Post getData={props.getData} />
    </div>
  );
}
