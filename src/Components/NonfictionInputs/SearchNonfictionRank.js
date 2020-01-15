import React, { Component } from "react";

export class SearchNonfictionRank extends Component {
  render() {
    return (
      <div>
        <form className="input-group mb-3" onSubmit={e => e.preventDefault()}>
          <input
            className="form-control input-group-prepend"
            type="text"
            name="rank"
            placeholder="Search by rank (1-15)"
            onChange={this.props.handleChange}
          ></input>
          <input
            className="btn btn-secondary input-group-append"
            type="submit"
            value="Search"
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchNonfictionRank;
