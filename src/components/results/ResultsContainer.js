import React, { Component } from "react";
import ResultsList from "./ResultsList";
import Form from "./Form";

class ResultsContainer extends Component {
  state = {
    searchResults: []
  };

  searchAddresses = term => {
    const fetchUrl =
      "http://api.addressy.com/Capture/Interactive/Find/v1.00/json3.ws?Key=TJ14-UK74-BG59-BB49&Text=" +
      term +
      "&Limit=10&Language=";

    fetch(fetchUrl)
      .then(res => res.json())
      //   .then(json => console.log(json.Items));
      .then(json =>
        this.setState({
          searchResults: json.Items
        })
      );
  };

  searchById = id => {
    const fetchUrl = `http://api.addressy.com/Capture/Interactive/Find/v1.00/json3.ws?Key=TJ14-UK74-BG59-BB49&Container=${id}`;

    fetch(fetchUrl)
      .then(res => res.json())
      .then(json =>
        this.setState({
          searchResults: json.Items
        })
      );
  };

  retrieveAddress = id => {
    const fetchUrl = `http://api.addressy.com/Capture/Interactive/Retrieve/v1.00/json3.ws?Key=TJ14-UK74-BG59-BB49&Id=${id}`;

    this.setState({
      searchResults: []
    });

    fetch(fetchUrl)
      .then(res => res.json())
      .then(json => this.props.getLatLong(json.Items[0]));
  };

  render() {
    return (
      <div className="results-container">
        <Form formSubmit={this.searchAddresses} />
        <ResultsList
          results={this.state.searchResults}
          searchById={this.searchById}
          retrieveAddress={this.retrieveAddress}
        />
      </div>
    );
  }
}

export default ResultsContainer;
