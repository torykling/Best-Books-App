import React, { Component } from "react";
import axios from "axios";

export class Put extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      message: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value.toUpperCase().trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const url =
      "https://best-books-tkling.herokuapp.com/ourbooks/title/" +
      this.props.titleId;
    axios
      .put(url, {
        title: this.state.title,
        author: this.state.author
      })
      .then(res => {
        console.log(res);
        this.props.getData();
        this.setState({ message: "Book updated!" });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form
          className="input-group mb-3 put-container"
          onSubmit={this.handleSubmit}
        >
          <input
            className="form-control put-input"
            type="text"
            name="title"
            placeholder="New Title"
            onChange={this.handleChange}
          />
          <input
            className="form-control input-group-prepend put-input"
            type="text"
            name="author"
            placeholder="New Author"
            onChange={this.handleChange}
          ></input>
          <input
            className="btn btn-primary input-group-append"
            type="submit"
          ></input>
        </form>
        <p className="message">{this.state.message}</p>
      </div>
    );
  }
}

export default Put;
