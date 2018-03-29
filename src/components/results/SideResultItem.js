import React from "react";

const SideResultItem = props => {
  const handleClick = () => {
    console.log("hitting");
    props.getLatLong(props.address);
  };

  return (
    <div className="side-result" onClick={handleClick}>
      {props.address.Line1}
    </div>
  );
};

export default SideResultItem;
