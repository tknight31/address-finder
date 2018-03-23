import React from "react";

const ResultItem = props => {
  const handleMoreClick = () => {
    props.searchById(props.result.Id);
  };

  const handleRetrieveClick = () => {
    props.retrieveAddress(props.result.Id);
  };

  return (
    <div className="result">
      {props.result.Text} {props.result.Description}
      {props.result.Type === "Address" ? (
        <button onClick={handleRetrieveClick}>Retrieve</button>
      ) : (
        <button onClick={handleMoreClick}>More</button>
      )}
    </div>
  );
};

export default ResultItem;
