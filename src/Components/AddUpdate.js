import React from "react";
import Post from "./Inputs/Post";
import Put from "./Inputs/Put";

export default function AddUpdate(props) {
  return (
    <div className="addupdate">
      <h2 className="title">Add a book:</h2>
      <Post getData={props.getData} history={props.history} />
      <h2 className="title">Update a book:</h2>
      <Put getData={props.getData} history={props.history} />
    </div>
  );
}