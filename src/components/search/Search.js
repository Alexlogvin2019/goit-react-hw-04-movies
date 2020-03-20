import React, { Component } from "react";

export default class Search extends Component {
  state = {
    inputValue: ""
  };

  handleChange = ({ target }) => {
    this.setState({ inputValue: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.inputValue);
    this.setState({
      inputValue: ""
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Search movies..."
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
