import React, { Component } from "react";
import axios from "axios";

export class Post extends Component {
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
    axios
      .post("https://best-books-tkling.herokuapp.com/ourbooks", {
        title: this.state.title,
        author: this.state.author
      })
      .then(res => {
        console.log(res);
        this.props.getData();
        this.setState({ message: "Book added!" });
      })

      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form className="input-group mb-3" onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
          ></input>
          <input
            className="form-control input-group-prepend"
            type="text"
            name="author"
            placeholder="Author"
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

export default Post;
