import React, { Component } from "react";

class Form extends Component {
  state = {
    addressInput: ""
  };

  handleInputChange = event => {
    this.setState({
      addressInput: event.target.value
    });

    setTimeout(this.props.formSubmit(this.state.addressInput), 2000);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.formSubmit(this.state.addressInput);
  };

  render() {
    return (
      <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.addressInput}
            placeholder="Enter address..."
          />
        </form>
      </div>
    );
  }
}

export default Form;
