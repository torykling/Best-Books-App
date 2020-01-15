import React, { Component } from "react";

export class SearchFictionAuthor extends Component {
  render() {
    return (
      <div>
        <div style={formStyle}>
          <form className="input-group mb-3" onSubmit={e => e.preventDefault()}>
            <input
              className="form-control input-group-prepend"
              type="text"
              name="author"
              placeholder="Search by author"
              onChange={this.props.handleChange}
            ></input>
            <input
              className="btn btn-secondary input-group-append"
              type="submit"
              value="Search"
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchFictionAuthor;
const formStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "row"
};
