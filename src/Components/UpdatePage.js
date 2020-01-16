import React from "react";
import Put from "./OurBookInputs/Put";

export default function UpdatePage(props) {
  return (
    <div className="addupdate">
      <h2 className="title">Update a book:</h2>
      <Put getData={props.getData} titleId={props.match.params.titleId} />
    </div>
  );
}
