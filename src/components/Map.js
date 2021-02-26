import React,{Component} from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapView extends Component {
    render() {
      return (
        <Map 
        style={{width: '40%', height: '50%'}}
        google={this.props.google} zoom={14}>
        
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
        </Map>
        );
    }
  }

export default GoogleApiWrapper({
    apiKey: `${process.env.REACT_APP_API_KEY}`
  })(MapView)
