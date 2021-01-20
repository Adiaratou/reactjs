import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '75%',
  height: '75%'
};

class Contact extends Component {
render() {
return (
<div>
<h2>GOT QUESTIONS?</h2>
<p>The easiest thing to do is post on
our <a href="http://forum.kirupa.com">forums</a>.
</p>


<footer>
<Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: -1.2884,
              lng: 36.8233
            }
          }
        />
</footer>
</div>
);
}
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBxT-gNyllQqyDJ-PKyP-fyehKkbvgrNCI'
  })(Contact);;
  