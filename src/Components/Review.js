import React from "react";

export default function Review(props) {
  return (
    <div>
      <iframe
        src={props.reviews}
        width="565"
        height="400"
        frameborder="0"
      ></iframe>
    </div>
  );
}
