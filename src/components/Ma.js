import React,{Component} from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react';

const containerStyle = {
      position: 'relative',  
      width: '500px',
      height: '395px',
      borderRadius: '0px 0px 36px 0px',
    }

export class MapView extends Component { 
    render() {
      return (
        <>
        <Map
        style={containerStyle}
        google={this.props.google} zoom={14}
        center={{
            lat: 40.854885,
            lng: -88.081807
          }}>
        </Map>
        </>
        );
    }
  }

export default GoogleApiWrapper({
    apiKey: `${process.env.REACT_APP_API_KEY}`
  })(MapView)
