import React, { Component } from "react";
import SideResultItem from "./results/SideResultItem";

class SideNav extends Component {
  render() {
    console.log(this.props.recentSearches);
    const addresses = this.props.recentSearches.map(address => (
      <SideResultItem getLatLong={this.props.getLatLong} address={address} />
    ));
    return (
      <div className="side-nav">
        <div>
          <h3>Recent Searches</h3>
          <h4>{this.props.sideNavText}</h4>
          {addresses}
        </div>
      </div>
    );
  }
}

export default SideNav;
