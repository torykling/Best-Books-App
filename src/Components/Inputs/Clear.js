import React from "react";

export default function Clear() {
  function handleClear(e) {
    window.location.reload(false);
  }
  return (
    <form className="input-group mb-3" onSubmit={handleClear}>
      <input
        type="submit"
        value="Clear Fields"
        className="btn btn-warning"
      ></input>
    </form>
  );
}
