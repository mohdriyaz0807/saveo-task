import React,{Component} from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react';


export class MapView extends Component {
    render() {
      return (
        <Map 
        style={{width: '40%', height: '50%',marginTop:'-10%'}}
        google={this.props.google} zoom={14}
        center={{
            lat: 40.854885,
            lng: -88.081807
          }}>
        </Map>
        );
    }
  }

export default GoogleApiWrapper({
    apiKey: `${process.env.REACT_APP_API_KEY}`
  })(MapView)
