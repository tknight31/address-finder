import React, { Component } from "react";
import ResultItem from "./ResultItem";

class ResultsList extends Component {
  render() {
    const resultItems = this.props.results.map(result => (
      <ResultItem
        key={result.Id}
        result={result}
        searchById={this.props.searchById}
        retrieveAddress={this.props.retrieveAddress}
      />
    ));
    return <div className="results-list">{resultItems}</div>;
  }
}

export default ResultsList;
