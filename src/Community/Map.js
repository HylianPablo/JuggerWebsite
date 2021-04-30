/*import React from "react";
import{GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";


function Map(){

  return(
    <GoogleMap 
      defaultZoom={6} 
      defaultCenter={{lat: 41.66635780075186, lng: -4.719226916816413}}
    />
  );
}


const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function Comunidad(){
  return(
    <div style ={{width: '100vw', height: '100vh'}}>
      <MapWrapped 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC8V7Gsq-RWXuJDaKAfsVegX724CnbHEfk`} 
        loadingElement={<div style={{ height: "100%"}}/>}
        coantainerElement={<div style={{ height: "100%"}}/>}
        mapElement={<div style={{ height: "100%"}}/>}
      />
    </div>
  );
}*/


import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import credentials from "./credentials";

//import spring from "../assets/spring.png";

const mapStyles = {
  width: "100%",
  height: "90%",
  position: 'relative',
};

const beaches = [
  ["Bushido", 41.66635780075186, -4.719226916816413, 1],
  ["Meister", 40.416775, -3.703790, 2],
  ["Tercios", 37.992241, 151.157507, 3],
];

const image =
"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

//40.416775
//-3.703790

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={6.5}
        style={mapStyles}
        initialCenter={{
          lat: 40.416775,
          lng: -3.703790,
        }}
        onClick={this.onMapClicked}
      >
          <Marker
            onClick={this.onMarkerClick}
            title={'Equipos Valladolid'} //pa que sirve esta vaina?
            name={'Bushido'}
            position={{lat: 41.66635780075186, lng: -4.719226916816413}}
            icon={{
              url: image,
              //anchor: new google.maps.Point(32,32),
              //scaledSize: new google.maps.Size(64,64)
            }}/>

          <Marker
            onClick={this.onMarkerClick}
            title={'Equipos Madrid'} //pa que sirve esta vaina?
            name={'Meister'}
            position={{lat: 40.416775, lng: -3.703790,}} />

          <Marker
            onClick={this.onMarkerClick}
            title={'Equipos Murcia'} //pa que sirve esta vaina?
            name={'Tercios'}
            position={{lat: 37.992241, lng: -1.130654}} />



        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: credentials.mapsKey,
})(MapContainer);