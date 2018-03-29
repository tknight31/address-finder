import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ResultsContainer from "./components/results/ResultsContainer";
import SideNav from "./components/SideNav";
import MapContainer from "./components/MapContainer";

class App extends Component {
  state = {
    latitude: undefined,
    longitude: undefined,
    showMap: false,
    recentSearches: []
  };

  getLatLong = address => {
    this.setState({
      showMap: false
    });
    const search = (address.Line1 + " " + address.PostalCode)
      .split(" ")
      .join("+");
    const latLongFetch = `https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=AIzaSyADy15uuIxjqKy2M_u64j4aVejSolWtXnI`;
    fetch(latLongFetch)
      .then(res => res.json())
      .then(json =>
        this.setState({
          latitude: json.results[0].geometry.location.lat,
          longitude: json.results[0].geometry.location.lng,
          showMap: true,
          recentSearches: [...this.state.recentSearches, address]
        })
      );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="main-wrapper">
          <SideNav
            recentSearches={this.state.recentSearches}
            getLatLong={this.getLatLong}
          />
          <div className="main-container">
            <div>
              <ResultsContainer getLatLong={this.getLatLong} />
            </div>
            <div className="map-container">
              {this.state.showMap ? (
                <MapContainer
                  latitude={this.state.latitude}
                  longitude={this.state.longitude}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
